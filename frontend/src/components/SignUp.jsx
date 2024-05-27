import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("data", data);
    try {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      };

      await axios.post("http://localhost:3000/user/signup", userInfo);
      // console.log("AFTER data", data);

      if (data) {
        toast.success('SignUp Successfully.');
      }

      const { fullname, email, password } = data;
      const userData = {
        fullname,
        email,
        password,
      };
      console.log("userData", userData);
      localStorage.setItem("Users", JSON.stringify(userData));
      
    } catch (err) {
      if (err.response) {
        console.error(err);
        toast.error("Error " + err.response.data.message);
      } else {
        console.error(err);
        toast.error("An unexpected error occurred.")
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center h-screen items-center">
        <div className="flex justify-center w-full">
          <div className="modal-box dark:border dark:shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-xl">SignUp</h3>
              <div className="mt-6 space-y-2 flex flex-col">
                <span>Name</span>
                <input
                  type="text"
                  placeholder="enter fullname..."
                  className="w-96 px-3 py-1 border rounded-md outline-none text-black"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-red-500">This field is required*</span>
                )}
              </div>
              <div className="mt-4 space-y-2 flex flex-col">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="enter email..."
                  className="w-96 px-3 py-1 border rounded-md outline-none text-black"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">This field is required*</span>
                )}
              </div>
              <div className="mt-5 space-y-2 flex flex-col">
                <span>Password</span>
                <input
                  type="password"
                  placeholder="enter password..."
                  className="w-96 px-3 py-1 border rounded-md outline-none text-black"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required*</span>
                )}
              </div>
              <div className="flex justify-between">
                <button className="px-8 py-1 rounded-md mt-6 bg-pink-500 text-white text-md hover:bg-pink-600 duration-200">
                  SignUp
                </button>
                <p className="mt-12 mr-8">
                  have register!{" "}
                  <button
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
