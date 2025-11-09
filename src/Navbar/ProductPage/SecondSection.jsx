import React from "react";

function TrustedCompanies() {
  const companies = [
    {
      name: "Adobe",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/adobe.svg",
    },
    {
      name: "Nike",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/nike.svg",
    },
    {
      name: "Ikea",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/ikea.svg",
    },
    {
      name: "T-mobile",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/t-mobile.svg",
    },
    {
      name: "Microsoft",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/microsoft.svg",
    },
    {
      name: "Nasa",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/nasa.svg",
    },
    {
      name: "Google",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/google.svg",
    },
    {
      name: "GoDaddy",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/godaddy.svg",
    },
    {
      name: "Disney",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/disney.svg",
    },
    {
      name: "Yahoo",
      logo: "https://designmodo.com/wp-content/themes/designmodo/assets/img/landing/yahoo.svg",
    },
  ];

  return (
    <section className="mt-28 lg:mt-44 mb-28 lg:mb-44 px-5 lg:px-12">
      <div className="mx-auto px-4 flex flex-col gap-4 lg:flex-row md:items-center md:justify-between">
        {/* Heading */}
        <div className="mb-8 text-center lg:text-start md:mb-0 ">
          <h2 className="text-2xl  font-bold text-gray-900">
            Trusted by <br className="hidden lg:block" /> biggest players{" "}
            <br className="hidden lg:block" />
            in the game.
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 min-[430px]:grid-cols-3 md:grid-cols-5 gap-5 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-50"
            >
              <img src={company.logo} alt={company.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;
