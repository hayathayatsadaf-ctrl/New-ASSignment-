type Props = {
  src1?: string;
  src2?: string;
  alt?: string;
};

export default function Frame6({
  src1 = "/Before 1.png",
  src2="/After..eyebrows-Botox and filler 1.png"
 
}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f6">
      <img className="ts-polaroidImg" src={src1}  />
      <img className="ts-polaroidImg" src={src2}  />
    </figure>
  );
}
