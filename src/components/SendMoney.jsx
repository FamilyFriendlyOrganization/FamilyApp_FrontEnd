import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import km1 from "../assets/km1.jpg";
import Footer from "./Footer";
import { TbGiftCard } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaBicycle } from "react-icons/fa";
import { CgMoreR } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";

const SendMoney = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/transfer")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Chuyển tiền</h1>
        </div>

        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="md:ml-[55px] md:mt-[40px] mt-[20px] md:mb-[-70px] mb-[-100px] flex items-center gap-x-[30px]">
        <img
          className="rounded-full cursor-pointer"
          src={item.image}
          style={{ maxHeight: "100px", maxWidth: "100px" }}
        />
        <p className="md:text-[50px] text-[25px] font-bold">
          {item.name} - 0888696869
        </p>
      </div>
      <div className="main mb-[50px]">
        <div className="border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mx-auto mt-[50px] md:p-[30px] p-[10px]">
          <div className="flex flex-col items-center justify-center mt-[30px]">
            <input
              type="text"
              name="money"
              className="md:text-[40px] text-[25px] font-semibold text-gray-500 text-center focus:outline-none"
              placeholder="0đ"
            />
            <div className="border-[1px] border-pink-500 md:mb-[20px] w-[80px] h-[1px]"></div>
            <p className="md:text-[40px] text-[25px] font-bold text-pink-500 text-center">
              Vui lòng nhập số tiền
            </p>
          </div>
          <div className="flex items-center justify-center md:space-x-[80px] space-x-[40px] mb-[40px]">
            <div className="relative border-[1px] border-gray-500 p-6 w-[700px] mt-[40px]">
              <label
                className="absolute -top-7 px-3 left-8 bg-white text-[30px]"
                htmlFor="message"
              >
                Lời nhắn
              </label>
              <input
                id="message"
                type="text"
                className="border-none focus:outline-none w-full pt-2"
                placeholder="aaaa"
                name="username"
              ></input>
            </div>
            <div className=" border-[1px] border-gray-500 w-[150px] mt-[40px] flex items-center justify-center">
              <TbGiftCard className="text-[80px] text-pink-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-[100px]">
        <button
          className="bg-pink-500 text-white font-bold md:px-40 md:py-5 px-20 text-[40px] rounded-lg"
          onClick={() => navigate("/result")}
        >
          Chuyển tiền
        </button>
      </div>
      <Footer />
    </>
  );
};

export default SendMoney;
