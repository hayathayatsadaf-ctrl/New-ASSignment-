type Props = {
  kicker?: string;
  title?: string;
};

export default function Title({
  kicker = "SERVICES",
  title = "Treatments Available",
}: Props) {
  return (
    <div className="tr-head">
      <p className="tr-kicker">{kicker}</p>
      <h2 className="tr-title">{title}</h2>
    </div>
  );
}