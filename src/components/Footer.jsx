import React from "react";
import "./Footer.scss";
import Icon from "../assets/icon.png";
import { useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";
import { IoScan } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer flex justify-between items-center bg-gray-200">
      <img
        src={Icon}
        style={{ maxHeight: "70px" }}
        className="md:ml-[50px] cursor-pointer"
        onClick={() => navigate("/")}
      ></img>
      <CiSettings
        className="text-[50px] font-bold text-cyan-600 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <IoScan
        className="text-[50px] font-bold text-black cursor-pointer"
        onClick={() => navigate("/")}
      />
      <MdOutlineEmail
        className="text-[50px] font-bold text-purple-600 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <HiOutlineUserCircle
        className="text-[50px] font-bold text-pink-500 md:mr-[40px] cursor-pointer"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Footer;
