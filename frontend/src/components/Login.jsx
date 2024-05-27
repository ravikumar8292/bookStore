import React from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


    const onSubmit = async (data) => {
      // console.log("data", data);
      try {
        const userInfo = {
          email: data.email,
          password: data.password,
        };

        await axios.post("http://localhost:3000/user/login", userInfo);
        // console.log("AFTER data", data);

        if (data) {
          toast.success('Login Successfully.');
          // document.getElementById("my_model_3").close();
          navigate(from, {replace:true});
          setTimeout(()=>{
            window.location.reload();
          },2000)
        }

        const { email, password } = data;
        const userData = {
          email,
          password,
        };
        localStorage.setItem("Users", JSON.stringify(userData));
        console.log("userData", userData);

      } catch (err) {
        if (err.response) {
          console.error(err);
          toast.error("Error " + err.response.data.message);
          setTimeout(()=>{});
        } else {
          console.error(err);
          toast.error("An unexpected error occurred.");
          setTimeout(()=>{});
          
        }
      }
    };
  

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-white dark:border dark:bg-slate-900">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to={"/"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=>document.getElementById("my_model_3").close()}
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2 flex flex-col">
              <span>Email</span>
              <input
                type="email"
                placeholder="enter email..."
                {...register("email", { required: true })}
                className="w-96 px-3 py-1 border rounded-md outline-none text-black"
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
                {...register("password", { required: true })}
                className="w-96 px-3 py-1 border rounded-md outline-none text-black"
              />
              {errors.password && (
                <span className="text-red-500">This field is required*</span>
              )}
            </div>
            <div className="flex justify-between">
              <Link to={"/"} className="px-4 pt-2 rounded-md mt-6 bg-pink-500 text-white text-md hover:bg-pink-600 duration-200"
              onClick={handleSubmit(onSubmit)}>
                Login
              </Link>
              <p className="mt-12 mr-8">
                Not registered?{" "}
                <Link
                  to={"/signup"}
                  className="text-blue-500 underline cursor-pointer"
                >
                  SignUp
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
