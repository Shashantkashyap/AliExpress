import React from "react";
import ImageSlider from "../common/ImageSlider";
import photo from "../../assets/paste.jpg";
import { useNavigate } from "react-router-dom";

function HomeBox() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row w-[85%] mx-auto items-center h-auto lg:h-[700px] gap-5 lg:gap-0">
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-[25%] gap-4">
        {/* Register and Sign In Section */}
        <div className="w-full p-6 bg-gray-100 rounded-2xl">
          <div className="flex justify-center gap-5">
            <button
              onClick={() => navigate("/sendSignInLink")}
              className="text-lg py-2 px-4 bg-black text-white rounded-full border border-black"
            >
              Register
            </button>
            <button
              onClick={() => navigate("/sendSignInLink")}
              className="text-lg py-2 px-4 bg-white text-black rounded-full border border-black"
            >
              Sign in
            </button>
          </div>
        </div>

        {/* Welcome Deals Section */}
        <div className="bg-[#fae9cb] flex flex-col gap-4 p-4 rounded-3xl">
          <div className="text-2xl text-red-500 font-semibold">
            Welcome deals
            <p className="text-black font-thin text-xl">Your exclusive price</p>
          </div>
          <div className="w-full">
            <ImageSlider />
          </div>
        </div>
      </div>

      {/* Center Column */}
      <div className="bg-[#f8c2dd] p-4 rounded-3xl w-full lg:w-auto lg:flex-1">
        <div className="text-3xl font-semibold">
          Super <span className="text-red-500">Deals</span>
        </div>
        <div>
          <img
            src="https://www.shutterstock.com/image-photo/beautiful-colorful-clothes-flying-isolatedwomens-260nw-2257875171.jpg"
            alt="Super Deals"
            className="w-full h-auto object-cover rounded-3xl mt-4"
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-gray-100 p-4 rounded-3xl w-full lg:w-[30%]">
        <div className="text-3xl font-semibold text-center">
          <span className="text-red-500">Plus</span>
        </div>
        <div>
          <img
            src={photo}
            alt="Plus"
            className="w-full h-auto object-cover rounded-3xl mt-4"
          />
        </div>
        <div className="text-[13px] font-semibold mt-2 p-2 ml-2">
          Discover unbeatable deals and exclusive offers on the latest fashion,
          electronics, and home essentials at our e-commerce store. Shop top
          brands, enjoy fast shipping, and experience seamless online shopping.
          Elevate your style and savings today with our incredible discounts and
          curated collections. Join now and start saving!
        </div>
      </div>
    </div>
  );
}

export default HomeBox;
