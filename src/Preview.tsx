import { useEffect, useState, type FormEvent, type MouseEvent } from "react";

type PreviewProps = {
  open: boolean;
  onClose: () => void;
  bgImage?: string;
};

export default function Preview({
  open,
  onClose,
  bgImage = "/about (1).jpg",
}: PreviewProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted (demo) ✅");
    onClose();
  };

  if (!open) return null;

  const safeBg = bgImage?.startsWith("/") ? bgImage : `/${bgImage}`;

  return (
    <div
      className="previewOverlay is-open"
      onMouseDown={(e) => {
        // ✅ only close if clicked on overlay itself
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="previewPanel is-open"
        style={{ backgroundImage: `url('${safeBg}')` }}
        onMouseDown={(e: MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Consultation preview form"
      >
        <button
          type="button"
          className="previewClose"
          onClick={onClose}
          aria-label="Close preview"
        >
          ✕
        </button>

        <div className="previewShade" />

        <div className="previewContent">
          <div className="previewLeft">
            <div className="previewBig">Glow.</div>
            <div className="previewBig">Grow.</div>
            <div className="previewBig">Transform.</div>
            <div className="previewSub">Book An Appointment Today!</div>
          </div>

          <form className="previewForm" onSubmit={submit}>
            <label className="pLabel">
              Full Name
              <input
                className="pInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
              />
            </label>

            <label className="pLabel">
              Phone Number
              <input
                className="pInput"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                inputMode="tel"
              />
            </label>
 
            <label className="pLabel">
              Email ID
              <input
                className="pInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email ID"
                type="email"
              />
            </label>

            <button className="pBtn" type="submit">
              Book A Call <span className="pBtnIcon">↗</span>
            </button>

            <div className="pHint">ESC press ya bahar click karke close kar sakte ho.</div>
          </form>
        </div>
      </div>
    </div>
  );
}


