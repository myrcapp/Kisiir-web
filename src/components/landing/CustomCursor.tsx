import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const x = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const y = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    setVisible(true);
    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    const selector = "a, button, [role=button], .card, input, textarea, select";

    const observe = () => {
      document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    };

    window.addEventListener("mousemove", move);
    observe();

    const observer = new MutationObserver(observe);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", move);
      observer.disconnect();
      document.querySelectorAll(selector).forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  const size = hovered ? 48 : 24;

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
      style={{
        x,
        y,
        width: size,
        height: size,
        backgroundColor: "#E8530E",
        opacity: hovered ? 0.25 : 0.15,
        translateX: "-50%",
        translateY: "-50%",
        transition: "width 0.2s, height 0.2s, opacity 0.2s",
      }}
    />
  );
};

export default CustomCursor;
