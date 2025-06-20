import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type FadeInOnScrollProps = {
  children: React.ReactNode;
  className?: string;
};

export const FadeInOnScroll = ({ children, className = "" }: FadeInOnScrollProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
