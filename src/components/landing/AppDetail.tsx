import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import screenBuilder from "@/assets/screen-builder.png";
import screenProfile from "@/assets/screen-profile.png";
import screenCompat from "@/assets/screen-compatibility.png";

const features = [
  { title: "Score de compatibilité", desc: "évalué selon votre signature capillaire" },
  { title: "Niveau de confiance", desc: "plus il y a d'avis, plus le score est fiable" },
  { title: "Salle de bain virtuelle", desc: "tous vos produits, au même endroit" },
  { title: "Système Kombs", desc: "contribuez et gagnez en reconnaissance" },
  { title: "1200+ produits", desc: "une base fiable, enrichie en continu" },
];

const compatFeatures = [
  { title: "Score personnalisé", desc: "chaque produit est évalué selon votre signature capillaire" },
  { title: "Questions & réponses", desc: "posez vos questions à des personnes ayant déjà utilisé le produit" },
  { title: "Avis filtrés", desc: "consultez en priorité des retours de profils qui vous ressemblent" },
];

const CheckIcon = () => (
  <div className="w-[22px] h-[22px] rounded-full bg-kisiir-green-soft flex items-center justify-center shrink-0 mt-0.5">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6L5 8.5L9.5 4" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

const AppDetail = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const phone1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const phone2Y = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const phone3Y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
  <section id="app" className="py-24 lg:py-32 bg-white" ref={sectionRef}>
    <div className="container space-y-24 lg:space-y-32">
      {/* Row 1 — Builder + features (phones left, text right) */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          <motion.img
            src={screenBuilder}
            alt="Kisiir Builder"
            style={{ y: phone1Y }}
            className="w-[220px] sm:w-[260px] rounded-[28px] shadow-[0_30px_80px_rgba(15,9,6,0.16)] -rotate-3 relative z-10"
          />
          <motion.img
            src={screenProfile}
            alt="Kisiir Profil"
            style={{ y: phone2Y }}
            className="w-[200px] sm:w-[240px] rounded-[28px] shadow-[0_30px_80px_rgba(15,9,6,0.14)] rotate-3 absolute right-[10%] top-10 z-[5]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kisiir-orange mb-4">L'app en détail</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-kisiir-dark mb-4 tracking-tight">
            Conçue par et pour la communauté{" "}
            <span className="font-playfair text-kisiir-orange">curly</span>
          </h2>
          <p className="text-kisiir-text-mid text-lg mb-3 leading-relaxed">
            Scores basés sur plus de 1 600 avis réels — collectés auprès de notre communauté de testeurs.
          </p>
          <p className="text-kisiir-text-mid text-lg mb-8 leading-relaxed">
            Chaque score, chaque recommandation vient de personnes qui partagent votre famille capillaire. Zéro pub, zéro algorithme marketing.
          </p>
          <ul className="space-y-4">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3.5"
              >
                <CheckIcon />
                <div>
                  <span className="font-bold text-kisiir-dark">{f.title}</span>
                  <span className="text-kisiir-text-mid"> : {f.desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Row 2 — Compatibility (text left, phone right) */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="order-2 lg:order-1"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-kisiir-teal mb-4">Compatibilité</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-kisiir-dark mb-4 tracking-tight">
            Un score qui{" "}
            <span className="font-playfair text-kisiir-orange">vous</span>{" "}
            ressemble
          </h2>
          <p className="text-kisiir-text-mid text-lg mb-8 leading-relaxed">
            Scannez n'importe quel produit et obtenez un pourcentage de compatibilité calculé à partir d'avis de profils ayant votre signature capillaire, pas une moyenne générale.
          </p>
          <ul className="space-y-4">
            {compatFeatures.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-3.5"
              >
                <CheckIcon />
                <div>
                  <span className="font-bold text-kisiir-dark">{f.title}</span>
                  <span className="text-kisiir-text-mid"> — {f.desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center order-1 lg:order-2"
        >
          <motion.img
            src={screenCompat}
            alt="Kisiir Compatibilité"
            style={{ y: phone3Y }}
            className="w-[240px] sm:w-[280px] rounded-[28px] shadow-[0_30px_80px_rgba(15,9,6,0.18)] rotate-2 relative z-10"
          />
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default AppDetail;
