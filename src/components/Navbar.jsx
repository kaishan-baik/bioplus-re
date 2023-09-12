import React, { useState } from "react";
import companyLogo from "./../images/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "products",
    },
    {
      id: 4,
      link: "testimonials",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center w-full h-20 text-white backdrop-blur-md fixed px-5 z-20 ">
        <div className=" w-44  pt-2 h-20 cursor-pointer">
          <Link to="home" smooth duration={500}>
            <img
              src={companyLogo}
              className="object-cover w-full h-full"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="hidden md:flex ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-3 py-1 mx-2 md:mx-3 uppercase cursor-pointer text-md font-semibold hover:bg-emerald-800 hover:text-white duration-500 rounded-sm "
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer pr-5 z-10 md:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-orange-400 to-yellow-100 ">
            {links.map(({ id, link }) => (
              <li
                className="cursor-pointer uppercase py-6 text-4xl text-green-700 text-center font-semibold my-2"
                key={id}
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
