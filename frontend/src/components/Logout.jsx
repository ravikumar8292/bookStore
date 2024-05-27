import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = ()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            })
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            setTimeout(()=>{
                window.location.reload();
              },2000)
        } catch (error) {
            toast.error("Error: " + error);
            setTimeout(() => {
                
            }, 2000);
        }
    }
  return (
    <div>
      <button className="bg-red-700 text-white dark:bg-red-700 px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
      onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
