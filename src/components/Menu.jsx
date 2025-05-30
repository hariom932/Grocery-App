import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import About from "../assets/mainPages/About";
import Faqs from "../assets/mainPages/Faqs";
import Contact from "../assets/mainPages/Contact";
import Shop from "../assets/mainPages/Shop";

const Menu = () => {
  return (
    <>
      <nav className="h-13 text-gray-500 text-sm  hidden border-b border-gray-200 lg:block">
        <div className="h-13 container mx-auto px-4">
          <div className="h-13 flex justify-center items-center">
            <ul className="h-full flex">
                  <Link to="/" element={<Home/>}>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#f17557] to-[#f14114]">
                     Home
                  <ion-icon
                    className="w-3 h-3"
                    name="caret-down-outline"
                    ></ion-icon>
              </li>
                    </Link>
               <Link to="/about" element={<About/>}>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#e96e4f] to-[#f14114]">
               About Us
              </li>
               </Link>
               <Link to="/shop" element={<Shop/>}>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#f18166] to-[#f14114]">
                  Fruits & Vegetables
              </li>
               </Link>
            <Link to="/shop" element={<Shop/>}>
              <li className="relative group h-13 p-4 hover:bg-gradient-to-r from-[#f38164] to-[#f14114]">
                  Shop
                  <ion-icon className="w-3 h-3" name="caret-down-outline"></ion-icon>
              </li>
            </Link>

              <li className="relative group h-13 p-4 hover:bg-gradient-to-r from-[#f17e61] to-[#f14114]">
                <a href="#" className=" hover:text-gray-200  flex items-center">
                  Blog
                  <ion-icon className="w-3 h-3" name="caret-down-outline">
                
                  </ion-icon>
                </a>
              </li>
              <Link to="/faqs" element={<Faqs/>}>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#f78367] to-[#f14114]">
                  FAQ
              </li>
              </Link>
              <Link to="/contact" element={<Contact/>}>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#e87b60] to-[#f14114]">
                  Contact
              </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
