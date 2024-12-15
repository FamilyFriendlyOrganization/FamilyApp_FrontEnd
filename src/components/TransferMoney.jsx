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
import { useNavigate } from "react-router-dom";

const dataF = [
  [
    { name: "Lê Thị Anh" },
    { name: "Trần Văn Bình" },
    { name: "Nguyễn Hữu Cường" },
    { name: "Bùi Minh Nhật" },
    { name: "Đỗ Thanh Sơn" },
    { name: "Đặng Thị Thanh" },
    { name: "Võ Thanh Đạt" },
    { name: "Lương Thị Hạnh" },
  ],
  [
    { name: "Phan Quốc Bảo" },
    { name: "Ngô Thị Mai" },
    { name: "Trần Minh Hùng" },
    { name: "Lý Ngọc Khoa" },
    { name: "Hoàng Thu Vân" },
    { name: "Cao Thị Tâm" },
    { name: "Đinh Quốc Toàn" },
    { name: "Nguyễn Quốc Trung" },
  ],
  [
    { name: "Nguyễn Đình Mạnh" },
    { name: "Nguyễn Văn Hậu" },
    { name: "Đinh Văn Cường" },
    { name: "Định Thị Trúc" },
    { name: "Hồ Cường Định" },
    { name: "Trịnh Trần Phương Hiếu" },
    { name: "Thạch Trung Kiên" },
    { name: "Phạm Quỳnh Tố Trân" },
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
            <IoIosSearch className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main mb-[200px]">
        <div className="flex findBtn max-w-[600px] bg-gray-100 mt-[-80px] m-auto gap-x-[20px]">
          <span>
            <GoSearch
              className="text-[30px] cursor-pointer font-bold"
              onClick={() => navigate("/home")}
            />
          </span>
          <input
            type="text"
            name="username"
            placeholder="Tìm kiếm tên người dùng..."
            className="bg-transparent focus:outline-none"
          />
        </div>
        <div className="border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mx-auto mt-[30px] md:p-[30px] p-[10px] grid grid-cols-4 gap-[50px]">
          <div className="flex items-center flex-col space-y-1 cursor-pointer">
            <CiBank className="text-[100px] text-blue-500" />
            <p className="text-[40px] font-semibold">Đến</p>
            <p className="text-[40px] font-semibold">ngân hàng</p>
          </div>
          <div className="flex items-center flex-col space-y-1 cursor-pointer">
            <MdFamilyRestroom className="text-[100px] text-blue-800" />
            <p className="text-[40px] font-semibold">Đến thành viên</p>
            <p className="text-[40px] font-semibold">gia đình</p>
          </div>
          <div className="flex items-center flex-col space-y-1 cursor-pointer">
            <FaQrcode className="text-[100px] text-pink-400" />
            <p className="text-[40px] font-semibold">Quét mã QR</p>
          </div>
          <div className="flex items-center flex-col space-y-1 cursor-pointer">
            <FaGift className="text-[100px] text-purple-600" />
            <p className="text-[40px] font-semibold">Tặng quà</p>
          </div>
        </div>
        <div className="border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mx-auto mt-[30px] md:p-[30px] p-[10px] md:mt-[50px] ">
          <p className="md:text-[40px] text-[25px] font-bold">Đề xuất</p>
          <div className="border-[1px] border-black md:mt-[20px] md:mb-[20px]"></div>
          <>
            <div className="grid grid-cols-4 gap-x-[50px] gap-y-[80px] mt-[50px] mb-[100px]">
              {activeList.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-1 cursor-pointer h-[200px]"
                  onClick={() => navigate("/send-money")}
                >
                  <img
                    className="rounded-full cursor-pointer"
                    src={km1}
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
