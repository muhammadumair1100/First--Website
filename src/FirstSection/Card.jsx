import Image from "./Image";
import Headings from "./Headings";

function Card() {
  const cardsData = [
    {
      CardImage: "/FirstCardsImages/picOne.jpg",
      CardTitle: "Wedding Website Template",
      CardDescription:
        "This beautiful website template is specifically designed for wedding planners, event coordinators as well as catering services.",
    },
    {
      CardImage: "/FirstCardsImages/picTwo.jpg",
      CardTitle: "Yoga Website Template",
      CardDescription:
        "This website template is a relaxing and welcoming web space perfect for everything based on holistic health: from healing centers to societies of yoga.",
    },
    {
      CardImage: "/FirstCardsImages/picThree.jpg",
      CardTitle: "Real Estate Website Templates",
      CardDescription:
        "This sleek and stylish website template is painstakingly designed for real estate agencies, independent realtors, and property management companies endeavoring to captivate sure-footed clientele.",
    },
    {
      CardImage: "/FirstCardsImages/picFour.jpg",
      CardTitle: "Portfolio Website Template",
      CardDescription:
        "This is a colorful, eye-catching portfolio design website template, designed especially for creative professionals like photographers, designers, and artists looking to showcase their work in&nbsp;style.",
    },
    {
      CardImage: "/FirstCardsImages/picFive.jpg",
      CardTitle: "Medical Website Template",
      CardDescription:
        "This contemporary website template exudes professionalism and innovation, designed primarily for the healthcare industry.",
    },
    {
      CardImage: "/FirstCardsImages/picSix.jpg",
      CardTitle: "Wallpapers Website Template",
      CardDescription:
        "The Wallpapers allow users to virtually stroll around the store and find the artwork to make their day. It jungles visuals and content to deliver an immersive shopping experience.",
    },
    {
      CardImage: "/FirstCardsImages/picSeven.jpg",
      CardTitle: "Shop Website Template",
      CardDescription:
        "Content-heavy but eye-pleasing human-centered design that brings value to the customers and establishes emotional connection is what this feature-packed HTML shop website template is all about.",
    },
    {
      CardImage: "/FirstCardsImages/picEight.jpg",
      CardTitle: "Restaurant Website Template",
      CardDescription:
        "Eating with their eyes is what your users will do when they stumble upon your website made with this powerful and engaging, HTML/CSS restaurant template.",
    },
    {
      CardImage: "/FirstCardsImages/picNine.jpg",
      CardTitle: "Art Gallery Website Template",
      CardDescription:
        "Bold, daring, eye-catching, and surprisingly organized – this is how you can describe this outstanding HTML/CSS website template explicitly created to meet the unique needs of the creative crowd.",
    },
    {
      CardImage: "/FirstCardsImages/picTen.jpg",
      CardTitle: "App Website Template",
      CardDescription:
        "Seek ways to raise awareness of your application? Search no more. This sleek, insightful, and multifunctional HTML/CSS template will become a perfect gateway to your product.",
    },
  ];

  return (
    <div className="card  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-3 md:px-10 gap-6 w-full rounded-md mx-4  p-4 ">
      {cardsData.map((c, i) => {
        return (
          <div
            key={i}
            className="each-card shadow-md hover:cursor-pointer hover:-translate-y-1 transition-transform duration-200 rounded-lg"
          >
            <Image src={c.CardImage} alt={c.CardTitle} />
            <Headings title={c.CardTitle} description={c.CardDescription} />
          </div>
        );
      })}
    </div>
  );
}
export default Card;
