import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import SplinePlaceholder from "./SplinePlaceholder";

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
  { target: 6000, prefix: "+", label: "Avis collectés" },
  { target: 6000, prefix: "+", label: "Produits référencés" },
  { target: 9, prefix: "", label: "Familles capillaires" },
];

const valueCards = [
  { emoji: "📊", title: "Data par famille capillaire", desc: "Nous collectons les premiers retours produits segmentés par famille capillaire, porosité et épaisseur — un niveau de granularité inédit dans l'industrie." },
  { emoji: "🎯", title: "Retours qualifiés & authentiques", desc: "Chaque avis lié à un profil vérifié. Pas de bots — des retours réels de vraies utilisatrices." },
  { emoji: "💡", title: "Insights développement produit", desc: "Comprenez pourquoi un produit performe sur une famille et pas une autre. Identifiez les opportunités dans votre gamme grâce à des données terrain." },
];

const roles = [
  "Fondateur/CEO",
  "Marketing/Communication",
  "R&D/Développement produit",
  "Distribution/Retail",
  "Autre",
];

const StatCard = ({ stat, index, inView }: { stat: typeof stats[0]; index: number; inView: boolean }) => {
  const count = useCountUp(stat.target, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/[0.04] rounded-[20px] p-6 text-center"
    >
      <p className="text-3xl sm:text-4xl font-extrabold text-kisiir-orange">
        {stat.prefix}{stat.target >= 1000 ? count.toLocaleString("fr-FR") : count}
      </p>
      <p className="text-white/40 text-sm mt-1">{stat.label}</p>
    </motion.div>
  );
};

const B2B = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <section id="b2b" className="py-24 lg:py-32 bg-kisiir-dark relative overflow-hidden">
      <SplinePlaceholder
        width="350px"
        height="350px"
        fallbackGradient="radial-gradient(circle, rgba(232,83,14,0.2), transparent)"
        animationType="rotate"
        className="absolute -left-[100px] top-1/3 opacity-40 z-0"
      />

      <div className="container relative z-10">
        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-16">
          {stats.map((s, i) => (
            <StatCard key={i} stat={s} index={i} inView={statsInView} />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-kisiir-orange-light mb-4">Pour les marques</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Les premiers retours produits segmentés par profil capillaire. Rejoignez le programme{" "}
              <span className="font-playfair text-kisiir-orange">early access.</span>
            </h2>
            <p className="text-white/50 text-lg mb-8 leading-relaxed">
              Kisiir collecte des avis produits segmentés par profil capillaire — un niveau de granularité inédit.
            </p>

            <div className="space-y-4">
              {valueCards.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white/[0.05] border border-white/[0.08] rounded-[20px] p-5 hover:border-kisiir-orange/50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-lg">
                      {c.emoji}
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{c.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white/[0.05] border border-white/[0.08] rounded-[28px] p-8"
          >
            <h3 className="text-xl font-bold text-white mb-2">Contactez-nous</h3>
            <p className="text-white/50 text-sm mb-6 leading-relaxed">
              Vous représentez une marque capillaire ? Nous construisons la première base de retours produits segmentés par profil cheveu. Échangeons sur comment Kisiir peut enrichir votre connaissance client.
            </p>

            <form className="space-y-4" action="https://formsubmit.co/contact@kisiir.com" method="POST">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  required
                  className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-kisiir-orange focus:outline-none transition-colors text-sm"
                />
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  required
                  className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-kisiir-orange focus:outline-none transition-colors text-sm"
                />
              </div>
              <input type="hidden" name="_subject" value="Nouveau contact B2B — Kisiir" />
              <input type="hidden" name="_next" value="https://kisiir.com" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="email"
                name="email"
                placeholder="Email professionnel"
                required
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-kisiir-orange focus:outline-none transition-colors text-sm"
              />
              <input
                type="text"
                name="entreprise"
                placeholder="Marque / Entreprise"
                required
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-kisiir-orange focus:outline-none transition-colors text-sm"
              />
              <select
                name="role"
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white/50 focus:border-kisiir-orange focus:outline-none transition-colors text-sm appearance-none"
                defaultValue=""
              >
                <option value="" disabled>Vous êtes…</option>
                {roles.map((r) => (
                  <option key={r} value={r} className="bg-kisiir-dark text-white">{r}</option>
                ))}
              </select>
              <textarea
                name="message"
                placeholder="Message (optionnel)"
                rows={3}
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-kisiir-orange focus:outline-none transition-colors text-sm resize-none"
              />
              <button
                type="submit"
                className="w-full bg-kisiir-orange text-white font-bold py-3.5 rounded-xl hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(232,83,14,0.35)] transition-all duration-300 active:scale-[0.97]"
              >
                Envoyer ma demande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default B2B;
