
type Props = {
  leftSrc?: string;
  rightSrc?: string;
  leftAlt?: string;
  rightAlt?: string;
};

export default function Frame1({
  leftSrc = "/Rectangle 8825 (1).png",
  rightSrc = "/Rectangle 8824 (2).png",
  leftAlt = "Before result 1",
  rightAlt = "After result 1",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f1">
      <div className="ts-polaroidGrid">
        <img className="ts-polaroidImg" src={leftSrc} alt={leftAlt} />
        <img className="ts-polaroidImg" src={rightSrc} alt={rightAlt} />
      </div>
    </figure>
  );
}
