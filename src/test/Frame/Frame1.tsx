type Props = {
  leftSrc?: string;
  rightSrc?: string;
};

export default function Frame1({
  leftSrc = "/Rectangle 8824 (2).png",
  rightSrc = "/Rectangle 8825 (1).png",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f1">
      <div className="ts-polaroidGrid">
        <img className="ts-polaroidImg ts-polaroidImg--p" src={leftSrc} alt="Result 1 before" />
        <img className="ts-polaroidImg ts-polaroidImg--p" src={rightSrc} alt="Result 1 after" />
      </div>
    </figure>
  );
}