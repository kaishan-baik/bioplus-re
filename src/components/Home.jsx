import React from "react";
import { Link } from "react-scroll";
import { BiSolidShoppingBag, BiSolidChevronRight } from "react-icons/bi";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full homePage">
      <div className="max-w-screen-lg h-full mx-auto flex flex-col items-center justify-center pt-4">
        <div className=" flex flex-col justify-center items-center h-full w-full text-white text-center">
          <h1 className="text-4xl mb-2 sm:text-6xl md:text-7xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
            Bioplus RE
          </h1>
          <h1 className="text-2xl my-2 sm:text-5xl md:text-6xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white flex-wrap">
            Projects & Solutions
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl flex flex-row flex-wrap items-center justify-center py-3 mb-1">
            Green solutions today for a thriving environment tomorrow.
          </h2>
          <p className="mb-4 text-xl sm:text-3xl font-bold uppercase text backdrop-blur-md">
            quality | efficient | organic
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mx-auto place-items-center text-center">
            <Link
              to="products"
              smooth
              duration={400}
              className="group text-white w-fit px-4 py-2 my-2 sm:mx-5 md:text-lg flex items-center bg-transparent border-2 to-green-300 font-semibold uppercase cursor-pointer hover:scale-110 duration-300 hover:bg-white hover:text-green-800 "
            >
              products
              <span className="ml-2 duration-300">
                <BiSolidShoppingBag />
              </span>
            </Link>
            <Link
              to="contact"
              smooth
              duration={400}
              className="group text-white w-fit px-4 py-2 my-2 sm:mx-5 md:text-lg flex items-center bg-transparent border-2 to-green-300 font-semibold uppercase cursor-pointer hover:scale-110 duration-300 hover:bg-white hover:text-green-800 "
            >
              contact
              <span className="ml-2 group-hover:rotate-90 group-hover:text-red-500 duration-300">
                <BiSolidChevronRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
