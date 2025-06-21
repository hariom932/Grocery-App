import React from "react";
import Navbar from "../header/Navbar";
import Menu from "../components/Menu";
import Footer1 from "../footer/Footer1";
import Footer2 from "../footer/Footer2";
import FooterLast from "../footer/FooterLast";

const Faqs = () => {
  return (
    <>
      <Navbar />
      <Menu />

      {/* ---------Faqs ------------- */}
      <div>
        <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#0FC7B4] to-[#28D695]">
          <div className="container w-full h-40  flex justify-center items-center text-white">
            <div className="flex justify-center items-center flex-col leading-13">
              <div className="font-medium text-4xl">FAQS</div>
              <div>
                <span className="text-[12px]">Home / FAQS</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-gray-100 py-10 flex justify-center items-center">
            <div class="grid md:grid-cols-2 gap-8 bg-white rounded shadow max-w-4xl w-full">
              <div>
                <div className="bg-white border mt-8 ml-5 border-gray-200 shadow-sm">
                  <div class="flex items-center justify-between p-4 bg-gray-100 cursor-pointer">
                    <div class="flex items-center space-x-2 font-semibold text-gray-800">
                      <div class="text-xl">−</div>
                      <div>Where can I get access to Capital IQ?</div>
                    </div>
                  </div>
                  <div class="p-4 text-sm text-gray-400">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil helvetica, craf.
                  </div>
                </div>
                <div className="ml-4">
                  <div class="flex items-center justify-between p-4 bg-gray-100 cursor-pointer">
                    <div class="flex items-center space-x-2 font-semibold text-gray-800">
                      <div class="text-xl text-gray-500">+</div>
                      <div className="text-gray-500">How do I get access to case studies?</div>
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <div class="flex items-center justify-between p-4 bg-gray-100 cursor-pointer">
                    <div class="flex items-center space-x-2 font-semibold text-gray-800">
                      <div class="text-xl text-gray-500">+</div>
                      <div className="text-gray-500">How much should I capitalize?</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-8 px-5 md:px-0">
                <div class="text-xl font-semibold text-gray-800">
                  Ask us a question
                </div>
                <div class="grid grid-cols-2 gap-4 mt-3">
                  <div class="border px-4 py-2 rounded text-sm text-gray-300">
                    Your Name *
                  </div>
                  <div class="border px-4 py-2 rounded text-sm text-gray-300">
                    Your Email *
                  </div>
                </div>
                <div class="border px-4 py-2 mt-2 rounded text-sm text-gray-300">
                  Subject
                </div>
                <div class="border px-4 py-10 mt-2 rounded text-sm text-gray-300">
                  Your Message
                </div>
                <div class="bg-gradient-to-r from-[#0FC7B4] to-[#28D695] mt-8 text-white text-xs px-4 py-2 w-max rounded-xs cursor-pointer">
                  Send Message
                </div>
              </div>
            </div>
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
                    100% Satisfaction Guarantee et, cons...
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
      </div>

      <Footer1 />
      <Footer2 />
      <FooterLast />
    </>
  );
};

export default Faqs;
