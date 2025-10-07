function SocialLinks() {
  const socialLinks = [
    { icone: '<i class="ri-twitter-x-line"></i>', url: "x.com" },
    { icone: '<i class="ri-linkedin-box-fill"></i>', url: "linkedin.com" },
    { icone: '<i class="ri-instagram-line"></i>', url: "instagram.com" },
    { icone: '<i class="ri-product-hunt-fill"></i>', url: "producthunt.com" },
    { icone: '<i class="ri-dribbble-fill"></i>', url: "dribbble.com" },
    { icone: '<i class="ri-youtube-fill"></i>', url: "youtube.com" },
  ];

  return (
    <div className=" flex flex-col mt-20 ">
      <div className="flex gap-4 justify-center mb-14">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="text-gray-500 text-2xl hover:text-black"
          >
            <span dangerouslySetInnerHTML={{ __html: link.icone }} />
          </a>
        ))}
      </div>
      <div className="mb-8">
        <p className="text-center text-xs font-medium text-gray-400 tracking-widest">
          Designmodo Inc. 50 N 1st St, <br></br> Brooklyn, NY 11249, United
          States
        </p>
        <p className="text-center text-gray-400 font-medium text-xs tracking-widest mt-6">
          Copyright © 2010-2025
        </p>
      </div>
    </div>
  );
}

export default SocialLinks;
