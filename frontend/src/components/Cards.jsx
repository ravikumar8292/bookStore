import React from "react";

const Cards = ({item}) => {
    console.log(item);
  return (
    <div>
      <div className="my-4 ml-2">
        <div className="card w-[300px] h-[390px] bg-base-100 shadow-xl dark:border dark:shadow dark:shadow-white hover:scale-105 duration-300">
          <figure>
            <img
              src={item.image}
              alt="books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary bg-pink-500 text-white py-3 px-3">Free</div>
            </h2>
            <p className="text-sm">{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer rounded-full border border-[2px] hover:bg-pink-500 hover:text-white px-2 py-1 duration-200">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
