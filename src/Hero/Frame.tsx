import React from "react";

type Props = {
  bgSrc: string;
  doctorSrc: string;
  children: React.ReactNode;
};

export default function Frame({ bgSrc, doctorSrc, children }: Props) {
  // ✅ children split:
  // first child = hero content
  // rest = extras (hero__strip etc)
  const parts = React.Children.toArray(children);
  const heroContent = parts[0] ?? null;
  const extras = parts.slice(1);

  // ✅ safe paths (agar "doctor.png" diya ho to bhi kaam kare)
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

          {/* ✅ doctor always visible */}
          <div className="hero__media">
            
          </div>
        </div>

        {/* ✅ strip / other absolute elements grid ke bahar */}
        {extras}
      </div>
    </section>
  );
}

