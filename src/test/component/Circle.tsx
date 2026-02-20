
export default function Circle() {
  return (
    <svg
      className="ts-circles"
      viewBox="0 0 220 220"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M20 40 C70 10, 130 10, 180 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 6"
      />
      <circle cx="40" cy="70" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="90" cy="115" r="28" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="150" cy="155" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
