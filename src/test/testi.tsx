


import Title1 from "./Title01";
import Title2 from "./Title2";

import TestimonialBlock from "./component/componenent";
import ResultsFrame from "./Frame/Frame";

export default function Testi() {
  return (
    <section className="ts-section" aria-label="Testimonials and Results">
      <div className="ts-container">
        <header className="ts-head">
          <Title1 />
          <Title2 />
        </header>

        <TestimonialBlock />

        <ResultsFrame />
      </div>
    </section>
  );
}
