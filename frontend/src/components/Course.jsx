import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {

  const [book , setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
       const res = await axios.get("http://localhost:3000/book");
       console.log(res.data);
       setBook(res.data);
      } catch (error) {
        console.log("Error",error);
      }
    };
    getBook();
  },[])

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have yuo{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            eius quaerat maiores corrupti laboriosam repudiandae reiciendis ea
            error! Cupiditate ullam rerum amet possimus. At similique distinctio
            perferendis a quisquam deserunt adipisci facilis sapiente aliquam
            architecto magnam unde dolor qui reiciendis omnis incidunt delectus
            porro quo debitis, quia iure amet et. Cum, sed. Soluta voluptatum id
            similique ipsum recusandae amet incidunt?
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
