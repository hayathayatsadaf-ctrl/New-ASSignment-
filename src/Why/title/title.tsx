type TitleProps = {
  kicker: string;
  title: [string, string]; // two lines
};

export default function Title({ kicker, title }: TitleProps) {
  return (
    <header className="why-head">
      <p className="why-kicker">{kicker}</p>

      <div className="why-titleBox">
        <h2 className="why-title">
          {title[0]}
          <br />
          {title[1]}
        </h2>
      </div>
    </header>
  );
}