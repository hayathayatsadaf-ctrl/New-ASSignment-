import React from "react";

type Props = {
  bgSrc: string;
  doctorSrc: string;
  children: React.ReactNode;
};

export default function Frame({ bgSrc, doctorSrc, children }: Props) {
  return (
    <section className="hero">
      {/* background */}
      <img className="hero__bg" src={bgSrc} alt="" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      {/* content */}
      <div className="hero__wrap">
        <div className="hero__grid">
          {children}

          <div className="hero__media" aria-hidden="true">
            <img className="hero__doctor" src={doctorSrc} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

