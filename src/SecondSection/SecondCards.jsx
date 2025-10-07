function SecondCards({ cardIcone, cardHeading, cardText }) {
  return (
    <div className="second-cards bg-blue-100/50 flex flex-col    rounded-lg p-8  ">
      <span
        dangerouslySetInnerHTML={{ __html: cardIcone }}
        className="text-3xl mb-2"
      ></span>
      <h1 className="text-xl font-semibold text-gray-700 mt-1">
        {cardHeading}
      </h1>
      <p className="w-full pr-2 mt-2 text-sm font-normal text-gray-600">
        {cardText}
      </p>
    </div>
  );
}

export default SecondCards;
