import { motion } from "framer-motion";

const testimonials = [
  {
    stars: 5,
    text: "Enfin une app qui comprend que mes cheveux 4C n'ont pas les mêmes besoins que des 2A. Le scanner m'a déjà évité 3 mauvais achats.",
    name: "Jade",
    family: "Coilya",
  },
  {
    stars: 5,
    text: "Le Routine Builder m'a proposé une combinaison que j'aurais jamais essayée. Mes boucles n'ont jamais été aussi définies.",
    name: "Sarah",
    family: "Rizo",
  },
  {
    stars: 4,
    text: "Ondulée, on me dit toujours que mes cheveux sont « faciles ». Kisiir est la première app qui prend mon type au sérieux.",
    name: "Léa",
    family: "Ondas",
  },
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill={filled ? "#E8530E" : "none"} stroke="#E8530E" strokeWidth="1.5">
    <path d="M8 1.5l1.85 3.75 4.15.6-3 2.93.71 4.12L8 10.88 4.29 12.9l.71-4.12-3-2.93 4.15-.6L8 1.5z"/>
  </svg>
);

const Testimonials = () => (
  <section className="py-24 lg:py-32 bg-kisiir-cream">
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kisiir-dark text-center mb-14 tracking-tight"
      >
        La communauté{" "}
        <span className="font-playfair text-kisiir-orange">a parlé</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-[20px] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(15,9,6,0.06)]"
          >
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map((s) => <Star key={s} filled={s <= t.stars} />)}
            </div>
            <p className="text-kisiir-dark leading-relaxed mb-6">« {t.text} »</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-kisiir-cream-deep flex items-center justify-center">
                <span className="text-sm font-bold text-kisiir-orange">{t.name[0]}</span>
              </div>
              <div>
                <p className="font-bold text-sm text-kisiir-dark">{t.name}</p>
                <p className="text-xs text-kisiir-text-light">{t.family}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mt-10"
      >
        <p className="text-kisiir-text-mid mb-1">Suivez-nous sur TikTok</p>
        <a href="https://tiktok.com/@kisiir.app" target="_blank" rel="noopener noreferrer" className="text-kisiir-orange font-bold hover:underline">
          @kisiir.app →
        </a>
      </motion.div>
    </div>
  </section>
);

export default Testimonials;
