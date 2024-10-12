import React, { useState } from "react";
import "./Login.scss";
import gg from "../assets/gg.png";
import { MdOutlineEmail } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { PiEyeClosedLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { PiKeyBold } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {};

  return (
    <>
      <div className="w-full h-full bg-login bg-cover bg-center bg-no-repeat relative">
        <div className="h-30 flex items-center justify-center"></div>
        <form
          className="flex items-center justify-center main bg-white opacity-65 relative flex-col space-y-3.5"
          onSubmit={(e) => handleSubmit(e)}
        >
          <h2 className="text-pink-600 font-bold text-[40px]">Đăng nhập</h2>
          <img src={gg} style={{ maxWidth: "170px" }} />
          <div className="input-group  flex items-center h-[63px]">
            <span className="icon p-[10px] h-[100%] flex items-center justify-center ml-10">
              <MdOutlineEmail fontSize="50px" />
            </span>
            <span className="icon-lines h-[180%]">
              <PiLineVerticalLight
                fontSize="100px"
                style={{ height: "100%" }}
              />
            </span>
            <input
              className="font-bold text-[20px] bg-white h-[100%]"
              type="email"
              placeholder="Nhập email/SĐT"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="input-group  flex items-center h-[63px]">
            <span className="icon p-[10px] h-[100%] flex items-center justify-center ml-10">
              <PiKeyBold fontSize="50px" />
            </span>
            <span className="icon-lines h-[180%]">
              <PiLineVerticalLight
                fontSize="100px"
                style={{ height: "100%" }}
              />
            </span>
            <input
              className="font-bold text-[20px] bg-white h-[100%]"
              type={isShowPassWord ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            {isShowPassWord ? (
              <span
                className="icon-eyes"
                onClick={() => setIsShowPassWord(false)}
              >
                <RxEyeOpen />
              </span>
            ) : (
              <span
                className="icon-eyes"
                onClick={() => setIsShowPassWord(true)}
              >
                <PiEyeClosedLight />
              </span>
            )}
          </div>
          <span
            className="text-red-600 font-bold text-[25px] mr-[330px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Quên mật khẩu?
          </span>
          <button className="bg-purple-600 btnSubmit">Tiếp tục</button>
          <span
            className="text-blue-700 font-bold text-[25px] mr-[190px] cursor-pointer"
            onClick={() => navigate("/")}
          >
            Chưa có tài khoản? <i>Tạo ngay</i>
          </span>
          <p className="text-black text-[25px] font-bold mr-[328px]">
            Đăng nhập bằng:{" "}
          </p>
          <div className="flex items-center justify-center space-x-[50px] ">
            <span onClick={() => navigate("/")} className="cursor-pointer">
              <FaFacebook fontSize="55px" color="blue" />
            </span>
            <span onClick={() => navigate("/")} className="cursor-pointer">
              <RiTwitterXFill fontSize="55px" />
            </span>
            <span onClick={() => navigate("/")} className="cursor-pointer">
              <FaGithub fontSize="55px" />
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
