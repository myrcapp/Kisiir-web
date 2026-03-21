import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import screenScan from "@/assets/screen-scan.png";
import screenCompat from "@/assets/screen-compatibility.png";
import SplinePlaceholder from "./SplinePlaceholder";

const signatures = ["Signature Kisiir™", "Ondas", "Nami", "Yaba", "Rizo", "Silmus", "Kurlu", "Spiro", "Coilya", "Zarha"];

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const Hero = () => {
  const [familyIndex, setFamilyIndex] = useState(0);
  const { scrollY } = useScroll();
  const phoneY = useTransform(scrollY, [0, 600], [0, 80]);
  const phone2Y = useTransform(scrollY, [0, 600], [0, 120]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFamilyIndex((i) => (i + 1) % signatures.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-[-100px] right-[-200px] w-[700px] h-[700px] rounded-full bg-kisiir-orange/[0.08] blur-[120px] animate-float-blob pointer-events-none" />
      <div className="absolute bottom-[-150px] left-[-200px] w-[500px] h-[500px] rounded-full bg-kisiir-teal/[0.05] blur-[100px] animate-float-blob-alt pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 bg-kisiir-green-soft rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-kisiir-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-kisiir-teal" />
              </span>
              <span className="text-sm font-medium text-kisiir-teal">Beta ouverte — Gratuite sur iOS & Android</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.08] text-kisiir-dark mb-6 tracking-tight">
              Et si le problème n'était pas{" "}
              <span className="font-playfair text-kisiir-orange">vos cheveux</span> ?
            </h1>

            <p className="text-lg text-kisiir-text-mid leading-relaxed mb-8 max-w-xl">
              Kisiir analyse la compatibilité de chaque produit avec votre{" "}
              <span className="relative inline-block w-[160px] h-[1.5em] align-bottom overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={familyIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute left-0 font-bold text-kisiir-orange"
                  >
                    {signatures[familyIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              . Scannez, comparez, trouvez ce qui marche vraiment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="https://testflight.apple.com/join/7DnZhFUm"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2.5 bg-kisiir-orange text-white font-bold px-7 py-4 rounded-[60px] shadow-[0_8px_30px_rgba(232,83,14,0.3)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(232,83,14,0.4)] transition-all duration-300 active:scale-[0.97]"
              >
                <AppleIcon />
                Rejoindre la beta
              </a>
              <a
                href="#features"
                className="group inline-flex items-center gap-1.5 text-kisiir-text-mid font-medium hover:text-kisiir-orange transition-colors duration-200"
              >
                Découvrir
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap gap-6 sm:gap-8 border-t border-kisiir-orange/[0.08] pt-6">
              {[
                { num: "1 200", suffix: "+", label: "Avis collectés" },
                { num: "1 200", suffix: "+", label: "Produits référencés" },
                { num: "9", suffix: "", label: "Familles capillaires" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-2xl font-extrabold text-kisiir-dark">
                    {s.num}<span className="text-kisiir-orange">{s.suffix}</span>
                  </p>
                  <p className="text-sm text-kisiir-text-light">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Phone mockups */}
          <div className="relative flex justify-center lg:justify-end">
            {/* 3D placeholder */}
            <SplinePlaceholder
              width="500px"
              height="500px"
              fallbackGradient="radial-gradient(circle, rgba(232,83,14,0.15), rgba(13,148,136,0.05), transparent)"
              animationType="float"
              className="absolute opacity-50 z-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"
            />

            <motion.div style={{ y: phoneY }} className="relative z-10">
              <motion.img
                src={screenScan}
                alt="Kisiir Scanner"
                className="w-[240px] sm:w-[280px] rounded-[32px] shadow-[0_30px_80px_rgba(15,9,6,0.18)] relative z-20"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
              />
            </motion.div>
            <motion.div style={{ y: phone2Y }} className="absolute top-8 -right-4 sm:right-0 lg:right-8 z-[5]">
              <motion.img
                src={screenCompat}
                alt="Kisiir Compatibilité"
                className="w-[200px] sm:w-[240px] rounded-[32px] shadow-[0_30px_80px_rgba(15,9,6,0.14)] rotate-[5deg]"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
