import HeroSection from "./HeroSection";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import {
  websiteFirstSection,
  websiteSecondSection,
} from "../../Pagesdata/websitedesign";

const Webdesign = () => {
  return (
    <div>
      <HeroSection />
      <FirstSection cardData={websiteFirstSection} />
      <SecondSection cardData={websiteSecondSection} />
    </div>
  );
};

export default Webdesign;
