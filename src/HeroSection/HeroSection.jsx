import HeroHeading from "./HeroHeading";
import HeroParagraph from "./HeroParagraph";

function HeroSection() {
  return (
    <div className="hero-section py-40 flex flex-col items-center ">
      <HeroHeading />
      <HeroParagraph />
    </div>
  );
}

export default HeroSection;
