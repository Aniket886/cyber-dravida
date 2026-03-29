import { useState, useEffect } from "react";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;
    if (isTouchDevice) return;

    setVisible(true);
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed w-2 h-2 rounded-full bg-primary pointer-events-none z-[9998] mix-blend-screen"
      style={{
        left: pos.x - 4,
        top: pos.y - 4,
        transition: "left 0.15s ease-out, top 0.15s ease-out",
      }}
    />
  );
};

export default CustomCursor;
