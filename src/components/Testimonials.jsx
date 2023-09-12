import React from "react";
import { FaStar } from "react-icons/fa";
import profile1 from "./../images/reviews/profile.jpg";
import review1 from "./../images/reviews/review1.jpg";
import review2 from "./../images/reviews/review2.webp";
import review3 from "./../images/reviews/review3.jpg";

const Testimonials = () => {
  const reviews = [
    {
      id: 201,
      title: "Person 1",
      role: "Owner of XXX Plantation",
      reviewImg: review1,
      personImg: profile1,
      desc: `"Five stars aren't enough for this product! It's transformed our fruit production. The quality is top-notch, and customers can't get enough. Our profits have never been better."`,
    },
    {
      id: 202,
      title: "Person 2",
      role: "Owner of XXX Plantation",
      reviewImg: review2,
      personImg: profile1,
      desc: `"Excellent product! This product is worth every penny. Our fruit orchard has seen a remarkable increase in sales, and the fruits are consistently amazing. Our customers keep coming back for more!"`,
    },
    {
      id: 203,
      title: "Person 3",
      role: "Owner of XXX Plantation",
      reviewImg: review3,
      personImg: profile1,
      desc: `"A game-changer for fruit quality and sales! This product has revolutionized the way we grow and sell our fruits. We've never been so proud of our produce, and our customers can taste the difference!"`,
    },
  ];

  return (
    <div
      name="testimonials"
      className="testimonials flex w-full h-auto pt-20 items-center justify-center px-4 text-center py-8 bg-emerald-200 "
    >
      <div className="flex flex-col w-4/5 text-green-800 backdrop-blur-md ">
        <div className="flex flex-row items-center justify-center w-full border-green-800 border-b-2 flex-wrap">
          <h1 className="text-2xl sm:text-4xl uppercase font-bold w-auto my-1 sm:my-4 mx-2 text-white">
            customer
          </h1>
          <h1 className="text-2xl sm:text-4xl uppercase font-bold w-auto my-1 sm:my-4 mx-2 text-green-900 ">
            testimonials
          </h1>
        </div>
        <div className="review flex flex-col items-center justify-center">
          {reviews.map(({ id, title, role, reviewImg, personImg, desc }) => (
            <div
              key={id}
              className="flex flex-col md:flex-row items-center justify-center text-center bg-white my-2 py-4 w-full"
            >
              <img
                src={reviewImg}
                alt={title}
                className="bg-black w-3/4  sm:w-1/2  object-cover rounded-lg border-green-700 border-2 mx-4"
              />
              <div className="flex flex-col items-center justify-center    mx-4 w-3/4 sm:w-1/2 ">
                <img
                  src={personImg}
                  alt={title}
                  className="w-20 h-20 rounded-full bg-black my-2"
                />
                <h2 className="my-1 text-lg font-bold">{title}</h2>
                <h3 className="my-1 text-lg text-black">{role}</h3>
                <div className="flex text-yellow-300 justify-center my-1 ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="mx-4 my-1 px-2 flex text-sm text-left sm:text-md md:text-lg">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
