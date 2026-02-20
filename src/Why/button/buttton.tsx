type ButtonProps = {
  text: string;
  onClick?: () => void;
};

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 17L17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button className="why-btn" onClick={onClick} type="button">
      {text}
      <ArrowUpRight className="why-btnIcon" />
    </button>
  );
}