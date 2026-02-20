type Props = {
  leftSrc?: string;
  rightSrc?: string;
};

export default function Frame2({
  leftSrc = "/WhatsApp Image 2026-02-11 at 10.49.12 AM (2) 1.jpg",
  rightSrc = "/image 17 (1).jpg",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f2">
      <div className="ts-polaroidGrid">
        <img className="ts-polaroidImg ts-polaroidImg--tall" src={leftSrc} alt="Result 2 before" />
        <img className="ts-polaroidImg ts-polaroidImg--tall" src={rightSrc} alt="Result 2 after" />
      </div>
    </figure>
  );
}