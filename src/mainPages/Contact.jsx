import React from "react";
import Navbar from "../header/Navbar";
import Menu from "../components/Menu";
import Footer1 from "../footer/Footer1";
import Footer2 from "../footer/Footer2";
import FooterLast from "../footer/FooterLast";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
   iconRetinaUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const center = {
  lat: 23.21118,   // Approx. Arera Colony latitude
  lng: 77.432905,  // Approx. Arera Colony longitude
};


const Contact = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <div>
        <div className="w-full flex justify-center items-center bg-gradient-to-r from-[#0FC7B4] to-[#28D695]">
          <div className="container w-full h-40 flex justify-center items-center text-white">
            <div className="flex justify-center items-center flex-col leading-13">
              <div className="font-medium text-4xl">Contact</div>
              <div>
                <span className="text-[12px]">Home / Contact</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info & Map */}
        <div>
          <div className="bg-[#EFF7FA] flex flex-col lg:flex-row justify-center items-start p-8 gap-4">
            {/* Get In Touch Section */}
            <div className="text-gray-800 space-y-6 max-w-md w-full">
              <div className="text-3xl font-semibold">Get In Touch</div>

              <div className="space-y-1">
                <div className="flex items-center font-semibold">
                  <div className="mr-2">🏠</div>
                  <div>Address :</div>
                </div>
                <div className="text-sm text-gray-600">
                  86 Petersham town, New South wales Waedll Steet,
                  <br />
                  Australia PA 6550
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center font-semibold">
                  <div className="mr-2">🧾</div>
                  <div>Mobile :</div>
                </div>
                <div className="text-sm text-gray-600">
                  (+20) 220 145 6589, +91 12345-67890
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center font-semibold">
                  <div className="mr-2">📞</div>
                  <div>Phone :</div>
                </div>
                <div className="text-sm text-gray-600">
                  +91 12345-67890, (+91) 123 456 7890
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center font-semibold">
                  <div className="mr-2">✉️</div>
                  <div>Email :</div>
                </div>
                <div className="text-sm text-gray-600">
                  yourmail@mail.com, info@gmail.com
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center font-semibold">
                  <div className="mr-2">🔗</div>
                  <div>Website :</div>
                </div>
                <div className="text-sm text-gray-600">www.klbtheme.com</div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-gray-600 text-sm">Follow :</div>
                <div className="flex space-x-2">
                  <div className="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </div>
                  <div className="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </div>
                  <div className="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </div>
                  <div className="w-8 h-8 bg-white border rounded-full flex items-center justify-center">
                    <ion-icon name="logo-youtube"></ion-icon>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section using Leaflet */}
            <div className="w-full md:w-[600px] h-[400px] lg:h-[550px]">
              <MapContainer
                center={center}
                zoom={13}
                scrollWheelZoom={false}
                className="w-full h-full"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center}>
                  <Popup>We are here 📍</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        {/* ------------ Contact Form ------------ */}
        <div className="w-full flex justify-center items-center">
          <div className="w-[74%] bg-white">
            <div className="w-[80%] mt-10">
              <h1 className="text-3xl font-medium">Contact Us</h1>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-3">
              <div className="border mt-5 rounded text-sm object-contain text-gray-300">
                <input
                  type="text"
                  className="w-full h-9"
                  placeholder="  Your Name *"
                />
              </div>
              <div className="border h-9 mt-5 rounded text-sm text-gray-300">
                <input
                  type="text"
                  className="w-full h-9"
                  placeholder="  Your Email *"
                />
              </div>
            </div>
            <div className="border mt-4 rounded text-sm text-gray-300">
              <input
                type="text"
                className="w-full h-9"
                placeholder="Subject *"
              />
            </div>
            <div className="border mt-4 rounded text-sm text-gray-300">
              <input
                type="text"
                className="w-full h-40"
                placeholder="  Your Message *"
              />
            </div>
            <div className="bg-gradient-to-r from-[#0FC7B4] to-[#28D695] mt-8 text-white text-xs px-4 py-2 w-max rounded-xs cursor-pointer">
              Send Message
            </div>
          </div>
        </div>

        {/* Footer */}
      </div>
      <Footer1 />
      <Footer2 />
      <FooterLast />
    </>
  );
};

export default Contact;
