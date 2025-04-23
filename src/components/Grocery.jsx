import React from "react";
import Product from "./product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Grocery = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

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
      <div className="mt-15 pb-9 pt-12 bg-[#EFF7FA] ">
        {/* -------------text-------------- */}
        <div className="w-full flex justify-center">
          <div className="w-[72%] flex justify-between ">
            <p className="text-[17px]">
              Top Savers Today
              <span className="text-white text-[13px] rounded-xs ml-1 px-1.5 bg-[#007BFF]">
                20% OFF
              </span>
            </p>
            <p className="text-sm  font-medium text-[#0CC5B7]">View All</p>
          </div>
        </div>
        {/* ---------------end text here------------ */}
        <div className="flex justify-center items-center w-full overflow-x-auto hide-scrollbar">
          <div className="w-[75%] container mx-auto grid grid-cols-1 md:grid-cols-4  gap-1 overflow-x-auto hide-scrollbar ">
            {images.map((item, ind) => (
              <Product key={ind} item={item} />
            ))}
          </div>
        </div>
        {/* 2 Backgrownd image  */}
        <div className="w-full mt-10 justify-center flex items-center md:flex-row">
          <div className=" w-[80%] flex flex-col justify-center items-center md:flex-row">
            <div className="object-cover">
              <img
                src="https://klbtheme.com/groci/wp-content/uploads/2018/08/1-2.jpg"
                alt=""
              />
            </div>
            <div className="object-cover">
              <img
                src="https://klbtheme.com/groci/wp-content/uploads/2018/08/2-2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* 2 Backgrownd end here image  */}

        {/* second text (Best view)  */}
        <div className="mt-10">
          <div className="w-full flex justify-center">
            <div className="w-[72%] flex justify-between ">
              <p className="text-[17px] font-medium">
                Top Savers Today
                <span className="text-white text-[13px] rounded-xs ml-1 px-1.5 py-0.7 bg-[#007BFF]">
                  20% OFF
                </span>
              </p>
              <p className="text-sm  font-medium text-[#0CC5B7]">View All</p>
            </div>
          </div>
          {/* second text end here (Best view)  */}
        </div>

        {/* second slider down of best view  */}
        <div className="flex justify-center items-center w-full relative">
          <div className="w-[73%] container mx-auto flex overflow-x-auto hide-scrollbar gap-2">
            {images.map((item, ind) => (
              <Product key={ind} item={item} />
            ))}
          </div>
          {/* icon div start here  */}
          <div className="w-[78%] p-5 absolute flex justify-between">
            {/* // left scroll icon  */}
            <button className="h-10 w-10  text-white bg-[#0EC6B5] rounded-full hover:bg-black hover:transition-transform duration-300 hover:scale-110">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            {/* //right icon  */}
            <button className="h-10 w-10  text-white bg-[#0EC6B5] rounded-full hover:bg-black hover:transition-transform duration-300 hover:scale-110">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
          {/* Ends icons div  */}
        </div>
        {/* second slider down of best view end here */}
      </div>
        {/* -------3 icons  */}
        <div className="pb-9 border-b border-b-gray-200">
        <div className="w-full flex justify-center items-center">
          <div className="mt-10 w-[85%] grid gap-2 md:grid-cols-3 lg:w-[75%]">
            <div className="flex gap-3 items-center object-fill ">
              <div>
                <div className="h-16 w-16 rounded-full border flex justify-center items-center border-[#24A3B5]">
                  <ion-icon
                    className="text-[#24A3B5]"
                    name="pricetags"
                  ></ion-icon>
                </div>
              </div>
              <div>
                <h6 className="font-medium text-[#24A3B5]">
                  Free and Next Day Delivery
                </h6>
                <p className="text-gray-00">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            {/* second icon  */}
            <div className="flex gap-3 items-center">
            <div>
                <div className="h-16 w-16 rounded-full border flex justify-center items-center border-[#24A3B5]">
                  <ion-icon
                    className="text-[#24A3B5]"
                    name="pricetags"
                  ></ion-icon>
                </div>
              </div>
              <div>
                <h6 className="font-medium text-[#24A3B5]">
                  Free and Next Day Delivery
                </h6>
                <p className="text-gray-00">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            {/* third icon  */}
            <div className="flex gap-3 items-center">
            <div>
                <div className="h-16 w-16 rounded-full border flex justify-center items-center border-[#24A3B5]">
                  <ion-icon
                    className="text-[#24A3B5]"
                    name="pricetags"
                  ></ion-icon>
                </div>
              </div>
              <div>
                <h6 className="font-medium text-[#24A3B5]">
                  Free and Next Day Delivery
                </h6>
                <p className="text-gray-00">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          </div>
          {/* -------3 icons end here */}
        </div>
    </>
  );
};

export default Grocery;
