import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import bill from "../../../assets/maVNPT.jpg";
import Footer from "../../Footer";
const BillInternet = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};
  const [customerID, setCustomerID] = useState("");
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px] md:mb-[-50px] mb-[-70px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Hóa đơn</h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
      </div>
      <div className="top-content bg-blue-200 md:mt-[50px] mt-[60px]">
        <div>
          <div className="flex items-center gap-[20px] md:gap-[40px] px-[20px] md:px-[100px] py-[10px]">
            <img
              src={item.image}
              className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover"
            />
            <div className="text-center md:text-left">
              <p className="font-bold text-[15px] md:text-[30px]">
                {item.name}
              </p>
              <p className="text-[15px] md:text-[20px]">{item.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="main px-[20px] md:px-[100px] space-y-[40px] mb-[100px]">
        <form onSubmit={(e) => navigate("/home", { state: { customerID } })}>
          <p className="font-bold md:text-[40px] text-[25px] mt-[-90px]">
            Thông tin khách hàng
          </p>
          <div className="relative border-[2px] border-pink-500 p-6 md:w-[900px] w-[400px] mt-[40px] rounded-md mx-auto">
            <label
              className="absolute -top-6 px-3 left-8 bg-white md:text-[30px] text-[20px] text-pink-500 font-bold"
              htmlFor="customerID"
            >
              Mã khách hàng
            </label>
            <input
              id="customerID"
              type="text"
              value={customerID}
              className="border-none focus:outline-none w-full text-[30px]"
              placeholder="Nhập mã khách hàng"
              name="customerID"
              onChange={(e) => setCustomerID(e.target.value)}
            ></input>
          </div>
        </form>
        <div>
          <p className="md:text-[40px] text-[25px] font-bold mb-[40px]">
            Hướng dẫn lấy mã
          </p>
          <img
            src={item.billImage}
            className="w-[200px] h-[200px] md:w-[600px] md:h-[400px] object-cover mx-auto"
          />
        </div>
        <button
          className="bg-pink-500 md:text-[30px] text-[25px] text-white font-bold p-3 rounded-md md:w-[800px] w-[400px] mx-auto justify-center flex items-center mt-[100px]"
          onClick={() => navigate("/bill", { state: { customerID } })}
        >
          Tiếp tục
        </button>
      </div>
      <Footer />
    </>
  );
};

export default BillInternet;
