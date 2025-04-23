import React from "react";

const Menu = () => {
  return (
    <>
      <nav className="h-13 text-gray-500 text-sm  hidden border-b border-gray-200 lg:block">
        <div className="h-13 container mx-auto px-4">
          <div className="h-13 flex justify-center items-center">
            <ul className="h-full flex">
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#f17557] to-[#f14114]">
                <a href="#" className=" hover:text-gray-200 ">
                  Home
                  <ion-icon
                    className="w-3 h-3"
                    name="caret-down-outline"
                  ></ion-icon>
                </a>
              </li>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#e96e4f] to-[#f14114]">
                <a href="#" className=" hover:text-gray-200 ">
                  About Us
                </a>
              </li>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#f18166] to-[#f14114]">
                <a href="#" className=" ">
                  Fruits & Vegetables
                </a>
              </li>

              <li className="relative group h-13 p-4 hover:bg-gradient-to-r from-[#f38164] to-[#f14114]">
                <a href="#" className=" hover:text-gray-200  flex items-center">
                  Shop
                  <ion-icon className="w-3 h-3" name="caret-down-outline"></ion-icon>
                </a>
              </li>

              <li className="relative group h-13 p-4 hover:bg-gradient-to-r from-[#f17e61] to-[#f14114]">
                <a href="#" className=" hover:text-gray-200  flex items-center">
                  Blog
                  <ion-icon className="w-3 h-3" name="caret-down-outline">
                
                  </ion-icon>
                </a>
              </li>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#f78367] to-[#f14114]">
                <a href="#" className=" hover:text-gray-200 ">
                  FAQ
                </a>
              </li>
              <li className="h-13 p-4 hover:bg-gradient-to-r from-[#e87b60] to-[#f14114]">
                <a href="#" className=" hover:text-gray-200 ">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
