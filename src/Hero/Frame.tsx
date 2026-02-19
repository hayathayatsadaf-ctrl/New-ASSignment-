import React from "react";

type Props = {
  bgSrc: string;
  doctorSrc: string;
  children: React.ReactNode;
};

export default function Frame({ bgSrc, doctorSrc, children }: Props) {
  // children split
  const parts = React.Children.toArray(children);
  const heroContent = parts[0] ?? null;
  const extras = parts.slice(1);

  // safe paths
  const bg = bgSrc.startsWith("/") ? bgSrc : `/${bgSrc}`;
  const doc = doctorSrc.startsWith("/") ? doctorSrc : `/${doctorSrc}`;

  return (
    <section className="hero">
      {/* background */}
      <img className="hero__bg" src={bg} alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      {/* content */}
      <div className="hero__wrap">
        <div className="hero__grid">
          {heroContent}

          {/* ✅ FIXED: 'doc' ko yahan use kar liya image tag mein */}
          <div className="hero__media">
             <img src={doc} alt="Doctor" className="hero__doctor-img" />
          </div>
        </div>

        {/* strip / other absolute elements */}
        {extras}
      </div>
    </section>
  );
}


