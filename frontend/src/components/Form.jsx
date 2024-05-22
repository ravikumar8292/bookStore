import React from "react";
import { useForm } from "react-hook-form"

const Form = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const onSubmit = (data) => console.log(data)

  return (
    <div>
      <div className="">
        <h3 className="w-80">Required fields are marked *</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6">
            <div className="flex items-center">
              <input
                type="text"
                className="w-96 mx-3 p-1 py-2 border-2 rounded-md placeholder:text-sky-700 text-sm px-4"
                name="name"
                placeholder="Your Name*"
                id=""
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className="text-red-500">This field is required*</span>}
            </div>
            <div className="flex items-center">
              <input
                type="email"
                className="w-96 mx-3 p-1 py-2 border-2 rounded-md placeholder:text-sky-700 text-sm px-4"
                name="email"
                placeholder="Your Email*"
                id=""
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-red-500">This field is required*</span>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4">
            <div className="flex items-center ">
              <input
                type="phone"
                className="w-96 mx-3 p-1 py-2 border-2 rounded-md placeholder:text-sky-700 text-sm px-4"
                name="phone"
                placeholder="Your Phone Number*"
                id=""
                {...register("phone", { required: true })}
              />
              <br />
              {errors.phone && <span className="text-red-500">This field is required*</span>}
            </div>
            <div className="flex items-center">
              <input
                type="text"
                className="w-96 mx-3 p-1 py-2 border-2 rounded-md placeholder:text-sky-700 text-sm px-4"
                name="subject"
                placeholder="Subject*"
                id=""
                {...register("subject", { required: true })}
              />
              <br />
              {errors.subject && <span className="text-red-500">This field is required*</span>}
            </div>
          </div>

          <div className="mt-4 ml-3">
            <textarea name="" {...register("textarea", { required: true })} placeholder="Message (optional)" className="border-2 w-[214px] md:w-[824px] md:h-[150px] rounded-md placeholder:text-sm p-2" id="">
            </textarea>
            <br />
            {errors.textarea && <span className="text-red-500">This field is required*</span>}
          </div>
          <div className="mx-3">
          <button className="btn mt-6 btn-secondary bg-pink-500 text-white text-sm hover:bg-pink-600 duration-200 w-36 h-9">Send message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
