import { useRef, useEffect } from 'react';

export function ParticlesBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvasRef.current as HTMLCanvasElement;
    if (!el) return;
    const ctx = el.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) return;
    
    el.width = window.innerWidth;
    el.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; dx: number; dy: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * el.width,
        y: Math.random() * el.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function draw() {
      ctx.clearRect(0, 0, el.width, el.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${p.opacity})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > el.width) p.dx *= -1;
        if (p.y < 0 || p.y > el.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    }
    draw();

    const onResize = () => {
      el.width = window.innerWidth;
      el.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => { 
      cancelAnimationFrame(animId); 
      window.removeEventListener('resize', onResize); 
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}
