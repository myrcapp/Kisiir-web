import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const cards = [
  {
    emoji: "📷",
    title: "Scanner intelligent",
    desc: "Scannez le code-barres de n'importe quel produit en magasin. En une seconde, obtenez un score de compatibilité personnalisé basé sur les avis correspondant à votre signature capillaire.",
    span: "lg:col-span-7",
    bg: "bg-kisiir-cream",
    text: "text-kisiir-dark",
    emojiRingBg: "bg-kisiir-orange/[0.12]",
  },
  {
    emoji: "🧪",
    title: "Routine Builder",
    desc: "Notre moteur analyse plus de 1 600 avis et des centaines de combinaisons pour construire votre routine idéale, étape par étape, adaptée à votre signature capillaire.",
    span: "lg:col-span-5",
    bg: "bg-kisiir-dark",
    text: "text-white",
    emojiRingBg: "bg-white/10",
  },
  {
    emoji: "✨",
    title: "Signature Kisiir™",
    desc: "Un groupe capillaire défini à partir de vos caractéristiques clés. Toute l'application s'adapte à votre signature. Il en existe 9, à vous de découvrir la vôtre.",
    span: "lg:col-span-5",
    bg: "bg-kisiir-cream",
    text: "text-kisiir-dark",
    emojiRingBg: "bg-kisiir-orange/[0.12]",
  },
  {
    emoji: "💬",
    title: "Combos & Avis",
    desc: "Quels produits fonctionnent vraiment ensemble ? Découvrez les combos utilisées par des personnes ayant votre signature capillaire !",
    span: "lg:col-span-7",
    bg: "bg-kisiir-orange",
    text: "text-white",
    emojiRingBg: "bg-white/20",
  },
];

const FeatureCard = ({ card, index }: { card: typeof cards[0]; index: number }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${card.span} ${card.bg} ${card.text} rounded-[28px] p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(15,9,6,0.1)] cursor-default`}
    >
      <div
        className={`w-12 h-12 rounded-xl ${card.emojiRingBg} flex items-center justify-center text-xl mb-5 transition-transform duration-300`}
        style={hovered ? { animation: "emoji-bounce 0.3s ease" } : {}}
      >
        {card.emoji}
      </div>
      <h3 className="text-xl font-bold mb-3">{card.title}</h3>
      <p className={`leading-relaxed ${card.text === "text-white" ? "text-white/70" : "text-kisiir-text-mid"}`}>
        {card.desc}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="features" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kisiir-orange mb-4">Fonctionnalités</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kisiir-dark mb-4 tracking-tight">
            Tout ce dont vos cheveux ont besoin.{" "}
            <span className="font-playfair text-kisiir-orange">Une seule app.</span>
          </h2>
          <p className="text-kisiir-text-mid max-w-2xl mx-auto text-lg">
            Kisiir combine la data et la science pour vous guider vers les bons produits, sans influence marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {cards.map((card, i) => (
            <FeatureCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
