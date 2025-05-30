import React from "react";
import Navbar from "../../components/Navbar";
import Menu from "../../components/Menu";
import Footer1 from "../../components/Footer1";
import Footer2 from "../../components/Footer2";
import FooterLast from "../../components/FooterLast";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <div>
        <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#0FC7B4] to-[#28D695]">
          <div className="container w-full h-40  flex justify-center items-center text-white">
            <div className="flex justify-center items-center flex-col leading-13">
              <div className="font-medium text-4xl">Contact</div>
              <div>
                <span className="text-[12px]">Home / Contact</span>
              </div>
            </div>
          </div>
        </div>
        {/* Content here  */}
        <div>
          <div>
            <div class="bg-[#f1f9fc] min-h-screen flex justify-center items-start p-8">
              <div class="text-gray-800 space-y-6 max-w-md w-full">
                <div class="text-3xl font-semibold">Get In Touch</div>

                <div class="space-y-1">
                  <div class="flex items-center font-semibold">
                    <div class="mr-2">🏠</div>
                    <div>Address :</div>
                  </div>
                  <div class="text-sm text-gray-600">
                    86 Petersham town, New South wales Waedll Steet,
                    <br />
                    Australia PA 6550
                  </div>
                </div>

                <div class="space-y-1">
                  <div class="flex items-center font-semibold">
                    <div class="mr-2">🧾</div>
                    <div>Mobile :</div>
                  </div>
                  <div class="text-sm text-gray-600">
                    (+20) 220 145 6589, +91 12345-67890
                  </div>
                </div>

                <div class="space-y-1">
                  <div class="flex items-center font-semibold">
                    <div class="mr-2">📞</div>
                    <div>Phone :</div>
                  </div>
                  <div class="text-sm text-gray-600">
                    +91 12345-67890, (+91) 123 456 7890
                  </div>
                </div>

                <div class="space-y-1">
                  <div class="flex items-center font-semibold">
                    <div class="mr-2">✉️</div>
                    <div>Email :</div>
                  </div>
                  <div class="text-sm text-gray-600">
                    yourmail@mail.com, info@gmail.com
                  </div>
                </div>

                <div class="space-y-1">
                  <div class="flex items-center font-semibold">
                    <div class="mr-2">🔗</div>
                    <div>Website :</div>
                  </div>
                  <div class="text-sm text-gray-600">www.klbtheme.com</div>
                </div>

                <div class="flex items-center space-x-4">
                  <div class="text-gray-600 text-sm">Follow :</div>
                  <div class="flex space-x-2">
                    <div class="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </div>
                    <div class="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </div>
                    <div class="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div class="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                      <ion-icon name="logo-youtube"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
          {/* ------------form--------  */}
          <div className="w-full flex justify-center items-center">
          <div className="w-[74%] bg-white">
                  <div className="w-[80%] mt-10">
                    <h1 className="text-3xl font-medium">Contact Us</h1>
                  </div>
                  <div class="grid grid-cols-2 gap-4 mt-3">
                    <div class="border mt-5 rounded text-sm object-contain text-gray-300">
                      <input type="text" className="w-full h-9" placeholder="  Your Name *" name="" id="" />
                      {/* Your Name * */}
                    </div>
                    <div class="border h-9 mt-5 rounded text-sm text-gray-300">
                    <input type="text" className="w-full h-9" placeholder="  Your Email *" name="" id="" />
                    </div>
                  </div>
                  <div class="border mt-4 rounded text-sm text-gray-300">
                  <input type="text" className="w-full h-9" placeholder="Subject *" name="" id="" />
                  </div>
                  <div class="border mt-4 rounded text-sm text-gray-300">
                  <input type="text" className="w-full h-40" placeholder="  Your Message *" name="" id="" />
                  </div>
                  <div class="bg-gradient-to-r from-[#0FC7B4] to-[#28D695] mt-8 text-white text-xs px-4 py-2 w-max rounded-xs cursor-pointer">
                    Send Message
                  </div>
                </div>
                </div>
                {/* ------------form end here------- */}

        {/* Content end here  */}
      </div>

      <Footer1 />
      <Footer2 />
      <FooterLast />
    </>
  );
};

export default Contact;
