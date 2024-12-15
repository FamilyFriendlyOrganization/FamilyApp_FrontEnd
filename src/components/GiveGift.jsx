import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { IoPlanetOutline } from "react-icons/io5";
import Footer from "./Footer";
import { PiGameControllerBold } from "react-icons/pi";
import { PiRadioBold } from "react-icons/pi";
import { FaStarAndCrescent } from "react-icons/fa";

const GiveGift = () => {
  const navigate = useNavigate();
  const [icon, setIcon] = useState(1);

  const renderIcon = (icon) => {
    switch (icon) {
      case 1:
        return <IoPlanetOutline className="text-[300px] py-5 ml-[150px]" />;
      case 2:
        return <FaStarAndCrescent className="text-[300px] py-5 ml-[150px]" />;
      case 3:
        return (
          <PiGameControllerBold className="text-[300px] py-5 ml-[150px]" />
        );
      case 4:
        return <PiRadioBold className="text-[300px] py-5 ml-[150px]" />;
      default:
        return <IoPlanetOutline className="text-[300px] py-5 ml-[150px]" />;
    }
  };
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Tặng quà</h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosSearch className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main mb-[100px] mt-[50px]">
        <div className="border-gray-400 border-[1px] rounded-xl w-full max-w-[1000px] mx-auto mt-[50px] md:p-[30px] p-[10px] md:mt-[30px] flex items-center md:mb-[50px] mb-[30px]">
          <input
            type="text"
            placeholder="Chọn người nhận quà"
            className="md:text-[40px] text-[25px] focus:outline-none text-gray-400 font-semibold w-[600px]"
          />
          <p className="md:text-[40px] text-[25px] text-pink-500 font-bold cursor-pointer">
            Danh bạ
          </p>
        </div>
        <div className="bg-pink-600 rounded-xl w-full max-w-[1000px] mx-auto mt-[50px] p-1">
          <div className="rounded-xl w-[800px] bg-gift my-[80px] mx-[100px] h-[650px] bg-no-repeat bg-cover">
            {renderIcon(icon)}
          </div>
        </div>
        <div className="md:mt-[50px] mt-[30px]">
          <p className="md:text-[40px] text-[25px] text-gray-400 font-semibold  md:ml-[100px]">
            Số tiền chuyển
          </p>
          <div className="border-[1px] border-black md:mt-[20px] md:mb-[20px] md:ml-[65px]"></div>
          <input
            type="text"
            placeholder="0 VNĐ"
            className="md:text-[40px] text-[25px] font-bold focus:outline-none md:ml-[100px]"
          />
        </div>
        <div className="md:mt-[50px] mt-[30px] grid grid-cols-4 gap-[20px] md:ml-[65px] md:mb-[50px]">
          <div className="border-gray-400 rounded-xl max-w-[300px] border-[1px] flex items-center justify-center p-5">
            <IoPlanetOutline
              className="text-[200px] cursor-pointer"
              onClick={() => setIcon(1)}
            />
          </div>
          <div className="border-gray-400 rounded-xl max-w-[300px] border-[1px] flex items-center justify-center">
            <FaStarAndCrescent
              className="text-[200px] cursor-pointer"
              onClick={() => setIcon(2)}
            />
          </div>
          <div className="border-gray-400 rounded-xl max-w-[300px] border-[1px] flex items-center justify-center">
            <PiGameControllerBold
              className="text-[200px] cursor-pointer"
              onClick={() => setIcon(3)}
            />
          </div>
          <div className="border-gray-400 rounded-xl max-w-[300px] border-[1px] flex items-center justify-center">
            <PiRadioBold
              className="text-[200px] cursor-pointer"
              onClick={() => setIcon(4)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center mb-[100px]">
          <button
            className="bg-pink-500 text-white font-bold md:px-40 md:py-5 px-20 text-[40px] rounded-lg"
            onClick={() => navigate("/send-gift")}
          >
            Tiếp tục
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GiveGift;
