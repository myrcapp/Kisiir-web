import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Créez votre Signature",
    desc: "8 questions rapides sur vos cheveux. On détermine votre Signature Kisiir™ et on vous place dans votre famille parmi les 9.",
  },
  {
    num: "2",
    title: "Scannez & comparez",
    desc: "En magasin ou chez vous, scannez un produit. Kisiir affiche la compatibilité avec VOS cheveux — pas la moyenne.",
  },
  {
    num: "3",
    title: "Construisez votre routine",
    desc: "Le Builder analyse les combos de votre famille pour vous proposer une routine optimisée et personnalisée.",
  },
];

const HowItWorks = () => (
  <section id="how" className="py-24 lg:py-32 bg-kisiir-cream">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kisiir-dark text-center mb-16 tracking-tight"
      >
        3 étapes pour ne plus acheter{" "}
        <span className="font-playfair text-kisiir-orange">à l'aveugle</span>
      </motion.h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
        {/* Connector lines - desktop only */}
        <div className="hidden md:block absolute top-[38px] left-[20%] right-[20%] h-[3px] bg-gradient-to-r from-kisiir-orange/15 via-kisiir-teal/15 to-kisiir-orange/15 z-0" />

        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="w-[76px] h-[76px] rounded-full bg-white border-[3px] border-kisiir-orange flex items-center justify-center mb-6 shadow-[0_4px_20px_rgba(232,83,14,0.08)]">
              <span className="text-[1.6rem] font-bold text-kisiir-orange">{step.num}</span>
            </div>
            <h3 className="text-xl font-bold text-kisiir-dark mb-3">{step.title}</h3>
            <p className="text-kisiir-text-mid leading-relaxed max-w-xs">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
