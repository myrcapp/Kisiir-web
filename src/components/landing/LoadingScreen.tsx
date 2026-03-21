import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoKisiir from "@/assets/logo-kisiir.png";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-kisiir-cream"
        >
          <motion.img
            src={logoKisiir}
            alt="Kisiir"
            className="h-16 w-auto"
            animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="mt-4 text-2xl font-extrabold text-kisiir-orange font-outfit tracking-tight">
            Kisiir
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
