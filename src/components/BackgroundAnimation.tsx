'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.01;
      
      // Create subtle flowing waves that cover the full screen
      const waveCount = window.innerWidth < 768 ? 3 : 4;
      
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        
        const amplitude = 25 + i * 8; // Wave height
        const frequency = 0.002 + i * 0.0008; // Wave frequency
        const phase = time + i * Math.PI / 2; // Phase offset for each wave
        const yOffset = canvas.height * (0.1 + i * 0.25); // Start from top, spread across screen
        
        // Draw flowing sine wave
        for (let x = 0; x <= canvas.width; x += 2) {
          const y = yOffset + Math.sin(x * frequency + phase) * amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        // Style the wave with brand colors - increased opacity
        const opacity = window.innerWidth < 768 ? 0.3 : 0.4;
        // Alternate between subtle maroon and blue for different waves
        const color = i % 2 === 0 ? 'rgba(128, 0, 0, ' : 'rgba(7, 10, 115, ';
        ctx.strokeStyle = color + `${opacity - i * 0.06})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      // Add subtle geometric shapes that float across the full screen
      const shapeCount = window.innerWidth < 768 ? 4 : 7;
      
      for (let i = 0; i < shapeCount; i++) {
        const x = (canvas.width / (shapeCount + 1)) * (i + 1);
        const y = (canvas.height / 4) * (1 + (i % 3)) + Math.sin(time * 0.5 + i) * 40;
        const size = 3 + Math.sin(time + i) * 1.5;
        
        // Draw subtle floating rectangles
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(time * 0.15 + i);
        
        // Use brand colors for floating shapes - increased opacity
        const shapeColor = i % 2 === 0 ? 'rgba(128, 0, 0, ' : 'rgba(7, 10, 115, ';
        ctx.fillStyle = shapeColor + `${0.25 + Math.sin(time + i) * 0.1})`;
        ctx.fillRect(-size/2, -size/2, size, size);
        
        ctx.restore();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
      aria-hidden="true"
    />
  );
}
