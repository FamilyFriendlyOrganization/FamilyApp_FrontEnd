/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Login.scss";
import gg from "../assets/gg.png";
import { PiLineVerticalLight } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { PiEyeClosedLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { PiKeyBold } from "react-icons/pi";
import { login } from "../service/Auth";
import { toast } from "react-toastify";
import { LuUser2 } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { doLogin } from "../redux/action/userAction";
import Footer from "./Footer";
import { IoIosReturnLeft } from "react-icons/io";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let res = await login(username, password);

  //   if (res) {
  //     dispatch(doLogin(res.data));
  //     toast.success("Đăng nhập thành công!");

  //     navigate("/choose");
  //   } else {
  //     toast.error("Đăng nhập thất bại :(");
  //   }
  // };

  return (
    <>
      <div className="w-full h-full bg-login bg-cover bg-center bg-no-repeat relative">
        <div className="h-30 flex items-center justify-center"></div>
        <form
          className="flex items-center justify-center main bg-white relative flex-col space-y-4 h-fit"
          // onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex items-center md:space-x-[350px] md:mr-[350px]">
            <IoIosReturnLeft
              className="text-[40px] cursor-pointer"
              onClick={() => navigate("/")}
            />
            <h2 className="bg-gradient-to-t bg-clip-text text-transparent from-purple-600 to-blue-500 font-bold text-[40px]">
              Đăng nhập
            </h2>
          </div>

          <div className="input-group  flex items-center h-[63px] bg-gray-100">
            <span className="p-[10px] h-[100%] flex items-center justify-center ml-10">
              <LuUser2 fontSize="50px" />
            </span>
            <span className="icon-lines h-[180%]">
              <PiLineVerticalLight
                fontSize="100px"
                style={{ height: "100%" }}
              />
            </span>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <div className="input-group  flex items-center h-[63px] bg-gray-100">
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
          <div className="flex items-center justify-center space-x-[175px]">
            <div class="font-bold text-[25px] space-x-2 flex justify-center">
              <input
                class="text-[25px] transform scale-150"
                type="checkbox"
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                Ghi nhớ tôi
              </label>
            </div>

            <span
              className="text-red-600 font-bold text-[25px] cursor-pointer"
              onClick={() => navigate("/")}
            >
              Quên mật khẩu?
            </span>
          </div>
          <button
            className="bg-purple-600 btnSubmit"
            onClick={() => navigate("/choose")}
          >
            Tiếp tục
          </button>
          <span
            className="text-blue-700 font-bold text-[25px] mr-[190px] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Chưa có tài khoản? <i>Tạo ngay</i>
          </span>
          <p className="text-black text-[25px] font-bold mr-[328px]">
            Đăng nhập bằng:{" "}
          </p>
          <div className="flex items-center justify-center space-x-[50px] ">
            <img src={gg} style={{ maxWidth: "190px" }} />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Login;
