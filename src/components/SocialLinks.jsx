import React from "react";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { BiSolidShoppingBag } from "react-icons/bi";

const SocialLinks = () => {
  const links = [
    {
      id: 301,
      child: (
        <>
          Facebook <ImFacebook2 size={30} />
        </>
      ),
      href: "https://www.facebook.com/bioplusem/",
      style: "rounded-tr-md",
    },
    {
      id: 302,
      child: (
        <>
          Website <FaGlobe size={30} />
        </>
      ),
      href: "https://www.facebook.com/bioplusem/",
    },
    {
      id: 303,
      child: (
        <>
          Email <MdEmail size={30} />
        </>
      ),
      href: "mailto:bioplusre01@gmail.com",
    },
    {
      id: 304,
      child: (
        <>
          Shop <BiSolidShoppingBag size={30} />
        </>
      ),
      href: "https://www.facebook.com/bioplusem/",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg bg-gradient-to-r from-green-600 to-emerald-700 hover:rounded-md hover:ml-[-10px] duration-300 " +
              " " +
              style
            }
          >
            <a
              href={href}
              // download={download}
              className="flex justify-between items-center w-full text-white "
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
