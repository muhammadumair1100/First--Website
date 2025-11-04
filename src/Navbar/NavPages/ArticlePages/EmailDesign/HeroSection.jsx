export default function HeroSection() {
  return (
    <div className="mt-14 flex flex-col justify-center items-center bg-cover bg-center relative z-0 bg-[url('/WebdesignImages/HeroPic.jpg')] h-80 w-full ">
      <div className="absolute w-full h-full bg-black/40"></div>
      <h1 className="font-bold text-3xl relative z-10 text-white lg:text-5xl">
        Website Design
      </h1>
      <p className="text-white relative z-10 text-xs mt-4 font-semibold">
        112 ARTICLES
      </p>
    </div>
  );
}
