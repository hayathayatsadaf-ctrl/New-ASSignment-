type FrameProps = {
  imageSrc?: string;
};

export default function Frame({
  imageSrc = "/image 7.jpg", // public folder
}: FrameProps) {
  return (
    <div className="about-frame">
      <div className="about-frameInner">
        <img src={imageSrc} alt="Clinic award moment" />
      </div>
    </div>
  );
}