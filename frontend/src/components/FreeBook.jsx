import React, { useEffect, useState } from "react";
// import list from "../../public/list.json";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

const FreeBook = () => {

  const [book , setBook] = useState([]);
  useEffect(()=>{
    const getBook = async()=>{
      try {
       const res = await axios.get("http://localhost:3000/book");
       console.log(res.data);
       setBook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log("Error",error);
      }
    };
    getBook();
  },[])

  
     var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };

  return (
   <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="">
      <h1 className="font-semibold text-xl py-2">Free Offered Courses</h1>
      <p className="text-md">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci,
        quisquam dolorem fugit dolores explicabo laborum iste nostrum minus,
        harum, error illum voluptatem!
      </p>
      </div>
    
    <div>
    <Slider {...settings}>
    {book.map((item)=> (
        <Cards item={item} key={item.id} />
    ))}
    </Slider>
    </div>
    </div>
   </>
  );
};

export default FreeBook;
