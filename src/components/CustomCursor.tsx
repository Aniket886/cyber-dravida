import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const hovering = useRef(false);
  const visible = useRef(false);
  const raf = useRef<number>(0);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    visible.current = true;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX - 3}px`;
        dotRef.current.style.top = `${e.clientY - 3}px`;
        dotRef.current.style.opacity = "1";
      }
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest("a, button, [role='button'], input, textarea, select, [data-clickable]");
      hovering.current = !!isClickable;
      if (ringRef.current) {
        ringRef.current.style.width = isClickable ? "48px" : "32px";
        ringRef.current.style.height = isClickable ? "48px" : "32px";
        ringRef.current.style.borderColor = isClickable
          ? "hsl(239 84% 67% / 0.6)"
          : "hsl(239 84% 67% / 0.35)";
      }
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        const size = hovering.current ? 48 : 32;
        ringRef.current.style.left = `${ring.current.x - size / 2}px`;
        ringRef.current.style.top = `${ring.current.y - size / 2}px`;
        ringRef.current.style.opacity = "1";
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
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-[6px] h-[6px] rounded-full pointer-events-none z-[9999] opacity-0"
        style={{ background: "hsl(239 84% 67%)" }}
      />
      <div
        ref={ringRef}
        className="fixed w-8 h-8 rounded-full pointer-events-none z-[9998] opacity-0"
        style={{
          border: "1.5px solid hsl(239 84% 67% / 0.35)",
          transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
