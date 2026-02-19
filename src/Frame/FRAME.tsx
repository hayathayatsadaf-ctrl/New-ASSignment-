import Problem from "./Problem/Problem";
import Difference from "./Difference/Diffrence";

export default function Frame() {
  return (
    <section className="frameSection" aria-label="Why us section">
      <div className="frameContainer">
        <Problem />
        <Difference />
      </div>
    </section>
  );
}
