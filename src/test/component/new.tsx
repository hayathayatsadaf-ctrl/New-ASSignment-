type Props = {
  onPrev: () => void;
  onNext: () => void;
  disablePrev?: boolean;
  disableNext?: boolean;
};

function ArrowIcon({ dir }: { dir: "left" | "right" }) {
  return (
    <svg className="ts-navIcon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {dir === "left" ? (
        <path
          d="M14 6 L8 12 L14 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M10 6 L16 12 L10 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  );
}

export default function NavArrows({ onPrev, onNext, disablePrev, disableNext }: Props) {
  return (
    <div className="ts-nav" aria-label="Testimonial navigation">
      <button className="ts-navBtn" onClick={onPrev} disabled={disablePrev} type="button">
        <ArrowIcon dir="left" />
      </button>
      <button className="ts-navBtn" onClick={onNext} disabled={disableNext} type="button">
        <ArrowIcon dir="right" />
      </button>
    </div>
  );
}
