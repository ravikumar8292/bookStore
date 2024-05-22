import React from "react";
import banner from "/storewallpaper.jpg";
import Form from "./Form";
import Address from "./Address";
// import { Form } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 static bg-gradient-to-tl from-indigo-900">
          <img src={banner} className="h-[78vh] w-[100vw] opacity-100 mix-blend-overlay" alt="" />
        </div>

        <div className="absolute bottom-72 left-80 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl mb-2">
          Ravi Book <span className="text-pink-500">Store :)</span>
        </h1>
        <p>
          hello everone Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque consequatur eveniet alias.
        </p>
        <p>
          hello everone Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          hello everone Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Cumque consequatur.
        </p>
        <p>hello everone Lorem ipsum dolor sit amet consectetur.</p>
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
