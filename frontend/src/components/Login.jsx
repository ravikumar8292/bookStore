import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const Login = () => {

        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();
    const onSubmit = (data) => console.log(data)

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
          
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2 flex flex-col">
            <span>Email</span>
            <input type="email" placeholder="enter email..." {...register("email", { required: true })} className="w-96 px-3 py-1 border rounded-md outline-none" />
            {errors.email && <span className="text-red-500">This field is required*</span>}
          </div>
          <div className="mt-5 space-y-2 flex flex-col">
            <span>Password</span>
            <input type="password" placeholder="enter password..." {...register("password", { required: true })} className="w-96 px-3 py-1 border rounded-md outline-none" />
            {errors.password && <span className="text-red-500">This field is required*</span>}
          </div>
          <div className="flex justify-between">
          <button className="px-8 py-1 rounded-md mt-6 bg-pink-500 text-white text-md hover:bg-pink-600 duration-200">Login</button>
          <p className="mt-12 mr-8">Not registered? <Link to={"/signup"} className="text-blue-500 underline cursor-pointer">SignUp</Link> </p>
          </div>
        </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
