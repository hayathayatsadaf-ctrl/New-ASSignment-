import Title from "./title";
import Frame1 from "./Frame1";
import Frame2 from "./Frame";

const cards = [
  {
    img: "/Rectangle 8824.png",
    title: "Dermatologist Diagnosis First",
    desc: "Every concern is medically evaluated before treatment begins.",
  },
  {
    img: "/Rectangle 8825.png",
    title: "Customized Treatment Plans",
    desc: "No fixed packages. Your plan is built for your skin & hair.",
  },
  {
    img: "/Rectangle 8823.png",
    title: "Long-Term Skin & Hair Health",
    desc: "We focus on sustainable results, not short-term cosmetic fixes.",
  },
  {
    img: "/Rectangle 8826.png",
    title: "Ethical Medical Advice",
    desc: "You’re guided with honesty — no upsell pressure or sales talk.",
  },
];

export default function Difference() {
  return (
    <section className="diffBlock">
      <div className="diffTop">
        <Frame1 />
        <Title />
        <Frame2 />
      </div>

      <div className="diffGrid">
        {cards.map((c) => (
          <article key={c.title} className="diffCard">
            <img className="diffCard__img" src={c.img} alt="" aria-hidden="true" />
            <div className="diffCard__body">
              <h3 className="diffCard__title">{c.title}</h3>
              <p className="diffCard__desc">{c.desc}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="diffCtaRow">
        <a className="diffCta" href="#book">
          Book a Consultation <span className="diffCta__icon">↗</span>
        </a>
      </div>
    </section>
  );
}
