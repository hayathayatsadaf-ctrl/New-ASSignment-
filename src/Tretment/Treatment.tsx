
import Title from "./title";
import Frame1 from "./Frame/Frame12";
import Frame2 from "./Frame/Frame2";
import Frame3 from "./Frame/Frame3";

export default function Treatment() {
  return (
    <section className="tr-section">
      <div className="tr-container">
        <Title />
        <div className="tr-grid">
          < Frame1 />
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </section>
  );
}