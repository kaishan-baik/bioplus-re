import React from "react";
import bottle5L from "./../images/bottle.png";
import { PiPlantFill } from "react-icons/pi";
import { MdPets } from "react-icons/md";

const Products = () => {
  const plants = [
    {
      id: 101,
      title: "Plant EM: 0.25L Bottle",
      img: bottle5L,
      desc: "Product description for product",
      link: "Buy now",
    },
    {
      id: 102,
      title: "Plant EM: 1.0L Bottle",
      img: bottle5L,
      desc: "Product description for product",
      link: "Buy now",
    },
    {
      id: 103,
      title: "Plant EM: 5.0L Bottle",
      img: bottle5L,
      desc: "Product description for product",
      link: "Buy now",
    },
    {
      id: 104,
      title: "Plant EM: 10L Bottle",
      img: bottle5L,
      desc: "Product description for product",
      link: "Buy now",
    },
  ];

  const animals = [
    {
      id: 111,
      title: "Animal EM: 0.25L Bottle",
      img: bottle5L,
      desc: "Product description for product",
      link: "Buy now",
    },
    {
      id: 112,
      title: "Animal EM: 1.0L Bottle",
      img: bottle5L,
      desc: "Product description for product",
      link: "Buy now",
    },
    {
      id: 113,
      title: "Animal EM: 5.0L Bottle",
      img: bottle5L,
      desc: "Product description for product",
      link: "Buy now",
    },
    {
      id: 114,
      title: "Animal EM: 10L Bottle",
      img: bottle5L,
      desc: "Product description for product",
      link: "Buy now",
    },
  ];

  return (
    <div
      name="products"
      className="flex w-full  items-center justify-center px-4 text-center py-8 pt-20 bg-gradient-to-b from-green-200 to-lime-100 "
    >
      <div className="flex flex-col w-4/5 text-green-800 ">
        <div className="flex flex-row items-center justify-center w-full border-green-800 border-b-2 flex-wrap">
          <h1 className="text-4xl uppercase font-bold w-auto my-1 sm:my-4 mx-2 text-black">
            our
          </h1>
          <h1 className="text-4xl uppercase font-bold w-auto my-1 sm:my-4 mx-2 text-green-800 ">
            products
          </h1>
        </div>
        <div className="plants my-3 mb-5">
          <h3 className="text-2xl capitalize text-left flex  mb-4">
            <span className="mr-2 flex items-center ">
              <PiPlantFill />
            </span>
            for plants:
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {plants.map(({ id, title, img, link, desc }) => (
              <div
                key={id}
                className="shadow-green-800 shadow-lg mx-3 rounded-xl pb-4 bg-white my-2 text-green-800 hover:scale-110 duration-300"
              >
                <img src={img} alt={title} className="w-3/5 mx-auto pt-2" />
                <p className="text-xl py-2 mx-auto ">{title}</p>
                <p className="text-sm w-3/4 text-center mx-auto leading-3 py-2 mb-2 ">
                  {desc}
                </p>
                <a
                  href="/"
                  className="bg-emerald-400 py-1 px-3 uppercase rounded-xl font-bold text-black"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="animals my-3 mb-5">
          <h3 className="text-2xl capitalize text-left flex text-orange-700 mb-4">
            <span className="mr-2 flex items-center ">
              <MdPets />
            </span>
            for animals:
          </h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {animals.map(({ id, title, img, link, desc }) => (
              <div
                key={id}
                className="shadow-orange-700 shadow-lg mx-3 rounded-xl pb-4 bg-white my-2 text-orange-800 hover:scale-110 duration-300"
              >
                <img src={img} alt={title} className="w-3/5 mx-auto pt-2" />
                <p className="text-xl py-2 mx-auto ">{title}</p>
                <p className="text-sm w-3/4 text-center mx-auto leading-3 py-2 mb-2 ">
                  {desc}
                </p>
                <a
                  href="/"
                  className="bg-orange-400 py-1 px-3 uppercase rounded-xl font-bold text-black"
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
