import React, { use, useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Home from "../components/Home";
import About from "../mainPages/About";
import Shop from "../mainPages/Shop";
import Contact from "../mainPages/Contact";
import { MyCart } from "../App";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [totalprice,setTotalprice]=useState(0)

  const [cartNumber, setCartNumber] = useState(0);
  useEffect(()=>
  {
     setCartNumber(cartItems.length);
  })

  const cartHandler = () => {
    setIsCartOpen(!isCartOpen);
  };
const {cartItems,setCartItems}=useContext(MyCart)

  useEffect(() => {

  cartItems.map((item,index)=>console.log(item))

  if (isCartOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isCartOpen]);

//  function priceHandler()
//     {   
//         const t=0
     
//         cartItems.forEach((item)=>
//         {
           
//             t=t+item.price
//         }) 
//         setTotalprice(t)
//         console.log("total price",totalprice)
//     }

//     useEffect(()=>{
//         priceHandler()
//     },[cartItems])

function removeHandler(index)
{
  const temp = [...cartItems]
  temp.splice(index,1)
  setCartItems(temp)
  // console.log("Removed...")
}

  return (
    <>
      <nav>
        {/* Backdrop Overlay */}
        {isCartOpen && (
          <div
            onClick={cartHandler}
            className="fixed inset-0 bg-black/60  z-10 transition-opacity duration-300"
          ></div>
        )}

        {/* Slide-in Cart */}
        <div
          id="cart"
          className={`container bg-[#EFF7FA] w-[25%] h-full fixed top-0 right-0 z-20 transform transition-transform duration-500 ease-in-out ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-15 bg-black flex justify-between items-center px-5 text-white font-medium">
            <div>My Cart ({cartNumber} items)</div>
              <div onClick={cartHandler}>
                <ion-icon className="h-9 w-9 cursor-pointer" name="close-circle"></ion-icon>
              </div>
          </div>
          
     {/* // CartItem display container start here  */}
     <div className="w-full flex flex-col items-center justify-center mt-4">
        {cartItems.length === 0 ? (
          <p className="text-black">Cart is empty.</p>
        ) : (
          <div className="flex flex-col space-y-3.5 max-h-[500px] overflow-y-auto w-full px-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-white rounded-sm shadow-md w-85 space-x-4"
              >
                {/* Image container */}
                <div className="w-20 h-20 rounded overflow-hidden border border-gray-200">
                  <img
                    src={item.image}
                    alt="cart image"
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Details box */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <span className="text-[11px] px-2 py-0.5 rounded bg-green-50 text-green-600 font-semibold">
                      59 % OFF
                    </span>

                    <button
                      onClick={() => removeHandler(index)}
                      className="text-gray-400 cursor-pointer text-[12px]"
                    >
                      ✕
                    </button>
                  </div>

                  <h3 className="text-[#1abc9c] font-medium text-sm mt-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-black">- 1 kg</p>
                  <p className="text-sm font-bold mt-1">
                    1 × <span className="text-black">£{item.price}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

        <div className="absolute bottom-0 w-full flex items-center justify-center bg-white">
          <div className="w-85">
          <div className="flex justify-between text-sm text-gray-500 font-semibold mt-2 mb-4 px-1">
            <span>Subtotal</span>
            <span className="text-black">£56.96</span>
          </div>

          <div className="flex flex-col space-y-3">
            <button className="w-full py-3 rounded-xs bg-gradient-to-r from-[#f17557] to-[#f14114] text-white font-medium text-sm cursor-pointer">
              View cart
            </button>
            <button className="w-full py-3 mb-2 rounded-xs bg-gradient-to-r from-[#f17557] to-[#f14114] text-white font-medium text-sm cursor-pointer">
              Checkout
            </button>
          </div>
         </div>
        </div>

        {/* // CartItem display container end here */}
    
    
     </div>


        {/* Navbar Top */}
        <div className="w-full">
          <div className="flex flex-col items-center text-white bg-gradient-to-r from-[#040404] to-[#21262A] w-full py-4 text-[12px] md:flex-row justify-between px-4 md:py-3 2xl:px-50">
            <div className="text-sm flex gap-1 text-[12px] py-2 2xl:py-0">
              20% Cashback for all users | Code:{" "}
              <strong className="flex items-center pt-0.1">
                OGOFERS13
                <span>
                  <ion-icon name="happy-outline"></ion-icon>
                </span>
              </strong>
            </div>
            <div>
              <ul className="flex gap-6">
                <li className="relative">
                  <div className="flex items-center gap-1 hover:cursor-pointer">
                    <ion-icon name="location-outline"></ion-icon>
                     {/* <label for="location">Your Location</label> */}
                      <select name="location" id="location">
                        <option value="" className="text-black">Your location</option>
                        <option value="delhi" className="text-black">Delhi</option>
                        <option value="indore" className="text-black">Indore</option>
                        <option value="bhopal" className="text-black">Bhopal</option>
                        <option value="ujjain" className="text-black">Ujjain</option>
                        <option value="khajuraho"className="text-black">Khajuraho</option>
                        <option value="gwalior" className="text-black">Gwalior</option>
                        <option value="jabalpur" className="text-black">Jabalpur</option>
                        <option value="pachmarhi" className="text-black">Pachmarhi</option>
                        <option value="sanchi" className="text-black">Sanchi</option>
                        <option value="orchha" className="text-black">Orchha</option>
                        <option value="chanderi" className="text-black">Chanderi</option>
                        <option value="mandu" className="text-black">Mandu</option>
                        <option value="omkareshwar" className="text-black">Omkareshwar</option>
                      </select>

                  </div>
                </li>
                <li className="flex items-center gap-1 hover:cursor-pointer">
                  <ion-icon name="lock-closed"></ion-icon>
                  <Link to="/login">Sign In</Link>
                </li>
                <li className="flex items-center gap-1 hover:cursor-pointer">
                  <ion-icon name="person-circle-outline"></ion-icon>
                  <Link to="/login">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo, Search, Cart */}
        <div className="container max-w-full">
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
                <div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-11 w-11 mt-5 mr-5 bg-white rounded-xs p-1 lg:hidden"
                  >
                    <ion-icon className="text-4xl text-gray-400" name="menu-outline"></ion-icon>
                  </button>
                </div>

                {/* Cart Icon */}
                <div
                  onClick={cartHandler}
                  className="hidden lg:flex gap-3 items-center cursor-pointer"
                >
                  <div className="relative">
                    <div className="h-11 w-11 bg-white rounded-full p-2 overflow-hidden">
                      <ion-icon className="h-4 w-6 text-gray-700" name="cart"></ion-icon>
                    </div>
                    <span className="absolute bottom-3 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartNumber}
                    </span>
                  </div>
                  <div className="hidden font-medium text-white text-sm xl:block">
                    My cart
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out md:flex md:space-x-6 mt-0 ${
                isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <ul className="space-y-7 md:flex md:space-y-0 px-5 md:space-x-6 text-gray-500 font-normal">
                <li className="cursor-pointer">
                  <NavLink to="/" element={<Home />}>Home ▾</NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink to="/about" element={<About />}>About Us</NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink to="/shop" element={<Shop />}>Fruits and Vegetables</NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink to="/shop" element={<Shop />}>Shop ▾</NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink to="/shop" element={<Shop />}>Blog ▾
                  
                  </NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink to="/#" element={<About />}>FAQ</NavLink>
                </li>
                <li className="cursor-pointer">
                  <NavLink to="/contact" element={<Contact />}>Contact Us</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
