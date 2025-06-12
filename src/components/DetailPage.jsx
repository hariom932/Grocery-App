import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../header/Navbar";
import Menu from "./Menu";
import Footer1 from "../footer/Footer1";
import Footer2 from "../footer/Footer2";
import FooterLast from "../footer/FooterLast";
import Product from "./product";

const DetailPage = () => {
  const { state } = useLocation();
  const item = state?.item; //  this  is put  the useful data from item

  
  const images = [
    {
      name: "Organic Sweet Corn",
      inStock: true,
      price: 14.99,
      originalPrice: 19.99, //
      image:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/7-1-170x185.jpg",
    },
    {
      name: "Native Organic Papaya",
      inStock: true,
      price: 14.99,
      originalPrice: 19.99, //
      image:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/9-1-170x185.jpg",
    },
    {
      name: "Green Shadesless Grapes",
      inStock: true,
      price: 14.99,
      originalPrice: 19.99, //
      image:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/11-1-170x185.jpg",
    },
    {
      name: "Organic Grape Tomato",
      inStock: true,
      price: 7.99,
      originalPrice: 19.99, //
      image:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/12-1-170x185.jpg",
    },
    {
      name: "Organic Broccoli",
      inStock: true,
      price: 6.99,
      originalPrice: 19.99, //
      image:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/1-1-170x185.jpg",
    },
    {
      name: "Washed Sugar Snap Peas",
      inStock: true,
      price: 6.99,
      originalPrice: 19.99, //
      image:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/2-1-170x185.jpg",
    },
    {
      name: "Organic Strawberry",
      inStock: true,
      price: 12.79,
      originalPrice: 7.59, //
      image:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/4-1-170x185.jpg",
    },
    {
      name: "Organic Vegetable",
      inStock: true,
      price: 10.99,
      originalPrice: 5.0, //
      image:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/5-1-170x185.jpg",
    },
  ];

  return (
    <>
      <nav>
        <Navbar />
        <Menu />
        <div className="container">
          <div className="row w-full flex justify-center p-4 items-center">
            <div className="w-full xl:w-[75%] flex">
              <div>
                <span className="font-medium text-xs text-gray-500">
                  <ion-icon name="home"></ion-icon> Home
                </span>
                <span className="text-xs text-gray-500">
                  / Fruits and Vegetable{" "}
                </span>
                <span className="text-xs text-gray-500">
                  / Washed Sugar Snap Peas
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full justify-center items-center bg-[#edf7fb] pb-10">
        <div className="flex flex-col md:flex-row bg-[#edf7fb] p-6 rounded-xl gap-8 md:w-[75%] mx-auto">
          {/* Product Image */}
          <div className="flex-1 flex justify-center items-center bg-white rounded-xl p-6 ">
            <img
              src={item.image}
              alt="Washed Sugar Snap Peas"
              className="p-2 min-w-[98%] h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 bg-white rounded-xl p-6">
            <span className="bg-green-100 text-green-700 font-medium text-sm  px-2 py-1 rounded">
              20% OFF
            </span>
            <h2 className="text-2xl font-normal mt-4">{item?.name}</h2>
            <div className="flex items-center gap-4 mt-2 text-xl">
              <span className="line-through text-blue-400">
                £{item?.originalPrice}
              </span>
              <span className="text-green-600 text-3xl font-medium">
                £{item.price}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              {" "}
              {item?.inStock ? "In Stock" : "Out of Stock"}
            </p>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center text-xs mt-4 bg-gradient-to-r from-orange-400 to-[#FF6360] p-1 max-w-50">
              <input
                type="number"
                readOnly
                value="1"
                min="1"
                className="w-9 h-8 px-2 py-1 text-center bg-white"
              />
              <button className=" text-white px-6 py-2 rounded-md font-semibold hover:opacity-90">
                <ion-icon name="cart-outline"></ion-icon> ADD TO CART
              </button>
            </div>

            {/* Quick Overview */}
            <div className="mt-6 border border-gray-200 pt-5 pb-10 px-5 text-gray-500">
              <h3 className="text-xl font-semibold mb-2">Quick Overview</h3>
              <p className="text-[13px]">
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </strong>{" "}
                Nam fringilla augue nec est tristique auctor. Donec non est at
                libero vulputate rutrum.
              </p>
              <p className="text-[13px] mt-2">
                Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus
                malesuada tincidunt. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Integer
                enim purus, posuere at ultricies eu, placerat a felis.
                Suspendisse aliquet urna pretium eros convallis interdum.
              </p>
            </div>

            {/* SKU and Categories */}
            <div className="mt-4 text-sm text-gray-500">
              <span className="font-semibold text-[#FF6360]">SKU:</span> 6UKJ198{" "}
              <span className="font-semibold text-[#FF6360]">Categories:</span>{" "}
              Fruits & Vegetables, Grocery & Staples
            </div>
            <div className="text-[#666666] font-semibold mt-4">
              Why shop from Groci?
            </div>
            {/* -------groci icon-------  */}
            <div>
              <div className="flex flex-col gap-3 justify-between md:flex-row pt-2">
                {/* first icon  */}
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="h-15 w-15 bg-green-400 rounded-full border flex justify-center items-center border-[#24A3B5]">
                      <ion-icon
                        className="text-[#f7fbfc]"
                        name="pricetags"
                      ></ion-icon>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium text-[#24A3B5]">
                      Free Delivery
                    </h6>
                    <p className="text-gray-500 text-sm">
                      Lorem ipsum dolor si...
                    </p>
                  </div>
                </div>
                {/* second icon------  */}
                <div className="flex gap-2 items-center">
                  <div>
                    <div className="h-15 w-15 bg-green-400 rounded-full border flex justify-center items-center border-[#24A3B5]">
                      <ion-icon
                        className="text-[#f7fbfc]"
                        name="pricetags"
                      ></ion-icon>
                    </div>
                  </div>
                  <div>
                    <h6 className="font-medium text-[#24A3B5]">
                      Free Delivery
                    </h6>
                    <p className="text-gray-500 text-sm">
                      Lorem ipsum dolor si...
                    </p>
                  </div>
                </div>
                {/* second icon--end here----  */}
              </div>
            </div>
            {/* -------groci icon-------  */}
          </div>
        </div>

        <section>
          <div className="w-full mx-auto flex justify-center items-center ">
            {/* Tab Buttons */}
            <div className="w-[90%] md:w-[72%]">
              <div className="flex flex-wrap space-x-1 space-y-1">
                <button className="bg-gradient-to-r from-orange-400 to-[#FF6360] text-white text-sm max-h-9 py-2 px-2">
                  Description
                </button>
                <button className="bg-black text-white text-xs max-h-9 px-2 py-2">
                  Additional information
                </button>
                <button className="bg-black text-white text-xs max-h-9 px-2 py-2">
                  Review (0)
                </button>
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-b-md shadow-md p-6">
                <h2 className="text-2xl  mb-4">Description</h2>
                <p className=" text-sm text-gray-500 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  fringilla augue nec est tristique auctor. Donec non est at
                  libero vulputate rutrum.
                </p>
                <p className="text-sm text-gray-500">
                  Vivamus adipiscing nisl ut dolor dignissim semper. Nulla
                  luctus malesuada tincidunt. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos hiMenaeos.
                  Integer enim purus, posuere at ultricies eu, placerat a felis.
                  Suspendisse aliquet urna pretium eros convallis interdum.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* realated product call section */}
        <div className="">
          <div className="w-full flex justify-center items-center pt-4 rounded-2xl overflow-hidden">
            <div className="w-[90%] md:w-[72%] bg-white rounded-2xl ">
              <div className="text-2xl px-6 pt-8">Related Products</div>
              {/* Related product  */}
              <div className="flex justify-center items-center w-full overflow-x-auto hide-scrollbar">
                <div className="w-[95%] overflow-hidden container mx-auto flex hide-scrollbar  gap-1 overflow-x-auto hide-scrollbar ">
                  {images.map((item, ind) => (
                    <Product key={ind} item={item} />
                  ))}
                </div>
              </div>
              {/* Related product end here */}
            </div>
          </div>
        </div>
        {/* realated product call section end here */}
      </div>
      <Footer1 />
      <Footer2 />
      <FooterLast />
    </>
  );
};

export default DetailPage;
