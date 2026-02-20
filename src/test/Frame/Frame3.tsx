type Props = {
  leftSrc?: string;
  rightSrc?: string;
};

export default function Frame3({
  leftSrc = "/image 17.jpg",
  rightSrc = "/image 16.jpg",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f3">
      <div className="ts-polaroidGrid ts-polaroidGrid--tight">
        <img className="ts-polaroidImg ts-polaroidImg--s" src={leftSrc} alt="Result 3 photo 1" />
        <img className="ts-polaroidImg ts-polaroidImg--s" src={rightSrc} alt="Result 3 photo 2" />
      </div>
    </figure>
  );
}
