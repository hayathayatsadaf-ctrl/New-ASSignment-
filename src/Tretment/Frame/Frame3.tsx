export default function Frame3() {
  // ✅ apne asset path yaha replace kar dena
  const ICON = "/Vector (2).png";

  return (
    <article className="tr-card tr-card--simple">
      <div className="tr-top">
        <img className="tr-ic" src={ICON} alt="" />
        <h3 className="tr-title">
          Aesthetic <br /> Dermatology
        </h3>
      </div>

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