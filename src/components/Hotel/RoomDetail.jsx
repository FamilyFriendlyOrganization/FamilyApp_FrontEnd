import React from "react";
import { IoIosArrowBack, IoMdStarOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import test from "../../assets/dublin.jpg";
import { GrMapLocation } from "react-icons/gr";
import { PiMapPinArea } from "react-icons/pi";
import { LuSquareStack } from "react-icons/lu";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import Footer from "../Footer";
const RoomDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { dataProps } = location.state || {};

  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px] md:mb-[-70px] mb-[-90px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">
            Chi tiết phòng
          </h1>
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
      <div className="main mt-[70px] mb-[100px]">
        <img src={test} className="md:h-[300px] w-full h-[100px]" />
        <div className="flex items-center gap-x-[20px] px-[20px] md:px-[100px] mt-[40px]">
          <p className="font-bold md:text-[35px] text-[25px]">Pegasus Hotel</p>
          <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
          <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
          <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
          <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
          <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
        </div>
        <div className="flex items-center mt-[20px] space-x-[30px] px-[20px] md:px-[100px]">
          <div className="rounded-md bg-blue-600 p-1 text-white md:text-[20px] font-bold">
            10/10
          </div>
          <p className="font-bold md:text-[20px]">Tuyệt vời lắm</p>
          <p className=" md:text-[20px]">(302 lượt đánh giá)</p>
        </div>
        <div className="flex items-center px-[20px] md:px-[100px] mt-[20px] gap-x-[20px]">
          <PiMapPinArea className="md:text-[40px] text-[25px]" />
          <p className="md:text-[30px] px-[30px]">6 Trần Quý Cáp, Vũng Tàu</p>
        </div>
        <div className="flex items-center px-[20px] md:px-[80px] mt-[20px] gap-x-[20px]">
          <p className="md:text-[30px] px-[20px]">Ngày nhận - Trả phòng:</p>
          <p className="md:text-[30px] px-[20px] font-bold">T6, 10/01/2025</p>
        </div>
        <div className="flex items-center px-[20px] md:px-[80px] mt-[20px] gap-x-[20px]">
          <p className="md:text-[30px] px-[20px]">Số phòng - Số khách:</p>
          <p className="md:text-[30px] px-[20px] font-bold">
            1 phòng, 2 người lớn
          </p>
        </div>
        <div className="flex items-center px-[20px] md:px-[100px] mt-[20px] gap-x-[20px]">
          <GrMapLocation className="md:text-[40px] text-[25px]" />
          <p className="md:text-[30px] px-[30px] font-bold">
            Địa điểm quanh đây
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-[20px] ml-[160px] mt-[20px]">
          <div className="flex items-center justify-between">
            <p className="md:text-[30px] px-[30px]">Khu du lịch san hô xanh</p>
            <p className="md:text-[30px] px-[30px]">0.3 km</p>
          </div>
        </div>
        <div className="border-[0.5px] border-gray-300 mt-[20px] md:max-w-[1250px] md:ml-[190px]" />
        <div className="grid grid-cols-1 space-y-[20px] ml-[160px] mt-[20px]">
          <div className="flex items-center justify-between">
            <p className="md:text-[30px] px-[30px]">Blue Coral Beach</p>
            <p className="md:text-[30px] px-[30px]">0.5 km</p>
          </div>
        </div>
        <div className="border-[0.5px] border-gray-300 mt-[20px] md:max-w-[1250px] md:ml-[190px]" />
        <div className="rounded-xl bg-white shadow-lg w-[800px] h-[800px] relative mt-[70px] mx-auto">
          <div className="rounded-l-xl relative">
            <img src={test} className="w-[800px] h-[200px] rounded-xl" />
            <p className="font-bold md:text-[30px] text-[25px] ml-[40px] mt-[20px]">
              Phòng 3 deluxe, 1 giường ngủ
            </p>
            <div className="flex items-center gap-x-[20px] ml-[40px] mt-[20px]">
              <HiOutlineChartSquareBar className="text-[35px] " />
              <p className="md:text-[30px] text-[25px]">37m2</p>
              <p className="md:text-[30px] text-[25px]">2 người lớn</p>
              <p className="md:text-[30px] text-[25px]">2 giường đơn lớn</p>
            </div>
            <p className="md:text-[30px] text-[25px] font-bold ml-[40px] mt-[20px]">
              Tiện ích
            </p>
            <div className="grid grid-cols-1  ml-[80px] mt-[10px] space-y-[10px]">
              <div className="flex items-center gap-x-[10px]">
                <div className="rounded-full bg-black w-[10px] h-[10px]"></div>
                <p className="md:text-[25px] text-[20px]">Nhận phòng sớm</p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div className="rounded-full bg-black w-[10px] h-[10px]"></div>
                <p className="md:text-[25px] text-[20px]">
                  Bãi đậu xe miễn phí
                </p>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div className="rounded-full bg-black w-[10px] h-[10px]"></div>
                <p className="md:text-[25px] text-[20px]">Bữa sáng miễn phí</p>
              </div>
            </div>
          </div>
          <div className="border-[0.5px] border-gray-300 mt-[20px] md:max-w-[1250px] mx-auto" />
          <div className="flex flex-col space-y-[20px] mt-[20px] ml-[500px]">
            <div className="rounded-md bg-orange-600 px-2 py-1 text-white md:text-[20px] font-bold w-fit ml-[180px]">
              -48%
            </div>
            <div className="flex items-center space-x-[20px]">
              <p className="md:text-[20px] text-gray-400 line-through text-right">
                21,123,212đ
              </p>
              <p className="font-bold md:text-[20px] text-red-600 text-right">
                12,487,126đ
              </p>
            </div>
            <p className="md:text-[13px] text-gray-400 text-left">
              Tổng giá 1 phòng x 1 đêm, đã bao gồm các phí
            </p>
          </div>
          <button
            className="w-[500px] mx-auto flex items-center justify-center bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 mt-[30px]"
            onClick={() => navigate("/result")}
          >
            Đặt phòng
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RoomDetail;
