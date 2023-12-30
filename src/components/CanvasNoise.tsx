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
  className?: string;
  noiseColor?: string;
}

const CanvasNoise: React.FC<CanvasNoiseProps> = ({
  className,
  noiseColor = "#ff0000",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainer = useRef<HTMLDivElement>(null);
  let noise: NoiseParticle[] = [];
  let lastPaintTime = 0;

  const initializeNoise = () => {
    if (!canvasRef.current) return;

    const winArea = canvasRef.current.width * canvasRef.current.height;
    const smallNoiseDensity = 0.0004; // was 0.0002
    const mediumNoiseDensity = 0.0002; // was 0.0001
    const largeNoiseDensity = 0.00008; // was 0.00004
    const smallNoiseCount = winArea * smallNoiseDensity;
    const mediumNoiseCount = winArea * mediumNoiseDensity;
    const largeNoiseCount = winArea * largeNoiseDensity;
    noise = [];
    for (let i = 0; i < smallNoiseCount; i++) {
      noise.push(
        new NoiseParticle({
          canvas: canvasRef.current,
          size: 1.5,
          speed: 30,
          color: noiseColor,
        }),
      );
    }
    for (let i = 0; i < mediumNoiseCount; i++) {
      noise.push(
        new NoiseParticle({
          canvas: canvasRef.current,
          size: 2,
          speed: 20,
          color: noiseColor,
        }),
      );
    }
    for (let i = 0; i < largeNoiseCount; i++) {
      noise.push(
        new NoiseParticle({
          canvas: canvasRef.current,
          size: 2.5,
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
    const container = canvasContainer.current;
    if (!canvas || !container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === container) {
          const { width, height } = entry.contentRect;
          canvas.width = width;
          canvas.height = height;
          initializeNoise();
        }
      }
    });

    resizeObserver.observe(container);

    requestAnimationFrame(paintLoop);

    return () => {
      resizeObserver.disconnect();
    };
  }, [noiseColor]);

  return (
    <div ref={canvasContainer} className={className}>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CanvasNoise;
