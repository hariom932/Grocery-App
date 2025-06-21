import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "../mainPages/About";
import Faqs from "../mainPages/Faqs";
import Contact from "../mainPages/Contact";
import Shop from "../mainPages/Shop";
import BlogList from "../blog/BlogList";
import BlogDetails from "../blog/BlogDetails";

const Menu = () => {
  return (
    <>
      <nav className="h-13 text-gray-500 text-sm  hidden border-b border-gray-200 lg:block">
        <div className="h-13 container mx-auto px-4">
          <div className="h-13 flex justify-center items-center">
            <ul className="h-full flex">

              <li className="relative group h-13 p-4 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer">
                <Link to="/" className="flex items-center gap-1 ">
                  Home
                  <ion-icon className="w-3 h-3 ml-1" name="caret-down-outline"></ion-icon>
                </Link>
                {/* Submenu */}
                <ul className="absolute left-0 top-full mt-1 bg-white text-black shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[160px] z-50">
                  <li className="px-4 py-2 bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer text-gray-600">
                    <Link to="/"><ion-icon name="chevron-forward-outline"></ion-icon>Home 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer text-gray-600">
                    <Link to="/"><ion-icon name="chevron-forward-outline"></ion-icon>Home 2</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer text-gray-600">
                    <Link to="/"><ion-icon name="chevron-forward-outline"></ion-icon>Home 3</Link>
                  </li>
                </ul>
              </li>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360]">
                <Link to="/about">About Us</Link>
              </li>

              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360]">
                <Link to="/shop">Fruits & Vegetables</Link>
              </li>

              <li className="relative group h-13 p-4 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360]">
                <Link to="/shop" className="flex items-center gap-1">
                  Shop
                  <ion-icon className="w-3 h-3" name="caret-down-outline"></ion-icon>
                </Link>
                {/* Submenu */}
                <ul className="absolute left-0 top-full mt-1 bg-white text-black shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[160px] z-50">
                  <li className="px-4 py-2 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer text-gray-600">
                    <Link to="/shop"><ion-icon name="chevron-forward-outline"></ion-icon>Product Grid</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer text-gray-600">
                    <Link to="/shop"><ion-icon name="chevron-forward-outline"></ion-icon>Product Detail</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer text-gray-600">
                    <Link to="/shop"><ion-icon name="chevron-forward-outline"></ion-icon>My Account</Link>
                  </li>
                </ul>
              </li>

              <li className="relative group h-13 p-4 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] text-gray-600">
                <div className="flex items-center cursor-pointer hover:text-gray-200">
                  Blog
                  <ion-icon className="w-3 h-3" name="caret-down-outline"></ion-icon>
                </div>

                {/* Submenu */}
                <ul className="absolute left-0 top-full mt-1 bg-white text-black shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[160px] z-50">
                  <li className="px-4 py-2 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer text-gray-600">
                    <Link to="/bloglist">
                      <ion-icon name="chevron-forward-outline"></ion-icon> Blog List
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gradient-to-r from-[#FF8E4D] to-[#FF6360] cursor-pointer text-gray-600">
                    <Link to="/blogdetails">
                      <ion-icon name="chevron-forward-outline"></ion-icon> Blog Detail
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#f78367] to-[#FF6360]">
                <Link to="/faqs">FAQ</Link>
              </li>

              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#e87b60] to-[#FF6360]">
                <Link to="/contact">Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
