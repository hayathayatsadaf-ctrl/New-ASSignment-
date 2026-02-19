import Title from "./Title";
import Group9 from "./Group09";
import Frame1 from "./Frame1";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";

export default function Problem() {
  return (
    <section className="problemBlock">
      <div className="problemGrid">
        {/* LEFT TEXT */}
        <div className="problemText">
          <Title />

          <p className="problemPara">
            Most patients come to us after trying salon treatments with no diagnosis.
          </p>

          <ul className="problemList">
            <li>Non-evidence treatments without root cause</li>
            <li>Expensive procedures without understanding the skin</li>
            <li>One-size-fits-all packages</li>
          </ul>

          <p className="problemPara problemPara--small">
            At Dinaaz, we start with <b>medical understanding</b>, not assumptions.
          </p>
        </div>

        {/* RIGHT VISUAL */}
        <div className="problemVisual">
          <Group9 />

          <Frame1 />
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </section>
  );
}
