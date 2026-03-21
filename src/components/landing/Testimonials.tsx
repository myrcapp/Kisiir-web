import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function useCountUp(target: number, inView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return count;
}

const stats = [
  { emoji: "📱", target: 175, suffix: "+", label: "testeurs explorent Kisiir en beta", sub: "Rejoignez-les et partagez votre expérience" },
  { emoji: "⭐", target: 1200, suffix: "+", label: "avis produits collectés", sub: "Chaque avis enrichit les scores de votre famille" },
  { emoji: "🧴", target: 1200, suffix: "+", label: "produits référencés", sub: "Un catalogue qui grandit chaque jour grâce à la communauté" },
];

const StatCard = ({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) => {
  const count = useCountUp(stat.target, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white rounded-[20px] p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(15,9,6,0.06)]"
    >
      <div className="w-12 h-12 rounded-xl bg-kisiir-orange/[0.12] flex items-center justify-center text-xl mx-auto mb-5">
        {stat.emoji}
      </div>
      <p className="text-4xl sm:text-5xl font-extrabold text-kisiir-orange mb-2">
        {stat.target >= 1000 ? count.toLocaleString("fr-FR") : count}{stat.suffix}
      </p>
      <p className="text-kisiir-dark font-semibold mb-1">{stat.label}</p>
      <p className="text-sm text-kisiir-text-light">{stat.sub}</p>
    </motion.div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 lg:py-32 bg-kisiir-cream">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kisiir-orange mb-4">La communauté</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kisiir-dark tracking-tight">
            Kisiir en{" "}
            <span className="font-playfair text-kisiir-orange">chiffres</span>
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="#beta"
            className="inline-flex items-center gap-1.5 border-2 border-kisiir-orange/20 text-kisiir-dark font-semibold px-6 py-3 rounded-full hover:border-kisiir-orange hover:text-kisiir-orange transition-all duration-200 active:scale-[0.97]"
          >
            Rejoindre la beta →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
