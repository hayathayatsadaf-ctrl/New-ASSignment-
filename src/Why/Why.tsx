import Title from "./title/title";
import Content from "./component/componenent";
import Group from "./Group09/Group09";
import Button from "./button/buttton";


type WhyProps = {
  imageSrc?: string;
};

export default function Why({ imageSrc = "/img.png" }: WhyProps) {
  return (
    <section className="why-section" id="process">
      {/* background circles */}
      <Group />

      <div className="why-container">
        <Title kicker="OUR PROCESS" title={["What To Expect At", "Dinaaz"]} />

        <div className="why-grid">
          <div className="why-left">
            <div className="why-imageWrap">
              <img
                src={imageSrc}
                alt="Dermatology process consultation"
                className="why-image"
                loading="lazy"
              />
            </div>
          </div>

          <div className="why-right">
            <Content />
          </div>
        </div>

        <div className="why-ctaRow">
          <Button text="Book A Consultation" />
        </div>
      </div>
    </section>
  );
}