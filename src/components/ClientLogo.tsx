import React from "react";
import { motion } from "framer-motion";

interface ClientLogoProps {
  src: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
}

const ClientLogo = ({
  src = "https://api.dicebear.com/7.x/avataaars/svg?seed=logo",
  alt = "Client Logo",
  href,
  width = 180,
  height = 120,
}: ClientLogoProps) => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  const LogoContent = () => (
    <motion.div
      className="flex items-center justify-center w-full h-full bg-white rounded-md p-4"
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.6 }}
      variants={logoVariants}
    >
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
        style={{
          maxWidth: "100%",
          maxHeight: "100%",
          filter: "grayscale(100%) opacity(70%)",
          transition: "filter 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.filter = "grayscale(0%) opacity(100%)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.filter = "grayscale(100%) opacity(70%)";
        }}
      />
    </motion.div>
  );

  return (
    <div className="flex items-center justify-center" style={{ width, height }}>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
          aria-label={`Visit ${alt}'s website`}
        >
          <LogoContent />
        </a>
      ) : (
        <LogoContent />
      )}
    </div>
  );
};

export default ClientLogo;
