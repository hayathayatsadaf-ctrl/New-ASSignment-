type Props = {
  leftSrc?: string;
  rightSrc?: string;
};

export default function Frame5({
  leftSrc = "/Before botox 1.jpg",
  rightSrc = "/After botox 1.jpg",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f5">
      <div className="ts-polaroidGrid">
        <img className="ts-polaroidImg ts-polaroidImg--m" src={leftSrc} alt="Result 5 before" />
        <img className="ts-polaroidImg ts-polaroidImg--m" src={rightSrc} alt="Result 5 after" />
      </div>
    </figure>
  );
}