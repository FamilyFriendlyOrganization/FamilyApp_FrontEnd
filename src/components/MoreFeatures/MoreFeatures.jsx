import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { FcMoneyTransfer } from "react-icons/fc";
import { FiGift } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import { IoIosArrowBack } from "react-icons/io";
import { MdFamilyRestroom } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { TbMoneybag } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { FaPlane } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaUmbrellaBeach } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { IoWaterOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import Footer from "../Footer";
const MoreFeatures = () => {
  const navigate = useNavigate();
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
          <h1 className="text-white text-[25px] md:text-[35px]">
            Các tính năng khác
          </h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main px-[20px] md:px-[100px] mt-[40px] space-y-[40px] mb-[100px]">
        <div>
          <p className="font-bold md:text-[40px] text-[25px] mb-[40px]">
            Dịch vụ được ghim
          </p>
          <div className="grid grid-cols-4 gap-y-10 md:gap-x-40 items-center justify-items-center gap-x-10">
            <div className="flex flex-col items-center space-y-2">
              <TbMoneybag
                className="text-red-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/money")}
              />
              <p className="text-gray-500 text-[20px]">Quản lý chi tiêu</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaRegCalendarAlt
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/calendar")}
              />
              <p className="text-gray-500 text-[20px]">Đặt lịch</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GiReceiveMoney
                className="text-green-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/receive")}
              />
              <p className="text-gray-500 text-[20px]">Nhận tiền</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FcMoneyTransfer
                className="text-[50px] cursor-pointer"
                onClick={() => navigate("/transfer")}
              />
              <p className="text-gray-500 text-[20px]">Chuyển tiền</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaUserPlus
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/add-family")}
              />
              <p className="text-gray-500 text-[20px]">Thêm thành viên</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FiGift
                className="text-purple-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/give-gift")}
              />
              <p className="text-gray-500 text-[20px]">Tặng quà</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaUserGroup
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/manage-family")}
              />
              <p className="text-gray-500 text-[20px]">Gia đình</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaPlane
                className="text-[50px] cursor-pointer text-blue-600"
                onClick={() => navigate("/ticket")}
              />
              <p className="text-[20px] ">Đặt vé máy bay</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold md:text-[40px] text-[25px] mb-[40px]">
            Dịch vụ phổ biến
          </p>
          <div className="grid grid-cols-4 gap-y-10 md:gap-x-40 items-center justify-items-center gap-x-10">
            <div className="flex flex-col items-center space-y-2">
              <TbMoneybag
                className="text-red-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/money")}
              />
              <p className="text-gray-500 text-[20px]">Quản lý chi tiêu</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaRegCalendarAlt
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/calendar")}
              />
              <p className="text-gray-500 text-[20px]">Đặt lịch</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GiReceiveMoney
                className="text-green-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/receive")}
              />
              <p className="text-gray-500 text-[20px]">Nhận tiền</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FcMoneyTransfer
                className="text-[50px] cursor-pointer"
                onClick={() => navigate("/transfer")}
              />
              <p className="text-gray-500 text-[20px]">Chuyển tiền</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaUmbrellaBeach
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/travel")}
              />
              <p className="text-gray-500 text-[20px]">Du lịch</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GiClothes
                className="text-purple-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/cloths")}
              />
              <p className="text-gray-500 text-[20px]">Quần áo</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <BiSolidMoviePlay
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/film")}
              />
              <p className="text-gray-500 text-[20px]">Xem phim</p>
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold md:text-[40px] text-[25px] mb-[40px]">
            Thanh toán hóa đơn
          </p>
          <div className="grid grid-cols-4 gap-y-10 md:gap-x-40 items-center justify-items-center gap-x-10">
            <div className="flex flex-col items-center space-y-2">
              <MdOutlineElectricBolt
                className="text-red-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/bill-electric")}
              />
              <p className="text-gray-500 text-[20px]">Hóa đơn tiền điện</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaWifi
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/internet")}
              />
              <p className="text-gray-500 text-[20px]">Hóa đơn tiền mạng</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <IoWaterOutline
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/water")}
              />
              <p className="text-gray-500 text-[20px]">Hóa đơn tiền nước</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaUserGraduate
                className="text-[50px] cursor-pointer text-purple-600"
                onClick={() => navigate("/tuition")}
              />
              <p className="text-gray-500 text-[20px]">Hóa đơn học phí</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoreFeatures;
