import HeroSection from "./HeroSection";
import SecondSection from "../WebsiteDesign/SecondSection";
import FirstSection from "../WebsiteDesign/FirstSection";
import {
  websiteExampleFirstSection,
  websiteExampleSectionSection,
} from "../../Pagesdata/websiteexamples";

const EmailDesign = () => {
  return (
    <div>
      <HeroSection />
      <FirstSection cardData={websiteExampleFirstSection} />
      <SecondSection cardData={websiteExampleSectionSection} />
    </div>
  );
};

export default EmailDesign;
