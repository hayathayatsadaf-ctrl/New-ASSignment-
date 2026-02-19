type Props = {
  onOpenPreview: () => void;
};

export default function Navbar({ onOpenPreview }: Props) {
  return (
    <header className="navbar navbar--fixed">
      <div className="navbar__container">
        <a className="navbar__brand" href="/">
          <img
            src="/dinaaz_logo.png"
            alt="Dinaaz Hair & Skin logo"
            className="navbar__logo"
          />
          <span className="navbar__title">Dinaaz Hair &amp; Skin</span>
        </a>

        {/* ✅ anchor ko button banaya, click -> preview open */}
        <button
          type="button"
          className="navbar__cta"
          onClick={onOpenPreview}
        >
          Book A Consultation
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M7 17 17 7M9 7h8v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}


