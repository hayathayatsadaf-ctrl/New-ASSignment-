type Props = {
  leftSrc?: string;
  rightSrc?: string;
};

export default function Frame6({
  leftSrc = "/Before 1.png",
  rightSrc = "/After..eyebrows-Botox and filler 1.png",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f6">
      <div className="ts-polaroidGrid">
        <img className="ts-polaroidImg ts-polaroidImg--m" src={leftSrc} alt="Result 6 before" />
        <img className="ts-polaroidImg ts-polaroidImg--m" src={rightSrc} alt="Result 6 after" />
      </div>
    </figure>
  );
}