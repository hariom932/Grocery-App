import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      {/* Cart Div */}
      <div
        id="cart"
        className={`container bg-white w-[25%] h-full absolute right-0 z-10 transition-all duration-300 ease-in-out ${
          isCartOpen ? "block" : "hidden"
        }`}
      >
        <div className="h-15 bg-black flex justify-between items-center px-5 text-white font-medium">
          <div>My Cart (0 items)</div>
          <div onClick={cartHandler}>
            <ion-icon className="h-8 w-8 cursor-pointer" name="close-circle"></ion-icon>
          </div>
        </div>
      </div>

      {/* Navbar & Menu */}
      <div className="w-full">
        <div className="flex flex-col items-center text-white bg-gradient-to-r from-[#040404] to-[#21262A] w-full py-4 text-[12px] md:flex-row justify-between px-4 md:py-3 2xl:px-50">
          {/* Cashback Text */}
          <div className="text-sm flex gap-1 text-[12px] py-2 2xl:py-0">
            20% Cashback for all users | Code:{" "}
            <strong className="flex items-center pt-0.1">
              OGOFERS13
              <span>
                <ion-icon name="happy-outline"></ion-icon>
              </span>
            </strong>
          </div>

          {/* Links */}
          <div>
            <ul className="flex gap-6">
              <li className="flex items-center gap-1 hover:cursor-pointer">
                <ion-icon className="pt-1" name="location-outline"></ion-icon>
                Your location
              </li>
              <li className="flex items-center gap-1 hover:cursor-pointer">
                <ion-icon className="pt-1" name="lock-closed"></ion-icon>
                <Link to='/login'>
                  Sign In
                </Link>
              </li>
              <li className="flex items-center gap-1 hover:cursor-pointer">
                <ion-icon className="pt-1" name="person-circle-outline"></ion-icon>
                <Link to='/login'>
                Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="w container max-w-full">
        <div className="w-full flex justify-center items-center">
          <div className="w-full">
            <div className="h-36 bg-gradient-to-r from-[#0FC7B4] to-[#28D695] relative flex justify-between lg:px-40 md:h-23">
              {/* Logo */}
              <div className="h-20 flex items-center">
                <div className="pl-4 pt-5 xl:pl-5">
                  <img
                    className="p-3"
                    src="https://klbtheme.com/groci/wp-content/uploads/2018/08/logo-1.png"
                    alt="Groci – Organic Food and Grocery Theme"
                  />
                </div>
              </div>

              {/* Search Bar */}
              <div className="w-[90%] absolute top-20 left-3 flex items-center rounded-sm overflow-hidden xl:rounded-sm md:top-5 md:w-[70%] md:pl-85 lg:pl-110 xl:w-[67%]">
                <input
                  type="text"
                  placeholder="Enter Keyword Here ..."
                  className="bg-white h-12 rounded-l-sm text-gray-700 px-2 py-2 focus:outline-none w-[85%]"
                />
                <button className="font-light h-12 rounded-r-sm text-sm bg-gradient-to-r from-[#e96e4f] to-[#f14114] text-white px-4 py-2">
                  SEARCH
                </button>
              </div>

              {/* Mobile Menu Icon */}
              <div className="h-11 w-11 mt-5 mr-5 bg-white rounded-xs p-1 lg:hidden">
                <ion-icon className="text-4xl text-gray-400" name="menu-outline"></ion-icon>
              </div>

              {/* Cart Icon */}
              <div onClick={cartHandler} className="hidden lg:flex gap-3 items-center cursor-pointer">
                <div className="relative">
                  <div className="h-11 w-11 bg-white rounded-full p-2 overflow-hidden">
                    <ion-icon className="h-4 w-6 text-gray-700" name="cart"></ion-icon>
                  </div>
                  <span className="absolute bottom-3 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </span>
                </div>
                <div className="hidden font-medium text-white text-sm xl:block">My cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
 