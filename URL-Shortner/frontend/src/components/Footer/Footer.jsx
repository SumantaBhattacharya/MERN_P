import React from "react";

const Footer = () => {
  return (
    <div className="Footer w-full bg-black text-neutral-300 relative flex flex-col md:flex-row p-6 md:p-8 border-t border-neutral-800 gap-8 md:gap-16">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="mb-6 md:mb-0">
          <h1 className="uppercase text-4xl md:text-6xl leading-tight tracking-normal font-medium text-white">
            eye-opening
          </h1>
        </div>
        <div>
          <div className="flex items-center">
            <img
             className="w-40 h-40" 
             src="https://cdn-icons-png.flaticon.com/512/1017/1017466.png" alt="" />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-6">
        <h1 className="uppercase text-4xl md:text-6xl leading-tight tracking-normal font-medium text-white">
          presentations
        </h1>

        {/* Social Links */}
        <div className="flex flex-col">
          <h6 className="text-sm font-medium mb-1">S:</h6>
          <div className="flex flex-wrap gap-2">
            {[
              { name: "Instagram", href: "https://www.instagram.com" },
              { name: "Facebook", href: "https://www.facebook.com" },
              { name: "Linkedin", href: "https://www.linkedin.com" },
            ].map((item, idx) => (
              <a
                key={idx}
                className="text-sm cursor-pointer hover:text-white transition duration-200"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Locations and Menu */}
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h6 className="text-sm font-medium mb-1">L:</h6>
            <div className="flex flex-col gap-1">
              {[
                "202-1965 W 4th Ave",
                "Vancouver",
                "Canada30 Chukarina St",
                "Lviv, Ukraine",
              ].map((value, idx) => (
                <a
                  key={idx}
                  className="cursor-pointer text-sm hover:text-white transition duration-200"
                  href="#"
                >
                  {value}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h6 className="text-sm font-medium mb-1">M:</h6>
            <div className="flex flex-col gap-1">
              {[
                "Home",
                "Services",
                "Our work",
                "About us",
                "Insights",
                "Contact us",
              ].map((value, idx) => (
                <a
                  key={idx}
                  className="cursor-pointer text-sm hover:text-white transition duration-200"
                  href="#"
                >
                  {value}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <h6 className="text-sm font-medium mb-1">E:</h6>
          <a
            className="cursor-pointer text-sm hover:text-white transition duration-200"
            href="mailto:hello@linkly.design"
          >
            hello@linkly.design
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between mt-4 gap-2 text-sm">
          <span>
            © linkly design 2025.{" "}
            <a
              href="https://linkly.design/privacy/"
              className="hover:text-white transition duration-200"
            >
              Legal Terms
            </a>
          </span>
          <span>Website by Linky</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
