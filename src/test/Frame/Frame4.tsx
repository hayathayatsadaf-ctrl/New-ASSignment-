type Props = {
  leftSrc?: string;
  rightSrc?: string;
  leftAlt?: string;
  rightAlt?: string;
};

export default function Frame4({
  leftSrc = "/image 17.jpg",
  rightSrc = "/image 16.jpg",
  leftAlt = "Before result 4",
  rightAlt = "After result 4",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f4">
      <div className="ts-polaroidGrid">
        <img className="ts-polaroidImg" src={leftSrc} alt={leftAlt} />
        <img className="ts-polaroidImg" src={rightSrc} alt={rightAlt} />
      </div>
    </figure>
  );
}
