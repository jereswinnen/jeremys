import React, { useEffect, useRef } from "react";

interface NoiseParticleProps {
  canvas: HTMLCanvasElement;
  size: number;
  speed: number;
  color: string;
}

class NoiseParticle {
  private ctx: CanvasRenderingContext2D;
  private size: number;
  private speed: number;
  private x: number;
  private y: number;
  private color: string;

  constructor({ canvas, size, speed, color }: NoiseParticleProps) {
    this.ctx = canvas.getContext("2d")!;
    this.size = size;
    this.speed = speed;
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.color = color;
  }

  animate(delta: number) {
    //this.x += this.speed * delta; // removed to make noise move up
    this.y -= this.speed * delta;
    if (this.y < 0) {
      this.y = window.innerHeight;
    }
    if (this.x > window.innerWidth) {
      this.x = 0;
    }
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}

interface CanvasNoiseProps {
  noiseColor?: string;
}

const CanvasNoise: React.FC<CanvasNoiseProps> = ({
  noiseColor = "#ffffff",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let noise: NoiseParticle[] = [];
  let lastPaintTime = 0;

  const initializeNoise = () => {
    const winArea = window.innerWidth * window.innerHeight;
    const smallNoiseDensity = 0.0001;
    const mediumNoiseDensity = 0.00005;
    const largeNoiseDensity = 0.00002;
    const smallNoiseCount = winArea * smallNoiseDensity;
    const mediumNoiseCount = winArea * mediumNoiseDensity;
    const largeNoiseCount = winArea * largeNoiseDensity;
    noise = [];
    for (let i = 0; i < smallNoiseCount; i++) {
      noise.push(
        new NoiseParticle({
          canvas: canvasRef.current!,
          size: 1,
          speed: 30,
          color: noiseColor,
        }),
      );
    }
    for (let i = 0; i < mediumNoiseCount; i++) {
      noise.push(
        new NoiseParticle({
          canvas: canvasRef.current!,
          size: 2,
          speed: 20,
          color: noiseColor,
        }),
      );
    }
    for (let i = 0; i < largeNoiseCount; i++) {
      noise.push(
        new NoiseParticle({
          canvas: canvasRef.current!,
          size: 3,
          speed: 10,
          color: noiseColor,
        }),
      );
    }
  };

  const drawNoise = (delta: number) => {
    noise.forEach((particle) => particle.animate(delta));
  };

  const paintLoop = (timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const delta = (timestamp - lastPaintTime) / 1000;
    drawNoise(delta);
    lastPaintTime = timestamp;
    requestAnimationFrame(paintLoop);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initializeNoise();
    requestAnimationFrame(paintLoop);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initializeNoise();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [noiseColor]);

  return <canvas ref={canvasRef} />;
};

export default CanvasNoise;
