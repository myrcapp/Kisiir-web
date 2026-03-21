import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import logoKisiir from "@/assets/logo-kisiir.png";

const navLinks = [
  { label: "Fonctionnalités", href: "#features", section: "features" },
  { label: "Comment ça marche", href: "#how", section: "how" },
  { label: "Familles", href: "#families", section: "families" },
  { label: "L'app", href: "#app", section: "app" },
  { label: "Marques", href: "#b2b", section: "b2b" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section);
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      <motion.div
        id="scroll-progress"
        style={{ scaleX }}
      />
      <nav
        className={`fixed top-[3px] left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled
            ? "bg-kisiir-cream/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(15,9,6,0.06)] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <img src={logoKisiir} alt="Kisiir" className="h-8 w-auto" />
            <span className="text-xl font-bold text-kisiir-dark tracking-tight">Kisiir</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative text-sm font-medium transition-colors duration-200 pb-1 ${
                  activeSection === l.section ? "text-kisiir-orange" : "text-kisiir-text-mid hover:text-kisiir-orange"
                }`}
              >
                {l.label}
                {activeSection === l.section && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-kisiir-orange"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          <a
            href="#beta"
            className="hidden lg:inline-flex items-center gap-2 bg-kisiir-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-kisiir-dark/90 transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            Rejoindre la beta
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-kisiir-dark transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-kisiir-dark transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-kisiir-dark transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-400 ${
            mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="container py-6 flex flex-col gap-4 bg-kisiir-cream/95 backdrop-blur-xl rounded-b-2xl">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-kisiir-dark hover:text-kisiir-orange transition-colors py-1"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#beta"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 bg-kisiir-dark text-white font-semibold px-5 py-3 rounded-full mt-2"
            >
              Rejoindre la beta
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
