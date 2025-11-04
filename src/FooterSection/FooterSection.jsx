import IconeQuestion from "./IconeQuestion";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

function FooterSection() {
  const footerData = [
    {
      heading: "Company",
      links: [
        "Help Center",
        "About Us",
        "Contact Us",
        "Newsletter",
        "Privacy",
        "Terms",
        "Cookies",
        "DPA",
        "Status",
      ],
    },
    {
      heading: "Products",
      links: [
        "Postcards: Email Builder",
        "Slides: Website Generator",
        "Startup: Bootstrap Builder",
        "Designmodo Experts",
        "Affiliate Program",
        "Member Perks",
        "Pulsetic: Website Uptime Monitor",
        "Siter.io: No-Code Website Builder",
        "Static.app: Static Website Hosting",
      ],
    },
    {
      heading: "Templates",
      links: [
        "Gmail Email Templates",
        "Outlook Email Templates",
        "Mailchimp Email Templates",
        "HubSpot Email Templates",
        "Klaviyo Email Templates",
        "Braze Email Templates",
        "Email Marketing Templates",
        "Email Newsletter Templates",
        "Email Signature Templates",
      ],
    },
    {
      heading: "Resources",
      links: [
        "Email Templates",
        "Website Templates",
        "Bootstrap Templates",
        "Email Design Guide",
        "Add Animated GIF into Outlook",
        "Web Design Trends for 2025",
        "Email Design Trends for 2025",
        "HTML and CSS in Emails",
        "Email Marketing Calendar",
      ],
    },
  ];

  return (
    <footer className="  flex items-center justify-center w-full  text-white p-4 ">
      <div className="w-[80%] flex flex-col items-center justify-center ">
        <IconeQuestion />
        <div className="footer-links grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-16 w-full">
          {footerData.map((data, index) => (
            <FooterLinks
              key={index}
              heading={data.heading}
              links={data.links}
            />
          ))}
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
}

export default FooterSection;
