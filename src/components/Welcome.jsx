import React from "react";
import Icon from "../assets/icon.png";
import { PiHandWaving } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import "./Welcome.scss";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-full bg-welcome bg-cover bg-center bg-no-repeat relative">
        <div className="absolute w-full h-full opacity-40 bg-black"></div>
        <div className="flex flex-col items-center justify-center h-[625px] z-20 relative">
          <img src={Icon} style={{ maxWidth: "200px" }}></img>
          <h1 className="text-white text-center font-bold text-[50px]">
            Family App
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <PiHandWaving fontSize="50px" color="orange" />
            <h2 className="text-white text-[30px]">
              Xin chào, chào mừng trở lại
            </h2>
          </div>
          <div className="clickbtn mt-[40px] space-y-5 flex flex-col justify-center items-center">
            <button className="flex justify-center items-center space-x-3 w-[310px]">
              <FaGoogle className="text-green-500 text-[30px] icon" />
              <h2 className="text-40px font-bold">Đăng nhập bằng Google</h2>
            </button>
            <button className="flex justify-center items-center space-x-3 w-[310px]">
              <IoPhonePortraitOutline className="text-black text-[25px] icon" />
              <h2 className="text-40px font-bold">
                Đăng nhập bằng số điện thoại
              </h2>
            </button>
            <button className="flex justify-center items-center space-x-3 w-[310px]">
              <FaFacebook className="text-blue-700 text-[30px]" />
              <h2 className="text-40px font-bold">Đăng nhập bằng Facebook</h2>
            </button>
            <div className="flex items-center justify-center space-x-4">
              <h2 className="text-white text-[25px]">Chưa có tài khoản?</h2>
              <span
                className="text-green-500 text-[25px] cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Đăng ký ngay
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
