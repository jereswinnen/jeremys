import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface Props {
  imageSrc: string;
}

const ThreeImageEffect: React.FC<Props> = ({ imageSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });
  const mouseEnter = useRef(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const updateSize = () => {
    if (
      !containerRef.current ||
      !canvasRef.current ||
      !rendererRef.current ||
      !imageRef.current ||
      !cameraRef.current
    )
      return;

    const width = containerRef.current.clientWidth;
    const height = width * (imageRef.current.height / imageRef.current.width);

    if (canvasRef.current) {
      canvasRef.current.style.width = `${width}px`;
      canvasRef.current.style.height = `${height}px`;
    }

    rendererRef.current.setSize(width, height);

    if (cameraRef.current) {
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(updateSize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    imageRef.current = new Image();
    imageRef.current.src = imageSrc;
    imageRef.current.onload = () => {
      const width = containerRef.current!.clientWidth;
      const height =
        width * (imageRef.current!.height / imageRef.current!.width);

      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(
        imageSrc,
        (loadedTexture) => {
          setImageLoaded(true);
          initScene(loadedTexture, width, height);
        },
        undefined,
        (error) => console.error("Error loading texture:", error)
      );

      function initScene(
        loadedTexture: THREE.Texture,
        width: number,
        height: number
      ) {
        const CAMERA_POS = 500;
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
          50,
          width / height,
          10,
          1000
        );
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current!,
          alpha: true,
          antialias: true,
        });

        rendererRef.current = renderer;

        camera.position.z = CAMERA_POS;
        camera.fov = (2 * Math.atan(height / 2 / CAMERA_POS) * 180) / Math.PI;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const geometry = new THREE.PlaneGeometry(1, 1, 100, 100);
        const material = new THREE.ShaderMaterial({
          uniforms: {
            uTexture: { value: loadedTexture },
            uTextureSize: {
              value: new THREE.Vector2(
                loadedTexture.image.width,
                loadedTexture.image.height
              ),
            },
            uQuadSize: { value: new THREE.Vector2(width, height) },
            uMouseOverPos: { value: new THREE.Vector2(0.5, 0.5) },
            uMouseEnter: { value: 0 },
            uScrollVelocity: { value: 0 },
          },
          vertexShader: `
            varying vec2 vUv;
            varying vec2 vUvCover;
            uniform vec2 uTextureSize;
            uniform vec2 uQuadSize;
            uniform float uScrollVelocity;

            vec2 getCoverUvVert(vec2 uv, vec2 textureSize, vec2 quadSize) {
              vec2 ratio = vec2(
                min((quadSize.x / quadSize.y) / (textureSize.x / textureSize.y), 1.0),
                min((quadSize.y / quadSize.x) / (textureSize.y / textureSize.x), 1.0)
              );
              return vec2(
                uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
                uv.y * ratio.y + (1.0 - ratio.y) * 0.5
              );
            }

            void main() {
              vUv = uv;
              vUvCover = getCoverUvVert(uv, uTextureSize, uQuadSize);
              
              vec3 pos = position;
              pos.y = pos.y - (sin(uv.x * 3.141592653589793) * min(abs(uScrollVelocity), 5.0) * sign(uScrollVelocity) * -0.01);
              
              gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
          `,
          fragmentShader: `
            precision highp float;
            varying vec2 vUv;
            varying vec2 vUvCover;
            uniform sampler2D uTexture;
            uniform vec2 uMouseOverPos;
            uniform float uMouseEnter;
            uniform vec2 uQuadSize;

            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

            float snoise(vec2 v) {
              const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
              vec2 i  = floor(v + dot(v, C.yy));
              vec2 x0 = v -   i + dot(i, C.xx);
              vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
              vec4 x12 = x0.xyxy + C.xxzz;
              x12.xy -= i1;
              i = mod289(i);
              vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
              vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
              m = m * m; m = m * m;
              vec3 x = 2.0 * fract(p * C.www) - 1.0;
              vec3 h = abs(x) - 0.5;
              vec3 ox = floor(x + 0.5);
              vec3 a0 = x - ox;
              m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
              vec3 g;
              g.x = a0.x * x0.x + h.x * x0.y;
              g.yz = a0.yz * x12.xz + h.yz * x12.yw;
              return 130.0 * dot(m, g);
            }

            void main() {
              vec2 texCoords = vUvCover;
              float aspectRatio = uQuadSize.y / uQuadSize.x;
              
              float circle = 1.0 - distance(
                vec2(uMouseOverPos.x, (1.0 - uMouseOverPos.y) * aspectRatio),
                vec2(vUv.x, vUv.y * aspectRatio)
              ) * 15.0;
              
              float noise = snoise(gl_FragCoord.xy);
              
              texCoords.x += mix(0.0, circle * noise * 0.01, uMouseEnter);
              texCoords.y += mix(0.0, circle * noise * 0.01, uMouseEnter);
              
              vec4 texture = texture2D(uTexture, texCoords);
              gl_FragColor = texture;
            }
          `,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.set(width, height, 1);
        scene.add(mesh);

        const handleMouseMove = (e: MouseEvent) => {
          const rect = canvasRef.current?.getBoundingClientRect();
          if (!rect) return;
          mousePos.current = {
            x: (e.clientX - rect.left) / rect.width,
            y: (e.clientY - rect.top) / rect.height,
          };
        };

        const handleMouseEnter = () => {
          mouseEnter.current = 1;
        };
        const handleMouseLeave = () => {
          mouseEnter.current = 0;
        };

        canvasRef.current?.addEventListener("mousemove", handleMouseMove);
        canvasRef.current?.addEventListener("mouseenter", handleMouseEnter);
        canvasRef.current?.addEventListener("mouseleave", handleMouseLeave);

        function animate() {
          if (!material.uniforms) return;

          material.uniforms.uMouseOverPos.value.x = lerp(
            material.uniforms.uMouseOverPos.value.x,
            mousePos.current.x,
            0.05
          );
          material.uniforms.uMouseOverPos.value.y = lerp(
            material.uniforms.uMouseOverPos.value.y,
            mousePos.current.y,
            0.05
          );
          material.uniforms.uMouseEnter.value = lerp(
            material.uniforms.uMouseEnter.value,
            mouseEnter.current,
            0.05
          );

          renderer.render(scene, camera);
          requestAnimationFrame(animate);
        }

        animate();
      }

      return () => {
        texture.dispose();
        rendererRef.current?.dispose();
      };
    };
  }, [imageSrc]);

  return (
    <div ref={containerRef} className="w-full relative">
      <canvas ref={canvasRef} className="w-full" />
      {!imageLoaded && <div>Loading...</div>}
    </div>
  );
};

const lerp = (start: number, end: number, damping: number) =>
  start * (1 - damping) + end * damping;

export default ThreeImageEffect;
