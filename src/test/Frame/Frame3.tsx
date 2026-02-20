type Props = {
  src?: string;
  alt?: string;
};

export default function Frame3({
  src = "/WhatsApp Image 2026-02-11 at 10.49.12 AM (2) 1.jpg",
  alt = "Result 3",
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f3">
      <img className="ts-polaroidImg" src={src} alt={alt} />
    </figure>
  );
}
