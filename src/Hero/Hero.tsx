import Frame from "./Frame";
import { ArrowUpRightIcon, CheckIcon } from "./Comp";

type Props = {
  bgSrc?: string;
  doctorSrc?: string;
  clinicPhone?: string;

  // ❌ bookHref optional reh sakta hai, but preview ke liye ye best hai
  onOpenPreview: () => void;
};

export default function Hero({
  bgSrc = "hero (4).jpg",
  doctorSrc = "/doctor.png",
  clinicPhone = "+91 00000 00000",
  onOpenPreview,
}: Props) {
  const phoneLink = `tel:${clinicPhone.replace(/\s/g, "")}`;

  return (
    <div className="page">
      <Frame bgSrc={bgSrc} doctorSrc={doctorSrc}>
        <div className="hero__content">
          <h1 className="hero__title">
            Dermatologist-Led
            <br />
            Hair &amp; Skin Treatments
            <br />
            You Can Trust
          </h1>

          <p className="hero__desc">
            Medical-grade diagnosis and personalized treatment for hair loss, skin conditions,
            and aesthetic concerns; never salon-based or package-driven care.
          </p>

          <div className="hero__actions">
            <a className="btn btn--ghost" href={phoneLink}>
              Call The Clinic <ArrowUpRightIcon className="btn__icon" />
            </a>

            {/* ✅ opens preview, no jump */}
            <button
              type="button"
              className="btn btn--primary"
              onClick={onOpenPreview}
            >
              Book A Consultation <ArrowUpRightIcon className="btn__icon" />
            </button>
          </div>
        </div>

        {/* ✅ Bottom slanted running strip (marquee) */}
        <div className="hero__strip" aria-hidden="true">
          <div className="hero__stripMarquee">
            <div className="stripTrack">
              {/* Set 1 */}
              <div className="stripRow">
                <div className="stripItem">
                  <CheckIcon className="stripItem__icon" />
                  <span>10+ Years of Ethical Clinical Practice</span>
                </div>

                <div className="stripItem">
                  <CheckIcon className="stripItem__icon" />
                  <span>Nationally &amp; Internationally Recognized</span>
                </div>

                <div className="stripItem">
                  <CheckIcon className="stripItem__icon" />
                  <span>Award-Winning Patient Care</span>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="stripRow" aria-hidden="true">
                <div className="stripItem">
                  <CheckIcon className="stripItem__icon" />
                  <span>10+ Years of Ethical Clinical Practice</span>
                </div>

                <div className="stripItem">
                  <CheckIcon className="stripItem__icon" />
                  <span>Nationally &amp; Internationally Recognized</span>
                </div>

                <div className="stripItem">
                  <CheckIcon className="stripItem__icon" />
                  <span>Award-Winning Patient Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </div>
  );
}



