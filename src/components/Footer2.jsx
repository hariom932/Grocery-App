import React from "react";

const Footer2 = () => {
  return (
    <>
     

      <div className="flex justify-around items-center bg-white py-4 px-2 shadow-md md:hidden" style={{position:'sticky',bottom:0}}>
        {/* Home Icon */}
        <ion-icon className="w-5 h-5 text-gray-800" name="home"></ion-icon>
        {/* Menu Icon */}
        <ion-icon className="w-6 h-6 text-gray-800" name="menu"></ion-icon>

        {/* Cart Icon with badge */}
        <div className="relative">
        <ion-icon className="w-6 h-6 text-gray-800" name="cart"></ion-icon>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            0
          </span>
        </div>

        {/* User Icon */}
        <ion-icon className="w-6 h-6 text-gray-800" name="person-circle"></ion-icon>
      </div>

    </>
  );
};

export default Footer2;
