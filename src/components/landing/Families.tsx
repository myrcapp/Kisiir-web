import { motion } from "framer-motion";
import SplinePlaceholder from "./SplinePlaceholder";

const families = [
  { name: "Ondas", color: "#F4C87A" },
  { name: "Nami", color: "#E8A94E" },
  { name: "Yaba", color: "#E88A30" },
  { name: "Rizo", color: "#E8530E" },
  { name: "Silmus", color: "#D4440A" },
  { name: "Kurlu", color: "#B8530E" },
  { name: "Spiro", color: "#8B4513" },
  { name: "Coilya", color: "#5C3310" },
  { name: "Zarha", color: "#3D1F0A" },
];

const Families = () => (
  <section id="families" className="py-24 lg:py-32 bg-white relative overflow-hidden">
    <SplinePlaceholder
      width="400px"
      height="400px"
      fallbackGradient="radial-gradient(circle, rgba(232,83,14,0.1), rgba(253,235,208,0.2), transparent)"
      animationType="pulse"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 z-0"
    />

    <div className="container relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-14"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-kisiir-orange mb-4">
          Vos familles capillaires
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-kisiir-dark mb-4 tracking-tight max-w-3xl mx-auto">
          9 signatures. Une seule promesse : des réponses qui{" "}
          <span className="font-playfair text-kisiir-orange">vous ressemblent.</span>
        </h2>
        <p className="text-kisiir-text-mid max-w-2xl mx-auto text-lg">
          Kisiir ne s'arrête pas à « cheveux bouclés ».<br />
          Nous identifions votre identité capillaire et vous associons à l'une des 9 Signatures Kisiir™.<br />
          Vous accédez à des avis et recommandations triés en priorité selon votre signature capillaire.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {families.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="bg-kisiir-cream rounded-[20px] p-7 text-center border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(15,9,6,0.08)] cursor-default group"
            style={{
              borderColor: `${f.color}33`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${f.color}99`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${f.color}33`;
            }}
          >
            <div
              className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: f.color }}
            >
              <span className="text-white font-bold text-[1.2rem]">{f.name[0]}</span>
            </div>
            <h3 className="text-[1.25rem] font-bold text-kisiir-dark">{f.name}</h3>
            <p className="text-sm text-kisiir-text-light mt-1">Signature Kisiir™</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-kisiir-text-mid mb-6 max-w-lg mx-auto">
          Quelle est votre signature capillaire ? 8 questions suffisent pour déterminer votre identité capillaire et vous associer à une Signature Kisiir™. Toute l'app s'adapte ensuite à votre réalité capillaire.
        </p>
        <a
          href="#telecharger"
          className="inline-flex items-center gap-1.5 border-2 border-kisiir-orange/20 text-kisiir-dark font-semibold px-6 py-3 rounded-full hover:border-kisiir-orange hover:text-kisiir-orange transition-all duration-200 active:scale-[0.97]"
        >
          Faire le quiz : c'est gratuit !
        </a>
      </motion.div>
    </div>
  </section>
);

export default Families;
