import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { CiBank } from "react-icons/ci";
import { MdFamilyRestroom } from "react-icons/md";
import { FaQrcode } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";
import Footer from "./Footer";
import km1 from "../assets/km1.jpg";
import ava1 from "../assets/ava1.jpg";
import { useNavigate } from "react-router-dom";

const dataF = [
  [
    { name: "Lê Thị Anh", image: ava1 },
    { name: "Trần Văn Bình", image: ava1 },
    { name: "Nguyễn Hữu Cường", image: ava1 },
    { name: "Bùi Minh Nhật", image: ava1 },
    { name: "Đỗ Thanh Sơn", image: ava1 },
    { name: "Đặng Thị Thanh", image: ava1 },
    { name: "Võ Thanh Đạt", image: ava1 },
    { name: "Lương Thị Hạnh", image: ava1 },
  ],
  [
    { name: "Phan Quốc Bảo", image: ava1 },
    { name: "Ngô Thị Mai", image: ava1 },
    { name: "Trần Minh Hùng", image: ava1 },
    { name: "Lý Ngọc Khoa", image: ava1 },
    { name: "Hoàng Thu Vân", image: ava1 },
    { name: "Cao Thị Tâm", image: ava1 },
    { name: "Đinh Quốc Toàn", image: ava1 },
    { name: "Nguyễn Quốc Trung", image: ava1 },
  ],
  [
    { name: "Nguyễn Đình Mạnh", image: ava1 },
    { name: "Nguyễn Văn Hậu", image: ava1 },
    { name: "Đinh Văn Cường", image: ava1 },
    { name: "Định Thị Trúc", image: ava1 },
    { name: "Hồ Cường Định", image: ava1 },
    { name: "Trịnh Trần Phương Hiếu", image: ava1 },
    { name: "Thạch Trung Kiên", image: ava1 },
    { name: "Phạm Quỳnh Tố Trân", image: ava1 },
  ],
];
const TransferMoney = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeList, setActiveList] = useState(dataF[0]);
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
          <h1 className="text-white text-[25px] md:text-[35px]">Chuyển tiền</h1>
        </div>

        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main mb-[200px]">
        <div className="border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mx-auto mt-[30px] md:p-[30px] p-[10px] md:mt-[50px] ">
          <p className="md:text-[40px] text-[25px] font-bold">Đề xuất</p>
          <div className="border-[1px] border-black md:mt-[20px] md:mb-[20px]"></div>
          <>
            <div className="grid grid-cols-4 gap-x-[50px] gap-y-[80px] mt-[50px] mb-[100px]">
              {activeList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-1 cursor-pointer h-[200px]"
                  onClick={() => navigate("/send-money", { state: { item } })}
                >
                  <img
                    className="rounded-full cursor-pointer"
                    src={item.image}
                    style={{ maxHeight: "150px", maxWidth: "150px" }}
                    alt={item.name}
                  />
                  <p className="md:text-[35px] text-[15px] font-semibold text-center">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </>
          <div className="flex justify-center items-center gap-2 mt-4">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`${
                  activeIndex === index
                    ? "h-5 w-12 rounded-full bg-pink-500 transition-300"
                    : "h-3 w-3 rounded-full bg-gray-300"
                } cursor-pointer`}
                onClick={() => {
                  setActiveIndex(index);
                  setActiveList(dataF[index]);
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TransferMoney;
