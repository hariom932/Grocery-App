import React, { useState } from "react";

const Slider2 = () => {
  const images=["https://klbtheme.com/groci/wp-content/uploads/2018/08/slider2.jpg",
                "https://klbtheme.com/groci/wp-content/uploads/2018/08/slider1.jpg"
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval= setInterval(() => {
    setCurrentIndex(currentIndex+1)
    if(currentIndex==1)
    {
      setCurrentIndex(0)
    }
  }, 3000);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  
  return (
    <>
      <div className="w-full">
        <div className="relative w-full flex items-center justify-center">
          {/* Here is our slider images code  */}

          <div className="w-full xl:w-[78%]">
            <a className="w-full" href="#">
                <img className="w-full xl:h-[400px]"   src={images[currentIndex]} alt="" />
                
            </a>
          </div>
        {/* icon div start here  */}
          <div className="w-full p-5 absolute flex justify-between">
            {/* // left scroll icon  */}
            <button onClick={prev} className="h-10 w-10  text-white bg-[#0EC6B5] rounded-full hover:bg-black hover:transition-transform duration-300 hover:scale-110">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            {/* //right icon  */}
            <button onClick={next} className="h-10 w-10  text-white bg-[#0EC6B5] rounded-full hover:bg-black hover:transition-transform duration-300 hover:scale-110">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </button>
          </div>
          {/* Ends icons div  */}

        </div>
      </div>
    </>
  );
};

export default Slider2;
