import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 20;

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const points = useRef<{ x: number; y: number; time: number }[]>([]);
  const hovering = useRef(false);
  const visible = useRef(false);
  const raf = useRef<number>(0);
  const pulsePhase = useRef(0);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      visible.current = true;
      points.current.unshift({ x: e.clientX, y: e.clientY, time: performance.now() });
      if (points.current.length > TRAIL_LENGTH) points.current.length = TRAIL_LENGTH;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      hovering.current = !!target.closest("a, button, [role='button'], input, textarea, select, [data-clickable]");
    };

    const onLeave = () => { visible.current = false; };
    const onEnter = () => { visible.current = true; };

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      pulsePhase.current += 0.05;

      if (visible.current && points.current.length > 1) {
        const { x, y } = mouse.current;
        const isHover = hovering.current;

        // Draw smooth ribbon trail
        const pts = points.current;
        if (pts.length >= 2) {
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          // Draw trail as segments with decreasing width and opacity
          for (let i = 0; i < pts.length - 1; i++) {
            const t = i / (pts.length - 1);
            const width = (1 - t) * (isHover ? 4 : 2.5);
            const opacity = (1 - t) * 0.6;
            
            // Color: indigo at head, fading to transparent
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            
            // Use quadratic curve for smoothness
            if (i < pts.length - 2) {
              const midX = (pts[i + 1].x + pts[i + 2].x) / 2;
              const midY = (pts[i + 1].y + pts[i + 2].y) / 2;
              ctx.quadraticCurveTo(pts[i + 1].x, pts[i + 1].y, midX, midY);
            } else {
              ctx.lineTo(pts[i + 1].x, pts[i + 1].y);
            }

            ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`;
            ctx.lineWidth = width;
            ctx.stroke();
          }
        }

        // Crosshair cursor
        const armLen = isHover ? 10 : 6;
        const gap = isHover ? 4 : 3;
        const pulse = isHover ? Math.sin(pulsePhase.current) * 0.15 + 0.85 : 1;
        const alpha = pulse;

        ctx.strokeStyle = `rgba(165, 180, 252, ${alpha})`;
        ctx.lineWidth = 1.5;
        ctx.shadowColor = "rgba(99, 102, 241, 0.6)";
        ctx.shadowBlur = isHover ? 12 : 6;

        // 4 arms of crosshair
        const arms = [
          [x, y - gap, x, y - gap - armLen],
          [x, y + gap, x, y + gap + armLen],
          [x - gap, y, x - gap - armLen, y],
          [x + gap, y, x + gap + armLen, y],
        ];
        for (const [x1, y1, x2, y2] of arms) {
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }

        // Center dot
        ctx.shadowBlur = isHover ? 16 : 8;
        ctx.fillStyle = `rgba(199, 210, 254, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, isHover ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Hover: rotating corner brackets
        if (isHover) {
          const r = 14 + Math.sin(pulsePhase.current * 1.5) * 2;
          const bracketLen = 5;
          const angle = pulsePhase.current * 0.8;

          ctx.strokeStyle = `rgba(129, 140, 248, 0.5)`;
          ctx.lineWidth = 1;
          ctx.shadowBlur = 4;

          for (let corner = 0; corner < 4; corner++) {
            const a = angle + (corner * Math.PI) / 2;
            const cx = x + Math.cos(a) * r;
            const cy = y + Math.sin(a) * r;
            const perpA = a + Math.PI / 2;

            ctx.beginPath();
            ctx.moveTo(
              cx + Math.cos(perpA) * bracketLen,
              cy + Math.sin(perpA) * bracketLen
            );
            ctx.lineTo(cx, cy);
            ctx.lineTo(
              cx - Math.cos(perpA) * bracketLen,
              cy - Math.sin(perpA) * bracketLen
            );
            ctx.stroke();
          }
        }

        ctx.shadowColor = "transparent";
        ctx.shadowBlur = 0;
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
