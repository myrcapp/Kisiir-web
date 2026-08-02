import { motion } from "framer-motion";

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const AndroidIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.523 15.341a1 1 0 01-.997-.998 1 1 0 01.997-.998 1 1 0 01.998.998 1 1 0 01-.998.998m-11.046 0a1 1 0 01-.998-.998 1 1 0 01.998-.998 1 1 0 01.997.998 1 1 0 01-.997.998m11.405-6.02l1.997-3.46a.416.416 0 00-.152-.567.416.416 0 00-.568.152L17.12 8.95c-1.46-.667-3.1-1.04-4.87-1.04-1.77 0-3.41.373-4.87 1.04L5.34 5.446a.416.416 0 00-.568-.152.416.416 0 00-.152.567l1.997 3.46C2.688 11.186.343 14.957 0 19.2h24c-.344-4.243-2.688-8.014-6.618-9.879"/>
  </svg>
);

const FinalCTA = () => (
  <section
    id="telecharger"
    className="relative py-24 lg:py-32 overflow-hidden"
    style={{ background: "linear-gradient(135deg, #E8530E, #D4440A)" }}
  >
    {/* Pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 0v20M0 10h20' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "20px 20px",
      }}
    />

    <div className="container relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
          Prête à découvrir ce qui marche{" "}
          <span className="font-playfair">vraiment</span> ?
        </h2>
        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
          Rejoignez les 10 000+ utilisatrices qui ont déjà adopté Kisiir. Gratuit, sans engagement.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://apps.apple.com/app/kisiir/id6759988563"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-kisiir-dark font-bold px-8 py-4 rounded-[60px] shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-300 active:scale-[0.97]"
          >
            <AppleIcon />
            Télécharger sur l'App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.kisiir.rcapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/10 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-[60px] hover:-translate-y-[3px] hover:bg-white/20 transition-all duration-300 active:scale-[0.97]"
          >
            <AndroidIcon />
            Télécharger sur Google Play
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
