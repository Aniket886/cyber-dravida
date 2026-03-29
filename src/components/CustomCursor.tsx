import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 15;
const DIAMOND_SIZE = 5;
const HOVER_SIZE = 8;

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef<{ x: number; y: number }[]>([]);
  const hovering = useRef(false);
  const visible = useRef(false);
  const raf = useRef<number>(0);
  const rotation = useRef(0);
  const frameCount = useRef(0);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      visible.current = true;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hovering.current = !!target.closest("a, button, [role='button'], input, textarea, select, [data-clickable]");
    };

    const onLeave = () => { visible.current = false; };
    const onEnter = () => { visible.current = true; };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount.current++;

      if (visible.current) {
        // Sample trail every 2 frames for smoother tail
        if (frameCount.current % 2 === 0) {
          trail.current.unshift({ x: mouse.current.x, y: mouse.current.y });
          if (trail.current.length > TRAIL_LENGTH) trail.current.pop();
        }

        // Draw trail particles — indigo to cyan gradient
        for (let i = trail.current.length - 1; i >= 0; i--) {
          const p = trail.current[i];
          const t = i / TRAIL_LENGTH;
          const size = lerp(3, 0.5, t);
          const opacity = lerp(0.5, 0, t);
          // Indigo (99, 102, 241) → Cyan (6, 182, 212)
          const r = Math.round(lerp(99, 6, t));
          const g = Math.round(lerp(102, 182, t));
          const b = Math.round(lerp(241, 212, t));

          ctx.beginPath();
          ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
          ctx.fill();
        }

        const { x, y } = mouse.current;
        const isHover = hovering.current;
        const size = isHover ? HOVER_SIZE : DIAMOND_SIZE;

        // Glow effect
        ctx.shadowColor = isHover ? "rgba(99, 102, 241, 0.8)" : "rgba(99, 102, 241, 0.5)";
        ctx.shadowBlur = isHover ? 18 : 10;

        if (isHover) {
          // Rotating square outline on hover
          rotation.current += 0.04;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rotation.current);
          ctx.strokeStyle = "rgba(99, 102, 241, 0.7)";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(-size, -size, size * 2, size * 2);
          ctx.restore();

          // Inner diamond
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(Math.PI / 4);
          ctx.fillStyle = "rgba(129, 140, 248, 0.9)";
          ctx.fillRect(-3, -3, 6, 6);
          ctx.restore();
        } else {
          // Diamond cursor
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(Math.PI / 4);
          ctx.fillStyle = "rgba(129, 140, 248, 0.9)";
          ctx.fillRect(-size / 2, -size / 2, size, size);
          ctx.restore();
        }

        // Reset shadow
        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
      } else {
        trail.current = [];
      }

      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
    />
  );
};

export default CustomCursor;
