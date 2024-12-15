import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Footer from "./Footer";
import "./ReceiveMoney.scss";
import transfer1 from "../assets/transfer.jpg";
import { FaArrowDown } from "react-icons/fa6";

const dataF = [
  { name: "Nguyễn Thùy Vân", money: "80,000 ", time: "15:52 29/11/2024" },
  { name: "Đặng Thị Trúc", money: "90,000 ", time: "7:25 28/11/2024" },
  { name: "Phương Như Sinh", money: "180,000 ", time: "14:50 27/11/2024" },
  { name: "Nguyễn Minh Thư", money: "100,000 ", time: "10:30 26/11/2024" },
];

const ReceiveMoney = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack className="text-white text-[30px] md:text-[45px] cursor-pointer" />
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
      <div className="main">
        <div className="bg-green-700 rounded-[20px] w-full max-w-[1350px] mx-auto md:mt-[-70px] p-1 mb-[30px]">
          <div className=" rounded-[20px] w-full max-w-[1200px] bg-white mx-auto my-[50px]">
            <div className="flex justify-between bg-green-700 rounded-b-[30px] items-center mx-auto max-w-[300px] p-1">
              <p className="text-white md:text-[35px] text-[25px] text-center w-full font-bold">
                QR nhận tiền
              </p>
            </div>
            <div className="flex md:gap-x-[200px] mt-[50px] mb-[70px]">
              <div className="a md:ml-[250px]">
                <p className="text-black md:text-[80px] text-[40px] b">Tết</p>
                <p className="text-black md:text-[80px] text-[40px] b">đến</p>
                <p className="text-black md:text-[80px] text-[40px] b">xuân</p>
                <p className="text-black md:text-[80px] text-[40px] b">về</p>
              </div>
              <img
                src={transfer1}
                width={"400px"}
                height={"400px"}
                className=""
              />
            </div>
            <div className="bg-orange-300 rounded-b-[20px] flex items-center justify-center h-[100px]">
              <p className="text-black md:text-[35px] text-[25px] text-center font-bold">
                Nhận tiền từ mọi Ngân hàng và Ví điện tử
              </p>
            </div>
          </div>
        </div>
        <div className="transfer">
          <p className="text-black font-bold md:text-[40px] text-[25px] md:ml-[60px] md:mb-[30px]">
            Nhận tiền gần đây
          </p>
          <div className="flex flex-col border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] ml-auto mr-auto space-y-8 mb-[70px]">
            <div></div>
            {dataF.map((item, index) => (
              <div
                key={index}
                className="flex  items-center w-[1200px] ml-auto mr-auto border-[1px] border-gray-400 md:px-20 px-4 md:space-x-[70px] space-x-[20px]"
              >
                <div className="w-[80px] h-[80px] rounded-full border-gray-400 border-[1px] flex items-center justify-center p-1">
                  <FaArrowDown className="text-[50px] text-blue-600" />
                </div>
                <div className="flex flex-col  space-y-[10px]">
                  <p className="md:text-[35px] text-[30px] font-semibold text-black">
                    Nhận tiền từ <i>{item.name}</i>
                  </p>
                  <div className="flex md:space-x-[500px] space-x-[200px] items-center">
                    <p className="text-gray-500 text-[20px]">{item.time}</p>
                    <p className="text-black font-bold md:text-[25px] text-[25px]">
                      +{item.money} VNĐ
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-pink-600 font-bold cursor-pointer flex items-center justify-center gap-x-[10px]">
              <p className="text-[30px]">Xem thêm</p>
              <FaArrowDown className="text-[25px]" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ReceiveMoney;
