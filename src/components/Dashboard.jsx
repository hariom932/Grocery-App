import React from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Footer2 from "./Footer2";
import Footer1 from "./Footer1";
import FooterLast from "./FooterLast";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location=useLocation();
  const username=location.state.username || 'Guest'
  
  return (
    <>
      <Navbar />
      <Menu />
      <div>
        <div className="bg-gradient-to-r from-[#0FC7B4] to-[#28D695]">
          <div className="container w-full h-40  flex justify-center items-center text-white">
            <div className="flex justify-center items-center flex-col leading-13">
              <div className="font-medium text-4xl">My account</div>
              <div>Home / My Account</div>
            </div>
          </div>
        </div>
        {/* ------ dashboard section -----  */}
        <div>
          <div className="w-full flex justify-center items-center bg-[#EFF7FA]">
            <div className="w-[100%] h-[540px] bg-white my-10 flex flex-col md:flex-row md:w-[60%] lg:w-[56%]">
              <div className="w-[100%] border border-gray-200 md:w-[35%]">
                <div className="h-[45%] w-full flex pt-10">
                  {/* person icon---  */}
                  <div className="flex flex-col items-center w-full">
                      <img className="h-[100px] w-[100px] rounded-full" src="https://secure.gravatar.com/avatar/dd28514c9a8cfba334e05f21703be28e?s=200&d=mm&r=g" alt="" />  
                      <p className="font-bold pt-2 text-[#0CC5B7] text-xl">Hi</p>
                  </div>
                  {/* person icon end here---  */}
                </div>
                <div className="h-[55%] flex justify-center items-center">
                  <ul className="w-[92%] text-gray-600 mb-3">
                    <li className="flex items-center px-4 py-3  font-normal text-sm border border-gray-200 text-white bg-gradient-to-r from-[#FF914C] to-[#FF645F]">
                      <span className="mt-1 mr-1">
                        <ion-icon
                          className="h-4 w-3"
                          name="grid-outline"
                        ></ion-icon>
                      </span>
                      Dashboard
                    </li>
                    {/* ------orders-----  */}
                    <li className="flex items-center px-4 py-3  font-normal text-sm border border-gray-100 hover:text-white hover:bg-gradient-to-r from-[#FF914C] to-[#FF645F]">
                      <span className="mt-1 mr-1">
                        <ion-icon
                          className="h-4 w-3"
                          name="list-outline"
                        ></ion-icon>
                      </span>
                      Orders
                    </li>
                    {/* ------orders end here-----   */}
                    {/* -------download ----- */}
                    <li className="flex items-center px-4 py-3  font-normal text-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r from-[#FF914C] to-[#FF645F]">
                      <span className="mt-1 mr-1">
                        <ion-icon
                          className="h-4 w-3"
                          name="arrow-down-outline"
                        ></ion-icon>
                      </span>
                      Download
                    </li>
                    {/* -------download end here ----- */}
                    {/* -------Address ----- */}
                    <li className="flex items-center px-4 py-3  font-normal text-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r from-[#FF914C] to-[#FF645F]">
                      <span className="mt-1 mr-1">
                        <ion-icon
                          className="h-4 w-3"
                          name="location-outline"
                        ></ion-icon>
                      </span>
                      Address
                    </li>
                    {/* -------Address end here ----- */}

                    {/* -------Account ----- */}
                    <li className="flex items-center px-4 py-3  font-normal text-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r from-[#FF914C] to-[#FF645F]">
                      <span className="mt-1 mr-1">
                        <ion-icon
                          className="h-4 w-3"
                          name="person-outline"
                        ></ion-icon>
                      </span>
                      Account details
                    </li>
                    {/* -------account end here ----- */}
                    {/* -------Logout ----- */}
                    <li className="flex items-center px-4 py-3  font-normal text-sm border border-gray-200 hover:text-white hover:bg-gradient-to-r from-[#FF914C] to-[#FF645F]">
                      <span className="mt-1 mr-1">
                        <ion-icon
                          className="h-4 w-3"
                          name="log-out-outline"
                        ></ion-icon>
                      </span>
                      Logout
                    </li>
                    {/* -------Logout end here ----- */}
                  </ul>
                </div>
              </div>
              <div className="w-[65%] border border-gray-200">
                <div className="p-5">
                  <p className="text-gray-400 text-[13px]">Hello <b className="text-gray-500">{username}</b> (not <b className="text-gray-500">{username}</b>? log out)</p>
                  <p className="text-gray-400 text-[13px] mt-5">
                    From your account dashboard you can view your recent orders,
                    manage your shipping and billing addresses, and edit your
                    password and account details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------ dashboard section end here -----  */}
      </div>
      <Footer1/>
      <Footer2/>
      <FooterLast />
    </>
  );
};

export default Dashboard;
