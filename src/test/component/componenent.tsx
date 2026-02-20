import { useMemo, useState } from "react";
import Circle from "./Circle";
import Paragraph from "./pargrph";
import NavArrows from "./new";

type Testimonial = {
  id: string;
  name: string;
  rating: number;
  date: string;
  avatarSrc: string;
  text: string;
};

type Props = {
  testimonials?: Testimonial[];
  beforeImg?: string;
  afterImg?: string;
};

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Sandeep",
    rating: 4.9,
    date: "26/12/2025",
    avatarSrc: "/Ellipse 13 (1).png",
    text:
      "Comparing to other clinics I don’t know but personally I preferred this clinic so I took consultation and it was so good. Later I took hair transplantation and also I can see good growth.",
  },
  {
    id: "t2",
    name: "Sandeep II",
    rating: 4.9,
    date: "26/12/2025",
    avatarSrc: "/Ellipse 13 (1).png",
    text:
      "Very supportive staff and clear guidance. I felt comfortable throughout the process and the results are improving steadily.",
  },
  {
    id: "t3",
    name: "Sandeep III",
    rating: 4.9,
    date: "26/12/2025",
    avatarSrc: "/Ellipse 13 (1).png",
    text:
      "Great experience overall. Consultation was detailed and the team was responsive to all my questions.",
  },
];

export default function TestimonialBlock({
  testimonials = DEFAULT_TESTIMONIALS,
  beforeImg = "/Rectangle 8825 (1).png",
  afterImg = "/Rectangle 8824 (1).png",

}: Props) {
  const [active, setActive] = useState(0);

  const safeIndex = useMemo(() => {
    if (!testimonials.length) return 0;
    return Math.min(Math.max(active, 0), testimonials.length - 1);
  }, [active, testimonials.length]);

  const current = testimonials[safeIndex];

  const prev = () => setActive((i) => Math.max(0, i - 1));
  const next = () => setActive((i) => Math.min(testimonials.length - 1, i + 1));

  return (
    <div className="ts-top">
      {/* LEFT LIST */}
      <aside className="ts-left" aria-label="Testimonials list">
        <Circle />

        <ul className="ts-reviewList">
          {testimonials.map((t, idx) => {
            const isActive = idx === safeIndex;
            return (
              <li
                key={t.id}
                className={`ts-reviewItem ${isActive ? "ts-reviewActive" : ""}`}
                onClick={() => setActive(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Select testimonial by ${t.name}`}
              >
                <img className="ts-reviewAvatar" src={t.avatarSrc} alt={t.name} />
                <div className="ts-reviewMeta">
                  <div className="ts-reviewNameRow">
                    <p className="ts-reviewName">{t.name}</p>
                  </div>
                  <div className="ts-reviewLine">
                    <span className="ts-stars" aria-label={`${t.rating} stars`}>
                      ★
                    </span>
                    <span className="ts-rating">{t.rating.toFixed(1)}</span>
                    <span className="ts-dot">•</span>
                    <span className="ts-date">{t.date}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* CENTER QUOTE */}
      <div className="ts-center" aria-label="Selected testimonial">
        <div className="ts-quote">
          <span className="ts-quoteMark ts-quoteMark--open">“</span>

          <div className="ts-quoteTextWrap">
            <Paragraph text={current?.text ?? ""} />
          </div>

          <span className="ts-quoteMark ts-quoteMark--close">“</span>

          <NavArrows
            onPrev={prev}
            onNext={next}
            disablePrev={safeIndex === 0}
            disableNext={safeIndex === testimonials.length - 1}
          />
        </div>
      </div>

      {/* RIGHT BEFORE/AFTER */}
      <aside className="ts-right" aria-label="Before and after photo">
        <div className="ts-rightCard">
          <div className="ts-rightGrid">
            <img className="ts-rightImg" src={beforeImg} alt="Before result" />
            <img className="ts-rightImg" src={afterImg} alt="Before result" />
           
          </div>
        </div>
      </aside>
    </div>
  );
}
