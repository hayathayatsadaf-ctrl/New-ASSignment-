export default function Frame2() {
  // ✅ apne asset path yaha replace kar dena
  const ICON = "/Vector (4).png";

  const items = [
    "Acne & acne scar treatment",
    "Pigmentation & melasma",
    "Medical skin conditions (eczema, psoriasis)",
    "Anti-aging & skin rejuvenation",
  ];

  return (
    <article className="tr-card tr-card--center">
      {/* top small panel */}
      <div className="tr-miniCard">
        <img className="tr-ic tr-ic--small" src={ICON} alt="" />
        <div className="tr-miniTitle">
          Skin <br /> Treatments
        </div>
      </div>

      {/* middle panel */}
      <div className="tr-middleArea">
        <ul className="tr-list">
          {items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>

      {/* bottom strip + arrow */}
      <div className="tr-bottom">
        <div className="tr-strip" />
        <button type="button" className="tr-go" aria-label="Open">
          <span className="tr-goIcon">↗</span>
        </button>
      </div>

      <span className="tr-curve tr-curve--a" />
      <span className="tr-curve tr-curve--b" />
    </article>
  );
}