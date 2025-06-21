import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Slider1 = () =>
  {
  function Arrow(props) {
    const { className, style, onClick } = props;
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
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      }
    ],
  };
  const items = [
    {
      name: "Peace",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/2-1-170x185.jpg",
    },
    {
      name: "Beverages",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/3-3-62x62.jpg",
    },
    {
      name: "Biscuits,Snacks",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/9-2-62x62.jpg",
    },
    {
      name: "Breakfast & Dairy",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/8-2-62x62.jpg",
    },
    {
      name: "Fruits & Vegata..",
      items: 12,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/2-1-170x185.jpg",
    },
    {
      name: "Furnishing & Ho",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/5-2-62x62.jpg",
    },
    {
      name: "Grocery & Staples",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/2-4-62x62.jpg",
    },
    {
      name: "Home & Kitchen",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/4-2-62x62.jpg",
    },
    {
      name: "Household needs",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/6-2-62x62.jpg",
    },
    {
      name: "Meats,Frozen & ...",
      items: 2,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/12-2-62x62.jpg",
    },
    {
      name: "Noodles, Sauces...",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/10-2-62x62.jpg",
    },
    {
      name: "Personal care",
      items: 1,
      imageUrl:
        "https://klbtheme.com/groci/wp-content/uploads/2018/08/7-2-62x62.jpg",
    },
  ];

  return (
    <>
      <div className="my-10">
        <div className="w-full flex justify-center items-center">
          <div className="slider-container w-[74%]">
            <Slider {...settings}>
              {items.map((item, ind) => (
                <div className="">
                  <div className="flex justify-center items-center flex-col gap-2">
                    <div className="h-20 w-20 items-center">
                      <div className="border border-gray-100 rounded-full overflow-hidden flex justify-center shadow-sm">
                      <img className="w-16 h-18" src={item.imageUrl} alt="" />
                      </div>
                    </div>
                    <div className="text-sm font-semibold text-gray-800 truncate w-full text-center">
                      {item.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {item.items} Items
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider1;
