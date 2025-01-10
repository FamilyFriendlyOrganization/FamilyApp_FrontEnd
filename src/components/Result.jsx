import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import successIcon from "../assets/successIcon.jpg";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const dataF = [
  { title: "Thời gian thanh toán", value: "11:50 20/11/2024" },
  { title: "Chi tiết giao dịch", value: "123456789a" },
  { title: "Tài khoản/thẻ", value: "Vietcombank" },
  { title: "Phí giao dịch", value: "Miễn phí" },
  { title: "Phân loại chi tiêu", value: "Ăn uống" },
];
const Result = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/send-money")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">
            Kết quả giao dịch
          </h1>
        </div>

        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main mb-[100px] mt-[50px]">
        <p className="font-bold md:text-[55px] text-[40px] text-center mb-[70px]">
          Kết quả giao dịch
        </p>
        <div className="border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mx-auto mt-[80px] md:p-[30px] p-[10px] relative ">
          <img
            src={successIcon}
            className="absolute -top-12 md:left-[625px]"
            width={100}
            height={100}
          />
          <p className="font-bold md:text-[40px] text-[25px] text-center mb-[10px] mt-[50px]">
            Giao dịch thành công
          </p>
          <p className="font-bold md:text-[30px] text-[25px] text-center mb-[30px]">
            30.000 VNĐ
          </p>
          <div className="max-w-[1000px] mx-auto bg-blue-100 rounded-lg py-3 px-10 mb-[50px]">
            <p className="text-gray-500 font-semibold md:text-[40px] text-[25px]">
              Nguyễn Văn A đã nhận tiền
            </p>
          </div>
          {dataF.map((item, index) => (
            <div
              key={index}
              className="flex items-center flex-col mx-[145px] mb-[25px]"
            >
              <div className="flex justify-between w-full gap-[200px]">
                <p className="text-gray-500 md:text-[40px] text-[25px] text-left w-[50%]">
                  {item.title}
                </p>
                <p className="font-semibold md:text-[40px] text-[25px] text-right w-[50%]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Result;
