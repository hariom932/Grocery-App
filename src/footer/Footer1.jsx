import React from "react";

const Footer1 = () => {
  return (
    <>
      <div>
        {/* table of last text  */}
        <div>
          <footer className="bg-white px-4 py-8">
            <div className="w-full">
              <div className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-x-8 text-[13px] text-gray-500 lg:w-[75%]">
                {/* logo icon  */}
                <div
                  children
                  className="w-[95%] container grid grid-cols-2 md:grid-cols-4"
                >
                  <div className="container">
                    {/* grocery text and img  */}
                    <div className="min-w-40">
                      <img
                        className="h-10 w-32"
                        src="https://klbtheme.com/groci/wp-content/uploads/2018/08/logo-footer-1.png"
                        alt=""
                      />
                    </div>
                    <div className="mt-13 leading-6">
                      <p className="min-w-30">+91 9770315498</p>
                      <p className="min-w-35">1234 1234 5678 5678</p>
                      <p className="text-green-500">hariom@gmail.com</p>
                      <p className="text-blue-700">linkedin/hariom932</p>
                    </div>
                    {/* grocery text and img end here */}
                  </div>
                </div>
                {/* Top Cities */}
                <div>
                  <h2 className="font-semibold text-[16px] text-black mt-4 sm:mt-0">
                    TOP CITIES
                  </h2>
                  <ul className="mt-5 space-y-2">
                    <li>New Delhi</li>
                    <li>Bengaluru</li>
                    <li>Hyderabad</li>
                    <li>Kolkata</li>
                    <li>Gurugram</li>
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h2 className="font-semibold text-[16px] text-black mb-2">
                    CATEGORIES
                  </h2>
                  <ul className="space-y-1 mt-6">
                    <li>Vegetables</li>
                    <li>Grocery & Staples</li>
                    <li>Breakfast & Dairy</li>
                    <li>Soft Drinks</li>
                    <li>Biscuits & Cookies</li>
                  </ul>
                </div>

                {/* About Us */}
                <div>
                  <h2 className="font-semibold text-[16px] text-black mb-2">
                    ABOUT US
                  </h2>
                  <ul className="space-y-1">
                    <li>Company</li>
                    <li>Information</li>
                    <li>Careers</li>
                    <li>Store Location</li>
                    <li>Affiliate Program</li>
                    <li>Copyright</li>
                  </ul>
                </div>
                {/* logo of playstore*/}
                <div>
                  <h2 className="font-semibold text-[16px] text-black mb-2">
                    Download App
                  </h2>
                  <div className="max-w-40 flex gap-2 flex-col lg:flex-row sm:justify-between">
                    <img
                      className="w-23 h-8"
                      src="https://klbtheme.com/groci/wp-content/uploads/2018/08/google.png"
                      alt=""
                    />
                    <img
                      className="w-26 h-8"
                      src="https://klbtheme.com/groci/wp-content/uploads/2018/08/apple.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>

        {/* table of last text end here*/}
      </div>
    </>
  );
};

export default Footer1;
