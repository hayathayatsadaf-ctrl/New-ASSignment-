type Props = {
  topSrc?: string;
  bottomSrc?: string;
};

export default function Frame4({
  topSrc = "/image 15.png",

  bottomSrc = "/image 16.png",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f4">
      <div className="ts-polaroidStack">
        <img className="ts-polaroidImg ts-polaroidImg--w" src={topSrc} alt="Result 4 photo 1" />
        <img className="ts-polaroidImg ts-polaroidImg--w" src={bottomSrc} alt="Result 4 photo 2" />
      </div>
    </figure>
  );
}
