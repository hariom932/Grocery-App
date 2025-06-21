import React, { useContext, useEffect, useState } from "react";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { MyCart } from "../App";

const Arrow = (props) => {
  const { className, style, onClick } = props;

  const {cartItems,setCartItems}=useContext(MyCart)
  
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        paddingTop: "10px",
        background: "#0EC6B5",
        borderRadius: "100%",
        height: "40px",
        width: "40px",
        textAlign: "center",
        zIndex: "1",
        marginLeft: "5px",
        marginRight: "5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
};

const Grocery = () => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1524,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
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

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  // -----------------Home API  start here--------------------
  useEffect(() => {
    const homeApi = async () => {
      try {
        const response = await axios.get(import.meta.env.VITE_HOME_URL);
        console.log(response.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    homeApi();
  }, []);

  // This is i am displaying in console you can use from the product whenever you want
  useEffect(() => {
    if (products?.recentProduct) {
      console.log(
        "this is postman products Use these product to the place of images array to display it "
      );
      products.recentProduct.map((item) => console.log(item));
    }
  }, [products]);

  // --------------------------Home API End here ------------------
  // --------------------------Category API Start here ------------------
  useEffect(() => {

    const categoryApi = async () => {
      try {
        const responseData = await axios.get(import.meta.env.VITE_CATEGORY_URL);
        console.log("This is our category which is getting from postman api")
        console.log(responseData.data);
        setCategory(responseData.data.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };
    categoryApi();
  }, []);
  // --------------------------Category API End here --------------------


  function addToCart(item,index)
  {
    // var temp=[...cartItems]
    // temp.push(item)
    // setCartItems(temp)
    console.log("grocery cart",index)
  }
  useEffect(()=>
  {
    addToCart()
  },[])

  return (
    <>
      <div className="pb-9 pt-12 bg-[#EFF7FA] ">
        {/* -------------text-------------- */}
        <div className="w-full flex justify-center">
          <div className="w-[72%] flex justify-between word-spacing-wide">
            <p className="text-[17px] font-medium">
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
          <div className="w-[75%] container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-1 overflow-x-auto hide-scrollbar ">
            {images.map((item, ind) => (
              <Product key={ind} index={ind} item={item} />
            ))}
          </div>
        </div>
        {/* 2 Backgrownd image  */}
        <div className="w-full mt-8 justify-center flex items-center md:flex-row">
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
            <div className="w-[73%] flex justify-between ">
              <p className="text-[17px] font-medium">
                Best Offers View
                <span className="text-white text-[13px] rounded-xs ml-1 px-1.5 py-0.7 bg-[#007BFF]">
                  20% OFF
                </span>
              </p>
              <p className="text-sm  font-medium text-[#0CC5B7]">View All</p>
            </div>
          </div>
          {/* second text end here (Best view)  */}
        </div>

        {/* Second slider down of best view  */}
    <div className="w-full content-fit flex justify-center">
        <div className=" container mt-5 bg-amber-500 w-[73%] flex justify-center items-center">
          <div className="container w-full">
            <Slider {...settings}>
              {images.map((item, index) => (
                <div className="container h-[400px] flex gap-2 border border-gray-200 bg-white">
                  <div className="flex justify-between text-[11px] text-green-500 px-6 pt-5 z-10">
                    <p className="">17%</p>
                    <span className="h-5 w-5 border border-green-400 rounded-xs flex justify-center items-center">
                      <div className="h-2 w-2 bg-green-500 rounded-full "></div>
                    </span>
                  </div>
                  <div className="h-[100%] p-2 flex justify-center items-center flex-col">
                    <div className="overflow-hidden h-40 object-cover -mt-12">
                      <img
                        className="h-45 w-45 -mt-6 transition-all duration-500 transform opacity-100 hover:scale-110 "
                        src={item.image}
                        alt=""
                      />
                    </div>
                    <p className=" text-[#0CC5B7] font-bold">{item.name}</p>
                    <div className="font-bold text-sm text-gray-400">
                      In stock -<span className="font-medium">1 kg</span>
                    </div>
                    <span className="font-bold text-sm text-gray-400 mt-5">
                      <span>
                        <del>$10.00 </del>
                      </span>
                      <span className="font-bold text-black">
                        $ {item.price}
                      </span>
                    </span>

                    {/* ----------------quantity update button-----------s */}

                    <div className="h-11 mt-4 w-25 bg-[#FFF1F0] rounded-full flex justify-around items-center text-gray-500 md:w-35">
                      <button className="h-8 w-8 py-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                        -
                      </button>
                      <p>1</p>
                      <button className="h-8 w-8 py-3 bg-white rounded-full flex justify-center items-center cursor-pointer">
                        +
                      </button>
                    </div>
                    {/* ----------------quantity update button end here-----------s */}

                    {/* ---------add to cart btn-----  */}
                    <button
                     onClick={()=>addToCart(item,index)}
                     className="h-8 w-26 mt-3 text-xs bg-[#FF8650] rounded-full text-white flex justify-center items-center gap-1 font-bold cursor-pointer">
                      <ion-icon className="" name="cart-outline"></ion-icon>{" "}
                         Add to cart
                    </button>
                    {/* ---------add to cart btn end here-----  */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Second slider down of best view end here */}
      </div>
      </div>

      {/* -------3 icons  */}

      <div className="pb-9 border-b border-b-gray-200">
        <div className="w-full flex justify-center items-center">
          <div className="mt-10 w-[85%] grid gap-2 md:grid-cols-3 lg:w-[75%]">
            <div className="flex gap-3 items-center object-fill ">
              <div>
                <div className="h-16 w-16 rounded-full border flex justify-center items-center border-[#24A3B5]">
                  <ion-icon
                    className="text-[#24A3B5] text-2xl"
                    name="pricetags"
                  ></ion-icon>
                </div>
              </div>
              <div>
                <h6 className="font-medium text-[#24A3B5]">
                  Free and Next Day Delivery
                </h6>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>

            {/* second icon  */}
            <div className="flex gap-3 items-center">
              <div>
                <div className="h-16 w-16 rounded-full border flex justify-center items-center border-[#24A3B5]">
                  <ion-icon
                    className="text-[#24A3B5] text-2xl"
                    name="basket"
                  ></ion-icon>
                </div>
              </div>
              <div>
                <h6 className="font-medium text-[#24A3B5]">
                100% Satisfaction Guarantee
                </h6>
                <p className="text-gray-400">
                100% Satisfaction Guarantee
                et, cons...
                </p>
              </div>
            </div>

            {/* third icon  */}
            <div className="flex gap-3 items-center">
              <div>
                <div className="h-16 w-16 rounded-full border flex justify-center items-center border-[#24A3B5]">
                  <ion-icon
                    className="text-[#24A3B5] text-2xl"
                    name="pricetags"
                  ></ion-icon>
                </div>
              </div>
              <div>
                <h6 className="font-medium text-[#24A3B5]">
                Great Daily Deals Discount
                </h6>
                <p className="text-gray-400">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* -------3 icons end here */}
      </div>
      {/* last 3 icon end here  */}
    </>
  );
};

export default Grocery;
