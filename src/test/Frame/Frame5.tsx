type Props = {
  leftSrc1?: string;
  rightSrc2?: string;

};

export default function Frame5({
   leftSrc1 = "/image 15.png",
  rightSrc2 = "/image 16.png",
 

}: Props) {
  return (
    <figure className="ts-polaroid ts-polaroid--f5">
      <img className="ts-polaroidImg" src={ leftSrc1} />
      <img className="ts-polaroidImg" src={ rightSrc2} />
    </figure>
  );
}
