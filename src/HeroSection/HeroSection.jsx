import HeroHeading from "./HeroHeading";
import HeroParagraph from "./HeroParagraph";

function HeroSection() {
  return (
    <div className="hero-section py-28 md:py-40 flex flex-col items-center justify-center ">
      <HeroHeading />
      <HeroParagraph />
    </div>
  );
}

export default HeroSection;
