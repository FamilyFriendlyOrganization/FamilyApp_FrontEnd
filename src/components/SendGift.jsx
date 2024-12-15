import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { IoPlanetOutline } from "react-icons/io5";
import Footer from "./Footer";

const SendGift = () => {
  const navigate = useNavigate();
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
      <div className="main mb-[100px] mt-[30px]">
        <div className="bg-pink-600 rounded-xl w-full max-w-[1000px] mx-auto mt-[50px] p-1">
          <div className="rounded-xl w-[800px] bg-gift my-[30px] mx-[100px] h-[650px] bg-no-repeat bg-cover">
            <IoPlanetOutline className="text-[300px] py-5 ml-[150px]" />
          </div>
          <p className="md:text-[40px] text-[25px] text-white text-center mt-[-20px]">
            Một ngày thật năng động và vui vẻ nhé!
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-[50px] mb-[100px] mt-[50px]">
          <button
            className="bg-white border-[1px] border-gray-400 font-bold md:px-40 md:py-5 px-20 text-[40px] rounded-xl "
            onClick={() => navigate("/give-gift")}
          >
            Chỉnh sửa số tiền
          </button>
          <button
            className="bg-pink-600 text-white font-bold md:px-40 md:py-5 px-20 text-[40px] rounded-xl"
            onClick={() => navigate("/home")}
          >
            Hoàn tất
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SendGift;
