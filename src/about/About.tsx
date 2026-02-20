import Title from "./Frame/Frame";
import Frame from "./Frame/title";


type AboutProps = {
  bgImage?: string;
};

export default function About({
  bgImage = "/about%20(1).jpg", // green background image (public folder)
}: AboutProps) {
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="about-container">
        <div className="about-grid">
        <Frame />
          <Title />
         
        </div>
      </div>
    </section>
  );
}