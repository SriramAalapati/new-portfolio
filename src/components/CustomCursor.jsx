import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor({ theme = "light" }) {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Small circle = actual pointer
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  // Big circle = trailing
  const trailX = useMotionValue(0);
  const trailY = useMotionValue(0);

  const smoothTrailX = useSpring(trailX, { stiffness: 300, damping: 25 });
  const smoothTrailY = useSpring(trailY, { stiffness: 300, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      pointerX.set(e.clientX);
      pointerY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);
    };

    const show = () => setIsVisible(true);
    const hide = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    const hoverTargets = document.querySelectorAll("a, button, .hoverable");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsHovering(true));
      el.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsHovering(true));
        el.removeEventListener("mouseleave", () => setIsHovering(false));
      });
    };
  }, [pointerX, pointerY, trailX, trailY]);

  if (!isVisible) return null;

  // Theme colors
  const colors = {
    light: { big: "rgba(99,102,241,0.25)", small: "rgba(99,102,241,0.9)" },
    dark: { big: "rgba(236,78,57,0.25)", small: "rgba(236,78,57,0.9)" },
  };
  const { big, small } = theme === "dark" ? colors.dark : colors.light;

  return (
    <>
      {/* Trailing Big Circle (smaller halo so pointer feels centered) */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{
          translateX: smoothTrailX,
          translateY: smoothTrailY,
        }}
        animate={{
          scale: isHovering ? 1.2 : 1, // smaller scale than before
          opacity: isHovering ? 0.5 : 0.25, // subtle
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div
          className="w-10 h-10 md:w-12 md:h-12 rounded-full pointer-events-none"
          style={{ backgroundColor: big }}
        ></div>
      </motion.div>

      {/* Small Circle = Actual Pointer */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          translateX: pointerX,
          translateY: pointerY,
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      >
        <div
          className="w-4 h-4 md:w-6 md:h-6 rounded-full pointer-events-none"
          style={{ backgroundColor: small }}
        ></div>
      </motion.div>
    </>
  );
}
