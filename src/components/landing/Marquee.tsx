const items = [
  "Scanner code-barres",
  "Score de compatibilité",
  "Signature Kisiir™",
  "Routine Builder",
  "Combos intelligents",
  "Avis communautaires",
  "Salle de bain virtuelle",
  "Système Kombs",
];

const Marquee = () => {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center gap-6 shrink-0">
      <span className="uppercase tracking-[0.15em] font-semibold text-kisiir-text-light text-sm whitespace-nowrap">
        {item}
      </span>
      <span className="w-[5px] h-[5px] rounded-full bg-kisiir-orange shrink-0" />
    </span>
  ));

  return (
    <div className="bg-white border-y border-kisiir-orange/[0.06] py-5 overflow-hidden">
      <div className="animate-marquee flex gap-6 w-max">
        {content}
        {content}
      </div>
    </div>
  );
};

export default Marquee;
