import React, { useState } from "react";
import { IoIosArrowBack, IoMdCalendar } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import { FiUser } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import Carousel from "react-multi-carousel";
import { IoWaterOutline } from "react-icons/io5";
import "./Hotel.scss";
import test from "../../assets/dublin.jpg";
import ks1 from "../../assets/ks2.jpg";
import ks2 from "../../assets/ks10.jpg";
import ks3 from "../../assets/ks11.jpg";
import ks4 from "../../assets/ks12.jpg";
import { IoMdStarOutline } from "react-icons/io";
import "./Hotel.scss";
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

const initialBillTitle = [
  { title: "Vũng Tàu", selected: true, image: ks1 },
  {
    title: "Đà Nẵng",
    selected: false,
    image: ks2,
  },
  { title: "Đà Lạt", selected: false, image: ks3 },
  { title: "Nha Trang", selected: false, image: ks4 },
];
const Hotel = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [reachLocation, setReachLocation] = useState("Vũng Tàu");
  const [time, setTime] = useState("T6, 10/01/2025");
  const [people, setPeople] = useState("1 phòng, 2 người lớn");
  const [dataProps, setDataProps] = useState({
    reachLocation,
    time,
    people,
  });
  const [billTitle, setBillTitle] = useState(initialBillTitle);

  const handleSelect = (index) => {
    const newBillTitle = billTitle.map((item, i) => {
      if (i === index) {
        return { ...item, selected: !item.selected };
      }
      return { ...item, selected: false };
    });
    setBillTitle(newBillTitle);
    setSelectedIndex(index);
  };

  return (
    <>
      <div className="bg-gray-100 mb-[50px]">
        <div className="flex items-center w-full justify-between bg-login bg-cover bg-no-repeat h-[220px] px-[20px] md:px-[100px]">
          <div className="flex items-center space-x-10">
            <div className="rounded-full bg-black flex items-center p-1">
              <IoIosArrowBack
                className="text-white text-[30px] md:text-[45px] cursor-pointer"
                onClick={() => navigate("/ticket")}
              />
            </div>
            <h1 className="text-white text-[25px] md:text-[35px]">Khách sạn</h1>
          </div>
        </div>
        <div className="main flex flex-col items-center mt-[-50px] space-y-[20px]">
          <div className="bg-white shadow-lg rounded-xl p-6 w-11/12 max-w-lg">
            <div className="space-y-2 md:ml-[20px] md:mr-[20px]">
              <div className="flex gap-x-[30px] items-center md: ml-[15px]">
                <div className="flex flex-col space-y-[10px]">
                  <p className=" md:text-[20px] text-[25px] ">ĐIỂM ĐẾN</p>
                  <div className="flex items-center">
                    <CiLocationOn className="text-black md:text-[30px] w-[65px]" />
                    <input
                      type="text"
                      placeholder="Điền nơi bạn muốn đến"
                      value={reachLocation}
                      className="focus:outline-none font-bold"
                      onChange={(e) => setReachLocation(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-gray-300 mt-[20px] w-full " />
              <div className="flex gap-x-[30px] items-center md: ml-[15px]">
                <div className="flex flex-col space-y-[10px]">
                  <p className=" md:text-[20px] text-[25px] ">CHỌN NGÀY</p>
                  <div className="flex items-center">
                    <IoMdCalendar className="text-black md:text-[30px] w-[65px]" />
                    <input
                      type="text"
                      placeholder="Điền nơi bạn muốn đến"
                      value={time}
                      className="focus:outline-none font-bold"
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-gray-300 mt-[20px] w-full " />
              <div className="flex gap-x-[30px] items-center md: ml-[15px]">
                <div className="flex flex-col space-y-[10px]">
                  <p className=" md:text-[20px] ">PHÒNG VÀ KHÁCH</p>
                  <div className="flex items-center">
                    <FiUser className="text-black md:text-[30px] w-[65px]" />
                    <input
                      type="text"
                      placeholder="Điền nơi bạn muốn đến"
                      value={people}
                      className="focus:outline-none font-bold"
                      onChange={(e) => setPeople(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="border-[0.5px] border-gray-300 mt-[20px] w-full " />
            </div>
            <button
              className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 mt-[30px]"
              onClick={() =>
                navigate("/find-hotel", { state: { reachLocation } })
              }
            >
              Tìm kiếm
            </button>
          </div>
          <p className="md:text-[40px] font-bold ">Khách sạn giá tốt</p>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            responsive={responsive}
            containerClass="carousel-container"
          >
            {billTitle.map((item, index) => (
              <div
                key={index}
                className={`carousel-item rounded-full border-[2px] p-[10px] w-full cursor-pointer ${
                  item.selected ? "border-pink-600" : "border-black bg-gray-100"
                }`}
                onClick={() => handleSelect(index)}
              >
                <div className="flex items-center justify-center">
                  <p
                    className={`md:text-[30px] text-[20px] text-center ${
                      item.selected ? "text-pink-600" : "text-black"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            responsive={responsive}
            containerClass="carousel-container"
          >
            {selectedIndex === 0 && (
              <div>
                <div
                  className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative cursor-pointer"
                  onClick={() => navigate("/room-detail")}
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
            )}
            {selectedIndex === 1 && (
              <div className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative">
                <div
                  className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative cursor-pointer"
                  onClick={() => navigate("/room-detail")}
                >
                  <div className="rounded-l-xl relative">
                    <img src={ks2} className="w-[600px] h-[200px] rounded-xl" />
                    <div className="absolute top-[120px] right-[20px] bg-white shadow-lg rounded-xl p-[10px] w-[220px] flex flex-col space-y-[5px]">
                      <div className="flex items-center justify-between">
                        <p className="font-bold md:text-[20px] text-red-600 ml-[20px]">
                          -54%
                        </p>
                        <p className="md:text-[20px] text-gray-400 line-through">
                          11,497,716đ
                        </p>
                      </div>
                      <p className="font-bold md:text-[20px] text-red-600 text-right">
                        5,147,247đ
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
                      Melia Vinpearl Danang Riverfront
                    </p>
                    <p className="md:text-[30px] px-[30px] mt-[5px]">
                      341 Trần Hưng Đạo, Đà Nẵng
                    </p>
                    <div className="px-[30px] flex items-center mt-[10px] space-x-[30px]">
                      <div className="rounded-md bg-blue-600 p-1 text-white md:text-[20px] font-bold">
                        10/10
                      </div>
                      <p className="font-bold md:text-[20px]">
                        Dịch vụ xuất sắc
                      </p>
                      <p className=" md:text-[20px]">(682 lượt đánh giá)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedIndex === 2 && (
              <div className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative">
                <div className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative">
                  <div
                    className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative cursor-pointer"
                    onClick={() => navigate("/room-detail")}
                  >
                    <div className="rounded-l-xl relative">
                      <img
                        src={ks3}
                        className="w-[600px] h-[200px] rounded-xl"
                      />
                      <div className="absolute top-[120px] right-[20px] bg-white shadow-lg rounded-xl p-[10px] w-[220px] flex flex-col space-y-[5px]">
                        <div className="flex items-center justify-between">
                          <p className="font-bold md:text-[20px] text-red-600 ml-[20px]">
                            -54%
                          </p>
                          <p className="md:text-[20px] text-gray-400 line-through">
                            12,123,448đ
                          </p>
                        </div>
                        <p className="font-bold md:text-[20px] text-red-600 text-right">
                          5,847,247đ
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
                        Akama Boutique Đà Lạt
                      </p>
                      <p className="md:text-[30px] px-[30px] mt-[5px]">
                        36 Đường Trần Đại Nghĩa, Đà Lạt
                      </p>
                      <div className="px-[30px] flex items-center mt-[10px] space-x-[30px]">
                        <div className="rounded-md bg-blue-600 p-1 text-white md:text-[20px] font-bold">
                          10/10
                        </div>
                        <p className="font-bold md:text-[20px]">
                          Dịch vụ xuất sắc
                        </p>
                        <p className=" md:text-[20px]">(324 lượt đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {selectedIndex === 3 && (
              <div className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative">
                <div className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative">
                  <div
                    className="rounded-xl bg-white shadow-lg w-[600px] h-[450px] relative cursor-pointer"
                    onClick={() => navigate("/room-detail")}
                  >
                    <div className="rounded-l-xl relative">
                      <img
                        src={ks4}
                        className="w-[600px] h-[200px] rounded-xl"
                      />
                      <div className="absolute top-[120px] right-[20px] bg-white shadow-lg rounded-xl p-[10px] w-[220px] flex flex-col space-y-[5px]">
                        <div className="flex items-center justify-between">
                          <p className="font-bold md:text-[20px] text-red-600 ml-[20px]">
                            -40%
                          </p>
                          <p className="md:text-[20px] text-gray-400 line-through">
                            3,720,745đ
                          </p>
                        </div>
                        <p className="font-bold md:text-[20px] text-red-600 text-right">
                          2,275,124đ
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
                        Beautiful Panorama Nha Trang
                      </p>
                      <p className="md:text-[30px] px-[30px] mt-[5px]">
                        02 Nguyễn Thị Minh Khai, Nha Trang
                      </p>
                      <div className="px-[30px] flex items-center mt-[10px] space-x-[30px]">
                        <div className="rounded-md bg-blue-600 p-1 text-white md:text-[20px] font-bold">
                          10/10
                        </div>
                        <p className="font-bold md:text-[20px]">Nên ghé thăm</p>
                        <p className=" md:text-[20px]">((549 lượt đánh giá)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hotel;
