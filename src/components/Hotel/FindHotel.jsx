import React from "react";
import { IoIosArrowBack, IoMdStarOutline } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import "./Hotel.scss";
import test from "../../assets/dublin.jpg";
import ks1 from "../../assets/ks2.jpg";
const FindHotel = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reachLocation } = location.state || {};

  let hotelInfo = {
    img: "",
    name: "",
    address: "",
    discount: "",
    price: "",
    originalPrice: "",
  };

  switch (reachLocation) {
    case "Vũng Tàu":
      hotelInfo = {
        img: vungTauImg,
        name: "Vũng Tàu Paradise Hotel",
        address: "6 Trần Quý Cáp, Vũng Tàu",
        discount: "-48%",
        price: "1,200,000đ",
        originalPrice: "2,000,000đ",
      };
      break;
    case "Đà Lạt":
      hotelInfo = {
        img: daLatImg,
        name: "Đà Lạt Dream Hotel",
        address: "12 Lê Hồng Phong, Đà Lạt",
        discount: "-40%",
        price: "800,000đ",
        originalPrice: "1,300,000đ",
      };
      break;
    case "Hà Nội":
      hotelInfo = {
        img: haNoiImg,
        name: "Hà Nội Elegance Hotel",
        address: "20 Lý Thái Tổ, Hà Nội",
        discount: "-35%",
        price: "1,500,000đ",
        originalPrice: "2,300,000đ",
      };
      break;
    case "Hồ Chí Minh":
      hotelInfo = {
        img: hoChiMinhImg,
        name: "Sài Gòn Luxury Hotel",
        address: "45 Nguyễn Huệ, Hồ Chí Minh",
        discount: "-30%",
        price: "1,800,000đ",
        originalPrice: "2,500,000đ",
      };
      break;
    default:
      hotelInfo = {
        img: vungTauImg,
        name: "Khách sạn không xác định",
        address: "Địa chỉ không xác định",
        discount: "0%",
        price: "0đ",
        originalPrice: "0đ",
      };
  }
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px] md:mb-[-70px] mb-[-90px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/hotel")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">
            Khách sạn - {reachLocation}
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
      <div className="main px-[20px] md:px-[100px] space-y-[40px]">
        <p className="md:text-[40px] text-[25px] font-bold">
          Kết quả tìm kiếm phù hợp
        </p>
        <div>
          <div
            className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative cursor-pointer"
            onClick={() =>
              navigate("/room-detail", { state: { reachLocation } })
            }
          >
            <div className="rounded-l-xl relative">
              <img src={ks1} className="w-[600px] h-[200px] rounded-xl" />
              <div className="absolute top-[120px] right-[20px] bg-white shadow-lg rounded-xl p-[10px] w-[220px] flex flex-col space-y-[5px]">
                <div className="flex items-center justify-between">
                  <p className="font-bold md:text-[20px] text-red-600 ml-[20px]">
                    -48%
                  </p>
                  <p className="md:text-[20px] text-gray-400 line-through">
                    21,123,212đ
                  </p>
                </div>
                <p className="font-bold md:text-[20px] text-red-600 text-right">
                  12,487,126đ
                </p>
                <p className=" md:text-[15px] text-gray-400 text-right">
                  Phòng/đêm
                </p>
                <p className=" md:text-[15px] text-gray-400 text-right">
                  Giá trên đã bao gồm các phí
                </p>
              </div>
              <div className="flex items-center space-x-[10px] px-[22px] mt-[20px]">
                <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
                <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
                <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
                <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
                <IoMdStarOutline className="font-bold text-red-400 text-[40px]" />
              </div>
              <p className="font-bold md:text-[30px] px-[30px] mt-[5px]">
                Pegasus Hotel
              </p>
              <p className="md:text-[30px] px-[30px] mt-[5px]">
                6 Trần Quý Cáp, Vũng Tàu
              </p>
              <div className="px-[30px] flex items-center mt-[10px] space-x-[30px]">
                <div className="rounded-md bg-blue-600 p-1 text-white md:text-[20px] font-bold">
                  10/10
                </div>
                <p className="font-bold md:text-[20px]">Tuyệt vời lắm</p>
                <p className=" md:text-[20px]">(302 lượt đánh giá)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindHotel;
