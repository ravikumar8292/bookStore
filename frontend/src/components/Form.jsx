import React from "react";

const Form = () => {
  return (
    <div>
      <div className="">
        <h3>Required fields are marked *</h3>
        <div className="">
          <div className="flex gap-8 mt-6">
            <div className="flex items-center ">
              <input
                type="text"
                className="w-96 mx-3 p-1 py-2 border-2 rounded-md placeholder:text-sky-700 text-sm px-4"
                name="name"
                placeholder="Your Name*"
                id=""
              />
            </div>
            <div className="flex items-center mx-1">
              <input
                type="email"
                className="w-96 mx-3 p-1 py-2 border-2 rounded-md placeholder:text-sky-700 text-sm px-4"
                name="name"
                placeholder="Your Email*"
                id=""
              />
            </div>
          </div>

          <div className="flex gap-8 mt-4">
            <div className="flex items-center ">
              <input
                type="text"
                className="w-96 mx-3 p-1 py-2 border-2 rounded-md placeholder:text-sky-700 text-sm px-4"
                name="name"
                placeholder="Your Phone Number*"
                id=""
              />
            </div>
            <div className="flex items-center mx-1">
              <input
                type="email"
                className="w-96 mx-3 p-1 py-2 border-2 rounded-md placeholder:text-sky-700 text-sm px-4"
                name="name"
                placeholder="Subject*"
                id=""
              />
            </div>
          </div>

          <div className="mt-4 ml-3">
            <textarea name="" placeholder="Message (optional)" className="border-2 w-[824px] h-[150px] rounded-md placeholder:text-sm p-2" id="">
            </textarea>
          </div>
          <div className="mx-3">
          <button className="btn mt-6 btn-secondary bg-pink-500 text-white text-sm hover:bg-black">Send message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
