import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { VscSearch } from "react-icons/vsc";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiSolidPlusCircle } from "react-icons/bi";
import Carousel from "react-multi-carousel";
import gd1 from "../assets/gd1.jpg";
import gd2 from "../assets/gd2.jpg";
import gd3 from "../assets/gd3.jpg";
import gd4 from "../assets/gd4.jpg";
import gd5 from "../assets/gd5.jpg";
import gd6 from "../assets/gd6.jpg";
import gd7 from "../assets/gd7.jpg";
import gd8 from "../assets/gd8.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import km1 from "../assets/km1.jpg";
import avatar1 from "../assets/avatar1.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import avatar5 from "../assets/image5.jpg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const dataF = [
  {
    name: "Nguyễn Đình Duy",
    role: "Cha",
    gmail: "duyng@gmail.com",
    image: avatar4,
  },
  {
    name: "Đoàn Như Sinh",
    role: "Mẹ",
    gmail: "nhusinh96@gmail.com",
    image: avatar1,
  },
  {
    name: "Nguyễn Trường An",
    role: "Con",
    gmail: "truongan77@gmail.com",
    image: avatar5,
  },
  {
    name: "Nguyễn Thị Tố Trân",
    role: "Con",
    gmail: "alexrose@gmail.com",
    image: avatar3,
  },
];

const AddFamily = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px] md:mb-[-80px] mb-[-70px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">
            Thêm thành viên
          </h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosSearch
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="flex items-center md:px-[100px] justify-between mb-10 ">
          <div className="rounded-full bg-gray-300 flex items-center p-3">
            <VscSearch
              className="text-black text-[25px] md:text-[30px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <p className="text-purple-600 font-bold md:text-[40px] text-[25px]">
            Gia đình Batman
          </p>
        </div>
        <div className="flex items-center space-x-10 mb-[40px]">
          <input
            type="text"
            onChange={(e) => e.target.value}
            placeholder="Tìm kiếm..."
            className="border-[1px] border-gray-400 rounded-[10px] md:ml-[100px] md:w-[900px] p-3.5 text-[20px] w-[600px]"
          />
          <div className="bg-blue-600 rounded-[10px] md:px-9 px-5 md:py-3 py-2 text-white md:w-[335px] flex items-center md:space-x-4 space-x-4">
            <p className="md:text-[25px] text-[15px] font-bold">
              Thêm thành viên
            </p>
            <BiSolidPlusCircle className="text-white text-[35px]" />
          </div>
        </div>
        <div className="flex flex-col border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mr-auto ml-auto space-y-3">
          {dataF.map((member, index) => {
            return (
              <div
                className="flex items-center w-full ml-[50px] p-[20px] md:space-x-[50px] space-x-[20px]"
                key={index}
              >
                <img
                  className="rounded-full cursor-pointer"
                  src={member.image}
                  style={{ maxHeight: "100px", maxWidth: "100px" }}
                />
                <div className="flex flex-col w-full space-y-2 ml-[10px]">
                  <div className="flex items-center justify-between w-full">
                    <p className="md:text-[30px] text-[25px] font-bold">
                      {member.name}
                    </p>
                    <div className="flex items-center md:space-x-[50px] space-x-[20px] mr-[100px] min-w-[200px] justify-end">
                      <NavDropdown
                        title={
                          <BiDotsVerticalRounded
                            className="text-[40px] cursor-pointer"
                            onClick={toggleDropdown}
                          />
                        }
                        style={{
                          border: "1px",
                          borderRadius: "30px",
                          borderColor: "gray",
                        }}
                        autoClose="outside"
                      >
                        <NavDropdown.Item>
                          <p className="text-gray-400 text-[21px]">
                            Thay đổi vai trò
                          </p>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <p className="text-red-500 text-[21px]">
                            Xóa thành viên
                          </p>
                        </NavDropdown.Item>
                      </NavDropdown>
                      <p className="font-bold md:text-[30px] text-[25px]">
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <p className="md:text-[25px] text-[20px]">{member.gmail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className="font-bold md:text-[40px] text-[35px] md:px-[60px] py-5">
        Có thể bạn quan tâm
      </p>
      <div className="a mb-[50px]">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          responsive={responsive}
          containerClass="carousel-container"
        >
          <div>
            <img
              src={gd1}
              alt="Slide 1"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div>
            <img
              src={gd2}
              alt="Slide 2"
              className="w-full h-[300px] object-cover cursor-pointer"
            />
          </div>
          <div>
            <img
              src={gd3}
              alt="Slide 3"
              className="w-full h-[300px] object-cover cursor-pointer"
            />
          </div>
          <div>
            <img
              src={gd4}
              alt="Slide 4"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div>
            <img
              src={gd5}
              alt="Slide 5"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div>
            <img
              src={gd6}
              alt="Slide 6"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div>
            <img
              src={gd7}
              alt="Slide 7"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div>
            <img
              src={gd8}
              alt="Slide 8"
              className="w-full h-[300px] object-cover cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default AddFamily;
