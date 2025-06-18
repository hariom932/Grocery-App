import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyCart } from "../App";

const product = (props) => {
  // console.log(props.item);
  // console.log(props.index);

  // importing cart setcart from App.jsx using content api 
  const {cartItems,setCartItems}=useContext(MyCart)



  function cartHandler(index,item)
  {
    var temp=[...cartItems]
    temp.push(item);
    setCartItems(temp);
    // console.log(index,item)
  }

  return (
    <>
      <div className="flex justify-center w-full">
        <div className="w-[100%] bg-white border h-[430px] mt-5 border-gray-100 md:w-[250px]">
          {/* first text  */}
          <div className="flex justify-between text-[11px] text-green-500 px-6 pt-5">
            <p className="">17%</p>
            <span className="h-5 w-5 border border-green-400 rounded-xs flex justify-center items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full "></div>
            </span>
          </div>
          {/* first text end here  */}
          {/* image box  */}

            <div className="flex flex-col justify-between items-center">
              <div className="overflow-hidden">
                <div className="h-45 w-45 object-cover transition-all duration-500 transform opacity-100 hover:scale-110 ">
          <Link to="/detail" state={props}>
                  <img src={props.item.image} alt="" />
          </Link>


                </div>
              </div>
              <p className=" text-[#0CC5B7] font-bold">{props.item.name}</p>
              <span className="font-bold text-sm text-gray-400">
                In stock -<span className="font-medium">1 kg</span>
              </span>
              <span className="font-bold text-sm text-gray-400 mt-5">
                <span>
                  <del>$10.00 </del>
                </span>
                <span className="font-bold text-black">
                  $ {props.item.price}
                </span>
              </span>

              {/* ----------------quantity update button-----------s */}

              <div className="h-11 mt-4 w-25 bg-[#FFF1F0] rounded-full flex justify-around items-center text-gray-500 md:w-35">
                <button className="h-8 w-8 py-3 bg-white rounded-full flex justify-center items-center">
                  -
                </button>
                <p>1</p>
                <button className="h-8 w-8 py-3 bg-white rounded-full flex justify-center items-center">
                  +
                </button>
              </div>
              {/* ----------------quantity update button end here-----------s */}

              <button
                onClick={()=>cartHandler(props.index,props.item)}
               className="h-8 w-26 mt-3 text-xs bg-[#FF8650] rounded-full text-white flex justify-center items-center gap-1 font-bold">
                <ion-icon className="" name="cart-outline"></ion-icon>{" "}
                  Add to cart
              </button>
              {/* end  box */}
            </div>
        </div>
      </div>
    </>
  );
};

export default product;
