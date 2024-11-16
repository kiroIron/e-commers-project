import React from "react";
import { Heart, ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header className="w-screen h-[60px] p-4 bg-[#B4E380] flex  justify-between items-center">
        <h1 className=" text-2xl">E-commerce</h1>
        <nav className="flex items-center justify-between gap-8">
          <article className="flex gap-4 " aria-label="icon-nav">
            <Heart />
            <ShoppingCart />
            <User />
          </article>
          <article>
            <button className="bg-[#88D66C] py-2 px-8 rounded-2xl hover:text-white font-bold ">SignUp</button>
          </article>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
