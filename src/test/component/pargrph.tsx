type Props = {
  text: string;
};

export default function Paragraph({ text }: Props) {
  return <p className="ts-quoteText">{text}</p>;
}
