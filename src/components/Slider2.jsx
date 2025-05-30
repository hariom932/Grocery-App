import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Arrow = (props) => {
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
      marginLeft:"30px",
      marginRight:"30px",
    }}
      onClick={onClick}
    />
  );
};

const Slider2 = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };

  const images = [
    "https://klbtheme.com/groci/wp-content/uploads/2018/08/slider2.jpg",
    "https://klbtheme.com/groci/wp-content/uploads/2018/08/slider1.jpg",
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="w-[98%] object-contain overflow-hidden">
        <Slider {...settings}>
          {images.map((item, ind) => (
            <div key={ind} className="w-[100%]">
              <div className="w-[100%] flex justify-center items-center">
                <div className="w-[80%]">
                  <img
                    className="w-[100%] max-h-[400px]"
                    src={item}
                    alt={`Slide ${ind + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slider2;
