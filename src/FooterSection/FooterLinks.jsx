function FooterLinks({ heading, links }) {
  return (
    <div className="footer-links mt-10 flex flex-col text-center ">
      <h1 className="text-lg font-semibold text-black mb-4">{heading}</h1>
      {links.map((link, index) => (
        <a
          href="#"
          key={index}
          className="text-sm text-gray-700 mt-3 px-6 hover:text-blue-700"
        >
          {link}
        </a>
      ))}
    </div>
  );
}

export default FooterLinks;
