/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Signup.scss";
import Icon1 from "../assets/icon3.png";
import { LuUser2 } from "react-icons/lu";
import { PiKeyBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RxEyeOpen } from "react-icons/rx";
import { PiEyeClosedLight } from "react-icons/pi";
import Icon2 from "../assets/icon4.png";
import { register } from "../service/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Footer";
import { IoIosReturnLeft } from "react-icons/io";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [accountStatus, setAccountStatus] = useState(1);
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    let account = { username, password, email, displayName, accountStatus };

    let res = await register(account);

    if (res) {
      toast.success("Đăng ký thành công!");
      navigate("/login");
    } else {
      toast.error("Đăng ký thất bại :(");
    }
  };
  return (
    <>
      <div className="h-full w-full bg-signup bg-no-repeat bg-center bg-cover relative">
        <div className="flex items-center justify-between md:ml-[100px] ml-[80px] md:mb-[5px] mb-0">
          <img
            src={Icon1}
            style={{
              maxWidth: "140px",
            }}
          />
          <div className="flex flex-col items-center justify-center space-y-[-80px] mb-[40px] mr-[150px]">
            <img
              src={Icon2}
              alt="icon"
              style={{
                maxWidth: "80px",
              }}
            />
            <span className="text-[16px] text-white font-bold ">
              Bắt đầu nào!
            </span>
          </div>
        </div>
        <form
          className="bg-white flex flex-col space-y-6 items-center relative main md:mt-[-38px] mt-[-40px]"
          onSubmit={(e) => handleSignup(e)}
        >
          <div className="flex items-center justify-between md:space-x-[200px] md:mr-[220px] space-x-[50px] mr-[70px]">
            <IoIosReturnLeft
              className="text-[40px] cursor-pointer "
              onClick={() => navigate("/login")}
            />
            <h1 className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent text-[50px] font-bold">
              Đăng ký
            </h1>
          </div>
          <div className="space-x-5 flex items-center w-fit bg-gray-100 inputF">
            <span className="p-[10px] flex justify-center">
              <LuUser2 className="text-[30px]" />
            </span>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Nhập tên tài khoản"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center space-x-5 bg-gray-100 inputF">
            <span className="p-[10px] flex justify-center">
              <PiKeyBold className="text-[30px]" />
            </span>
            <input
              type={isShowPassWord ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            {isShowPassWord ? (
              <span
                onClick={() => setIsShowPassWord(false)}
                className="icon-eyes"
              >
                <RxEyeOpen />
              </span>
            ) : (
              <span
                onClick={() => setIsShowPassWord(true)}
                className="icon-eyes"
              >
                <PiEyeClosedLight />
              </span>
            )}
          </div>
          <div className="flex items-center justify-center space-x-5 bg-gray-100 inputF">
            <span className="p-[10px] flex justify-center">
              <MdOutlineEmail className="text-[30px]" />
            </span>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Nhập email của bạn"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center space-x-5 bg-gray-100 inputF">
            <span className="p-[10px] flex justify-center">
              <FaRegHeart className="text-[30px]" />
            </span>
            <input
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Nhập tên bạn muốn dùng"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="btn bg-gradient-to-r from-purple-500 to-purple-800 text-white font-bold mb-20">
              Tiếp tục
            </button>
          </div>
        </form>
        <Footer />
      </div>
    </>
  );
};

export default Signup;
