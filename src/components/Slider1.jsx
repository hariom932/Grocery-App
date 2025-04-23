import React from "react";

const Slider1 = () => {
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
      <div>
        <div className="relative">
          <div className="flex h-45 w-full space-x-4 px-4 py-6 justify-center items-center">
         
         
            {/* // left scroll icon  */}
            <button className="h-10 w-10 flex items-center justify-center text-white bg-[#0EC6B5] rounded-full hover:bg-black hover:transition-transform duration-300 hover:scale-110">
              <ion-icon name="chevron-back-outline"></ion-icon>
            </button>

            {/* // code for all images to get from array */}
            <div className=" flex items-center h-45 w-[74%] overflow-hidden">
              <div className="flex space-x-4 p-4 hide-scrollbar ">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center min-w-[100px] text-center"
                  >
                    {/* here, is our image url  */}
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-semibold text-gray-800 truncate w-full">
                      {item.name}
                    </div>{" "}
                    <div className="text-xs text-gray-600">
                      {item.items} Items
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* //right icon  */}
            <div>
              <button className="h-10 w-10 flex items-center justify-center text-white bg-[#0EC6B5] rounded-full hover:bg-black hover:transition-transform duration-300 hover:scale-110">
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider1;
