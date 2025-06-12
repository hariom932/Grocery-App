import React from "react";
import Navbar from "../header/Navbar";
import Menu from "../components/Menu";
import FooterLast from "../footer/FooterLast";
import Footer2 from "../footer/Footer2";
import Footer1 from "../footer/Footer1";

const About = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <div>
        {/* ---------About Us------------- */}
        <div>
          <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#0FC7B4] to-[#28D695]">
            <div className="container w-full h-40  flex justify-center items-center text-white">
              <div className="flex justify-center items-center flex-col leading-13">
                <div className="font-medium text-4xl">About</div>
                <div>
                  <span className="text-[12px]">Home / About Us</span>
                </div>
              </div>
            </div>
          </div>

          {/* -----content start here======== */}

          <div className="w-full bg-white flex justify-center pt-12">
            <div className="w-[74%] flex max-w-6xl bg-white">
              {/* image Section */}
              <div className="w-[90%] overflow-hidden mt-0">
                <div className="overflow-hidden w-[100%] h-[100%]">
                  <img
                    className="w-[100%] h-[100%] "
                    src="https://klbtheme.com/groci/wp-content/uploads/2018/08/about.jpg"
                    alt=""
                  />
                </div>
              </div>
              {/*--------------- content Section box---------------*/}

              <div className="flex justify-center">
                <div className="w-[73%] mt-12 flex">
                  <div className="w-[90%]">
                    <h1 className="text-3xl text-orange-500 font-sans font-medium">
                      Save more with GO! We give you the lowest prices on all
                      your grocery needs.
                    </h1>
                    <div className="mt-10">
                      <div>
                        <p className="font-medium text-lg text-gray-700">
                          Our Vision
                        </p>
                        <p className="text-gray-600 mt-2 text-sm">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here,
                        </p>
                      </div>
                    </div>
                    <div className="mt-10">
                      <div>
                        <p className="font-medium text-lg text-gray-700">
                          Our Goal
                        </p>
                        <p className="text-gray-600 mt-2 text-sm">
                          When looking at its layout. The point of using Lorem
                          Ipsum is that it has a more-or-less normal
                          distribution of letters, as opposed to using 'Content
                          here, Lorem Ipsum has been the industry's standard
                          dummy text ever since.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* -----------------content Section Box end here------------ */}
            </div>
          </div>
          {/* -----content end here======== */}
        </div>

        <div className="bg-blue-100 w-full">
          <div className="w-full flex justify-center pt-6">
            <div className="flex justify-center items-center">
              <div className="w-[80%] text-center">
                <h1 className="text-4xl">What we Provide</h1>
                <p className="text-gray-500 pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                {/* ------- Grid content here------- */}
                <div>
                  <div className="py-12 px-4 md:px-16">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                      {/* Box 1 */}
                      <div className="flex flex-col gap-4 items-start">
                        <div className="text-green-400 text-5xl">
                          <ion-icon name="bag-handle"></ion-icon>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-start text-[#00c4b4]">
                            Best Prices & Offers
                          </h3>
                          <p className="text-sm text-start pt-3 text-gray-500">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour.
                          </p>
                        </div>
                      </div>

                      {/* Box 2 */}
                      <div className="flex flex-col gap-4 items-start">
                        <div className="text-green-400 text-5xl">
                          <ion-icon name="logo-dribbble"></ion-icon>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-start text-[#00c4b4]">
                            Wide Assortment
                          </h3>
                          <p className="text-sm text-start pt-3 text-gray-500">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text eve.
                          </p>
                        </div>
                      </div>

                      {/* Box 3 */}
                      <div className="flex flex-col gap-4 items-start">
                        <div className="text-green-400 text-5xl">
                          <ion-icon name="refresh"></ion-icon>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-start text-[#00c4b4]">
                            Easy Returns
                          </h3>
                          <p className="text-sm text-start pt-3 text-gray-500">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using.
                          </p>
                        </div>
                      </div>

                      {/* Box 4 */}
                      <div className="flex flex-col gap-4 items-start">
                        <div className="text-green-400 text-5xl">
                          <ion-icon name="car"></ion-icon>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-start text-[#00c4b4]">
                            Free & Next Day Delivery
                          </h3>
                          <p className="text-sm text-start pt-3 text-gray-500">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using.
                          </p>
                        </div>
                      </div>

                      {/* Box 5 */}
                      <div className="flex flex-col gap-4 items-start">
                        <div className="text-green-400 text-5xl">
                          <ion-icon name="basket"></ion-icon>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-start text-[#00c4b4]">
                            100% Satisfaction Guarantee
                          </h3>
                          <p className="text-sm text-start pt-3 text-gray-500">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour.
                          </p>
                        </div>
                      </div>

                      {/* Box 6 */}
                      <div className="flex flex-col gap-4 items-start">
                        <div className="text-green-400 text-5xl">
                          <ion-icon name="pricetag"></ion-icon>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-start text-[#00c4b4]">
                            Great Daily Deals Discount
                          </h3>
                          <p className="text-sm text-start pt-3 text-gray-500">
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* ------- Grid content end here------- */}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white w-full">
          <div className="w-full flex justify-center pt-8">
            <div className="flex justify-center items-center">
              <div className="w-[80%] text-center">
                <h1 className="text-4xl">Our Team</h1>
                <p className="text-gray-500 pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                {/* ------------Our Team Start here--------- */}
                {/* ------------Our Team End here--------- */}
              </div>
            </div>
          </div>
        </div>

        {/* ---------About Us end here------------- */}
      </div>
      <Footer1 />
      <Footer2 />
      <FooterLast />
    </>
  );
};

export default About;
