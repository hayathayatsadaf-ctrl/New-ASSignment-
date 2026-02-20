
type Props = {
  src?: string;
  alt?: string;
};

export default function Frame2({
  src = "/image 17 (2).jpg",
  alt = "Result 2",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f2">
      <img className="ts-polaroidImg ts-polaroidImg--tall" src={src} alt={alt} />
    </figure>
  );
}
