import React from "react";
import { FaPhoneAlt, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact flex w-full md:h-screen  items-center justify-center px-4 text-center py-8 pt-20 bg-emerald-800 text-white"
    >
      <div className="flex flex-col w-4/5">
        <div className="flex flex-row items-center justify-center w-full border-white border-b-2 flex-wrap">
          <h1 className="text-2xl sm:text-4xl uppercase font-bold w-auto my-1 sm:my-4 mx-2 text-white">
            contact
          </h1>
          <h1 className="text-2xl sm:text-4xl uppercase font-bold w-auto my-1 sm:my-4 mx-2 text-green-400 ">
            us
          </h1>
        </div>
        <p className="text-xl text-center my-5 mx-auto">
          - Get in touch with us to know more! -
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 text-gray-900 uppercase my-4">
          <div className="flex flex-col bg-slate-50 bg-opacity-50 text-center mx-5 py-10 my-4">
            <div className="flex justify-center py-1 my-3">
              <BsPersonCircle
                size={100}
                className="bg-slate-300 rounded-full"
              />
            </div>
            <div className="contact w-full text-gray-700 font-semibold">
              <div className="flex w-4/5 mx-auto text-left py-1 my-2 items-center">
                <FaPhoneAlt />
                <p className="pl-2">+6012-6330393</p>
              </div>
              <div className="flex w-4/5 mx-auto text-left py-1 my-2 items-center">
                <ImFacebook2 />
                <p className="pl-2">
                  <a
                    href="https://www.facebook.com/bioplusem/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    facebook.com/bioplusem
                  </a>
                </p>
              </div>
              <div className="flex w-4/5 mx-auto text-left py-1 my-2 items-center">
                <MdEmail />
                <p className="pl-2">
                  <a href="mailto:bioplusre01@gmail.com">
                    bioplusre01@gmail.com
                  </a>
                </p>
              </div>
              <div className="flex w-4/5 mx-auto text-left py-1 my-2 items-center">
                <FaGlobe />
                <p className="pl-2">
                  <a
                    href="https://www.facebook.com/bioplusem/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website Link
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-slate-50 bg-opacity-50 text-center mx-5 py-10 my-4">
            <h1
              className="text-xl text-gray-900 py-2 border-gray-700 border-b-2 w-1/4 mx-auto mb-4 font-bold
            "
            >
              locate us!
            </h1>
            <div className="w-4/5 mx-auto text-left py-1 my-2">
              <p className="font-bold ">Address:</p>
              <p className="font-semibold ">
                118b, jalan ss24/2, taman megah, 47301, petaling jaya, selangor
                darul ehsan
              </p>
            </div>
            <div className="w-4/5 mx-auto text-left py-1 my-2">
              <p className="font-bold ">disclaimer: </p>
              <p className="font-semibold ">
                *kindly give us a quick call or schedule an appointment for a
                meeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
