import React from "react";
// import banner from "/storewallpaper.jpg";
import outlet from "../../public/outlet.png";
import Form from "./Form";
import Address from "./Address";
// import { Form } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 pt-28">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
            <div className="space-y-12">
              <h1 className="text-4xl font-bold">
                Hello, Welcomes to Ravi Book Store ,{" "}
                <span className="text-pink-500">
                  learn new something everyday!!!
                </span>
              </h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                totam eius id non molestiae at quisquam illo quidem obcaecati,
                dolorum assumenda animi in possimus ea consequuntur cupiditate!
              </p>
              <div className="">
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Enter your email to login"
                  />
                </label>
              </div>
            </div>
            <button className="btn mt-6 btn-secondary bg-pink-500 text-white hover:bg-black">
              Subscribe
            </button>
          </div>

          <div className="w-full md:w-1/2 order-1 mx-5 mt-8">
            <img src={outlet} className="w-[1200px] h-[100%]" alt="" srcset="" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-12 p-8 border rounded-2xl bg-base-100 shadow-xl ">
          <div className="col-span-2 p-2">
            <div className="grid grid-cols-2 gap-4">
              <Form />
            </div>
          </div>
          <div className="">
            <Address />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
