import { ArrowUpRightIcon } from "./Hero/Comp";

type Props = {
  doctorImage?: string; // ex: "/doctor-2.png"
  ctaHref?: string; // ex: "#book"
};

export default function Doctar({ doctorImage = "/doc-Photoroom 1.png", ctaHref = "#book" }: Props) {
  return (
    <section className="doctor after-hero">
      <div className="doctor__container">
        <div className="doctor__kicker">THE DOCTOR</div>

        <h2 className="doctor__title">Treatment By An Award-Winning Dermatologist</h2>

        <div className="doctor__grid">
          {/* LEFT TEXT */}
          <div className="doctor__left">
            <p>
              At Dinaaz Hair &amp; Skin Clinic, every patient is treated under the leadership of
              Dr. Nazia Iqbal, a highly experienced Dermatologist, Trichologist, and Cosmetologist
              with over 10 years of doctor-led clinical practice.
            </p>

            <p>
              Dr. Nazia Iqbal is nationally and internationally recognized for excellence in
              dermatology and aesthetic medicine, with proven expertise in:
            </p>

            <ul className="doctor__list">
              <li>Medical skin treatments</li>
              <li>Hair loss diagnosis and restoration</li>
              <li>Ethical aesthetic dermatology</li>
            </ul>
          </div>

          {/* CENTER IMAGE */}
          <div className="doctor__photoWrap" aria-hidden="true">
            <img className="doctor__photo" src={doctorImage} alt="" />
          </div>

          {/* RIGHT CARD */}
          <div className="doctor__card">
            <p className="doctor__quote">
              <span className="doctor__quoteLight">Patients</span>{" "}
              <span className="doctor__quoteBold">trust Dinaaz</span>{" "}
              <span className="doctor__quoteLight">because</span>{" "}
              <span className="doctor__quoteBold">medical</span>{" "}
              <span className="doctor__quoteBold">decisions</span>{" "}
              <span className="doctor__quoteBold">are always</span>{" "}
              <span className="doctor__quoteBold">made</span>{" "}
              <span className="doctor__quoteBold">by a qualified dermatologist</span>,
              <br />
              <span className="doctor__quoteLight">
                not consultants or sales staff.
              </span>
            </p>

            <a className="doctor__cta" href={ctaHref}>
              Book a Consultation <ArrowUpRightIcon className="doctor__ctaIcon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

