import { useEffect, useMemo, useRef } from "react";

const TRAIL_COUNT = 8;

const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

const CustomCursor = () => {
  const coreRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);

  const mouse = useRef({ x: -120, y: -120 });
  const framePos = useRef({ x: -120, y: -120 });
  const trailPos = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: -120, y: -120 })));

  const hovering = useRef(false);
  const visible = useRef(false);
  const rafRef = useRef<number>(0);
  const rotationRef = useRef(0);

  const trailItems = useMemo(() => Array.from({ length: TRAIL_COUNT }), []);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const onMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
      visible.current = true;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      hovering.current = !!target.closest(
        "a, button, [role='button'], input, textarea, select, [data-clickable]"
      );
    };

    const onLeave = () => {
      visible.current = false;
    };

    const onEnter = () => {
      visible.current = true;
    };

    const animate = () => {
      // Core tracks quickly
      const coreX = lerp(trailPos.current[0].x, mouse.current.x, 0.5);
      const coreY = lerp(trailPos.current[0].y, mouse.current.y, 0.5);
      trailPos.current[0].x = coreX;
      trailPos.current[0].y = coreY;

      // Angular frame tracks with softer lag
      framePos.current.x = lerp(framePos.current.x, mouse.current.x, 0.2);
      framePos.current.y = lerp(framePos.current.y, mouse.current.y, 0.2);

      // Chain trail points for smooth ghosting
      for (let i = 1; i < TRAIL_COUNT; i += 1) {
        trailPos.current[i].x = lerp(trailPos.current[i].x, trailPos.current[i - 1].x, 0.34);
        trailPos.current[i].y = lerp(trailPos.current[i].y, trailPos.current[i - 1].y, 0.34);
      }

      const isHover = hovering.current;
      const opacity = visible.current ? 1 : 0;

      if (coreRef.current) {
        coreRef.current.style.opacity = `${opacity}`;
        coreRef.current.style.transform = `translate3d(${coreX - 6}px, ${coreY - 6}px, 0) rotate(45deg) scale(${isHover ? 1.25 : 1})`;
      }

      if (frameRef.current) {
        rotationRef.current += isHover ? 0.03 : 0.012;
        frameRef.current.style.opacity = `${opacity}`;
        frameRef.current.style.transform = `translate3d(${framePos.current.x - 14}px, ${framePos.current.y - 14}px, 0) rotate(${rotationRef.current}rad) scale(${isHover ? 1.15 : 1})`;
      }

      trailRefs.current.forEach((element, index) => {
        if (!element) return;

        const point = trailPos.current[index];
        const progress = index / TRAIL_COUNT;
        const scale = 1 - progress * 0.55;
        const alpha = (1 - progress) * (visible.current ? 0.4 : 0);

        element.style.opacity = `${alpha}`;
        element.style.transform = `translate3d(${point.x - 4}px, ${point.y - 4}px, 0) rotate(45deg) scale(${scale})`;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {trailItems.map((_, index) => (
        <div
          key={index}
          ref={(element) => {
            trailRefs.current[index] = element;
          }}
          className="fixed h-2 w-2 pointer-events-none z-[9997] bg-primary/40 border border-secondary/40 rounded-[2px] opacity-0 will-change-transform"
        />
      ))}

      <div
        ref={frameRef}
        className="fixed h-7 w-7 pointer-events-none z-[9998] border border-primary/40 rounded-[4px] opacity-0 will-change-transform"
        style={{
          boxShadow: "0 0 16px hsl(var(--primary) / 0.18)",
        }}
      />

      <div
        ref={coreRef}
        className="fixed h-3 w-3 pointer-events-none z-[9999] border border-primary bg-primary/30 rounded-[2px] opacity-0 will-change-transform"
        style={{
          boxShadow: "0 0 14px hsl(var(--primary) / 0.35)",
        }}
      />
    </>
  );
};

export default CustomCursor;
