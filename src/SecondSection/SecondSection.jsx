import SecondHeadings from "./SecondHeadings";
import SecondCards from "./SecondCards";

function SecondSection() {
  const cardsData = [
    {
      cardIcone: '<i class="ri-money-dollar-box-line"></i>',
      cardHeading: "Cost-Effectiveness",
      cardText:
        "Opposed to high-priced custom web solutions, website templates are a more affordable option that is ideal for companies on a tight budget. They are cost- effective in many ways. First, they save a lot of money on design and development, offering modern and good-looking themes. Second, they are hassle-free with deployment. Third, they receive updates and support, avoiding the costly burden of maintenance.",
    },
    {
      cardIcone: '<i class="ri-bubble-chart-line"></i>',
      cardHeading: "Built-In Functionality",
      cardText:
        "Website templates have a vast range of use cases because they ship with an abundance of built-in functionality. There are plenty to choose from: ultra-modern slide-out menus, well-organized universal card layouts, promo boxes, impressive hero areas, and even dynamic effects and transitions. Users may create a portfolio with an outstanding gallery, a landing page with a fascinating slider, a blog with a comment section, or a small e-commerce project with little effort.",
    },
    {
      cardIcone: '<i class="ri-focus-2-line"></i>',
      cardHeading: "Marketing Advantage",
      cardText:
        "Website templates are the best friends of marketers. With ready-to-go solutions, the sales department may effectively bring marketing campaigns to life, test ideas, and change action plans immediately. They may publish content to drive engagement, lure users into the sales funnel and generate conversions and leads simply by switching between templates or adding or removing units or stylistic choices.",
    },
    {
      cardIcone: '<i class="ri-vip-crown-line"></i>',
      cardHeading: "Strong Presence",
      cardText:
        "Whatever website template you choose, it will meet four crucial criteria of the modern world that differentiate a lousy website from a high quality and reliable platform that builds trust, achieves marketing goals, forwards business, and reinforces brand identity. They are responsiveness, mobile-friendliness, usability, and accessibility. These standards are constantly overlooked and underrated, but not in this case. Here they are the top priority, cementing a strong presence for the brand.",
    },
  ];

  return (
    <section className="second-section w-full mb-52 h-full flex justify-center items-center border-5 border-purple-600 ">
      <div className="w-[80%] flex flex-col items-center ">
        <SecondHeadings />
        <div className="grid grid-cols-1 md:grid-cols-2 mt-16 w-full gap-5">
          {cardsData.map((card, index) => (
            <SecondCards
              key={index}
              cardIcone={card.cardIcone}
              cardHeading={card.cardHeading}
              cardText={card.cardText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
