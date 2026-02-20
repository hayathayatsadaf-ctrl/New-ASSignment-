type Step = {
  no: string;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    no: "01",
    title: "Medical Consultation",
    desc: "A detailed evaluation by a dermatologist.",
  },
  {
    no: "02",
    title: "Accurate Diagnosis",
    desc: "Understanding the root cause of your concern.",
  },
  {
    no: "03",
    title: "Personalized Treatment Plan",
    desc: "Only treatments that are medically necessary.",
  },
  {
    no: "04",
    title: "Ongoing Care & Follow-Ups",
    desc: "Focused on long-term skin and hair health.",
  },
];

export default function Content() {
  return (
    <div className="why-steps">
      {steps.map((s) => (
        <div className="why-step" key={s.no}>
          <div className="why-badge" aria-hidden="true">
            {s.no}
          </div>

          <div className="why-stepText">
            <h3 className="why-stepTitle">{s.title}</h3>
            <p className="why-stepDesc">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}