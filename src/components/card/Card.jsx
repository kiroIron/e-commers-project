import React from "react";
import { ShoppingBasket } from 'lucide-react';

const Card = ({product}) => {
  return (
    <>
      <article className="w-[450px] h-[550px] bg-[#B4E380] rounded-3xl flex flex-col justify-start  p-4">
        <div className=" rounded-xl overflow-hidden h-[550px] ">
          <img
            className=" object-cover object-center hover:scale-125 transition ease-in-out  min-h-[207px]  w-full"
            src={product.image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start p-4 h-full  gap-1">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <h6 className="text-[11px]">{product.category}</h6>
          <h4 className="font-bold text-4">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </h4>
          <p className=" line-clamp-3 ">{product.description}</p>
        </div>
        <button className="flex gap-4  w-full py-2 justify-center items-center bg-[#88D66C] rounded-2xl hover:text-white  px-8">
            <ShoppingBasket/>
            <h1 className="text-xl">Buy</h1>
        </button>
      </article>
    </>
  );
};

export default Card;
