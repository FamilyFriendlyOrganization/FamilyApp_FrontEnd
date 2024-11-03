import React, { useState } from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
import { GoPlusCircle } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";
import { LuHome } from "react-icons/lu";
import { MdOutlineEditCalendar } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();
  const [activeIcon, setActiveIcon] = useState(null);

  const handleIconClick = (iconName, path) => {
    setActiveIcon(iconName);
    navigate(path);
  };
  return (
    <div className="footer flex justify-between items-center bg-gray-200">
      <div
        className={`icon-container ${activeIcon === "home" ? "active" : ""}`}
        onClick={() => handleIconClick("home", "/home")}
      >
        <LuHome className="md:ml-[200px] icon" />
      </div>
      <div
        className={`icon-container ${
          activeIcon === "calendar" ? "active" : ""
        }`}
        onClick={() => handleIconClick("calendar", "/home")}
      >
        <MdOutlineEditCalendar className="icon" />
      </div>
      <div
        className={`icon-container ${activeIcon === "add" ? "active" : ""}`}
        onClick={() => handleIconClick("add", "/home")}
      >
        <GoPlusCircle className="icon" />
      </div>
      <div
        className={`icon-container ${activeIcon === "money" ? "active" : ""}`}
        onClick={() => handleIconClick("money", "/home")}
      >
        <TbMoneybag className="icon" />
      </div>
      <div
        className={`icon-container ${activeIcon === "profile" ? "active" : ""}`}
        onClick={() => handleIconClick("profile", "/home")}
      >
        <FaRegCircleUser className="icon md:mr-[200px]" />
      </div>
    </div>
  );
};

export default Footer;
