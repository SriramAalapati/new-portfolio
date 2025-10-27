import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export const MaskedText = ({ child, maskSize = 100 }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const size = isHovered ? maskSize : 0;
  const updateMousePosition = (e) => setMousePosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

  useEffect(() => {
    document.body.style.transition = "background-color 0.5s ease";
    if (isHovered) document.body.classList.add("bg-gray-100", "dark:bg-gray-900");
    else document.body.classList.remove("bg-gray-100", "dark:bg-gray-900");
  }, [isHovered]);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={updateMousePosition}
      className="masked absolute"
      animate={{ WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2}px`, WebkitMaskSize: `${size}px` }}
      transition={{ type: "tween", ease: "backOut", duration: 0.35 }}
    >
      {child}
    </motion.div>
  );
};