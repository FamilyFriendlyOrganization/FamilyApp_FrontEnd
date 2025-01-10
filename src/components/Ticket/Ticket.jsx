import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { IoMdCalendar } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import Footer from "../Footer";
import gd1 from "../../assets/gd1.jpg";
import Carousel from "react-multi-carousel";
import { PiHouseLineBold } from "react-icons/pi";
import "./Ticket.scss";
import vna from "../../assets/vna.jpg";
import vtm from "../../assets/vtm.jpg";
import vja from "../../assets/vja.png";
import vta from "../../assets/vta.jpg";
import vmb from "../../assets/vemaybay.jpg";
import ava1 from "../../assets/ava1.jpg";
import ava2 from "../../assets/ava2.jpg";
import ava3 from "../../assets/ava3.jpg";
import ava4 from "../../assets/ava5.jpg";
import ava5 from "../../assets/ava6.jpg";
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

const data = [
  {
    avatar: ava1,
    name: "Nhi",
    time: "2h",
    content: "Bay đến muôn nơi, không lo về giá!",
    image: vna,
  },
  {
    avatar: ava2,
    name: "Admin",
    time: "3h",
    content: "Nhanh tay săn vé, về tay tiền triệu!",
    image: vtm,
  },
  {
    avatar: ava3,
    name: "Tú",
    time: "4h",
    content: "Hòa chung câu ca, phiêu du đất trời!",
    image: vja,
  },
  {
    avatar: ava4,
    name: "Thịnh",
    time: "4h",
    content: "Gia đình đang chờ, về nhà nhanh thôi!",
    image: vta,
  },
  {
    avatar: ava5,
    name: "Tùng",
    time: "4h",
    content: "Tết đến xuân về, rộn ràng niềm vui!",
    image: vmb,
  },
];

const Ticket = () => {
  const navigate = useNavigate();
  const [startLocation, setStartLocation] = useState("Thành phố Hồ Chí Minh");
  const [reachLocation, setReachLocation] = useState("Hà Nội");
  const [time, setTime] = useState("T6, 10/01/2025");
  const [people, setPeople] = useState("1 phòng, 2 người lớn");
  const [dataProps, setDataProps] = useState({
    startLocation,
    reachLocation,
    time,
    people,
  });
  return (
    <div className="bg-gray-100">
      <div className="flex items-center w-full justify-between bg-login bg-cover bg-no-repeat h-[250px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/more-features")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Đặt vé</h1>
        </div>
      </div>
      <div className="main flex flex-col items-center justify-center mt-[-50px] space-y-[20px] mb-[30px]">
        <div className="bg-white shadow-lg rounded-xl p-6 w-11/12 max-w-lg">
          <h2 className="text-xl font-bold text-pink-500 text-center mb-6">
            Vé máy bay
          </h2>
          <div className="space-y-2 md:ml-[20px] md:mr-[20px]">
            <div className="flex gap-x-[30px] items-center md: ml-[15px]">
              <span className="font-bold w-[50px]">Từ</span>
              <span className="text-black font-bold">SGN</span>
              <input
                type="text"
                placeholder="Điền nơi bắt đầu"
                value={startLocation}
                className="focus:outline-none"
                onChange={(e) => setStartLocation(e.target.value)}
              />
            </div>
            <div className="border-[0.5px] border-gray-300 mt-[20px] w-full " />
            <div className="flex gap-x-[30px] items-center">
              <span className="font-bold w-[50px] md: ml-[15px]">Đến</span>
              <span className="text-black font-bold">HAN</span>
              <input
                type="text"
                placeholder="Điền nơi bạn muốn đến"
                value={reachLocation}
                className="focus:outline-none"
                onChange={(e) => setReachLocation(e.target.value)}
              />
            </div>
            <div className="border-[0.5px] border-gray-300 mt-[20px] w-full " />
            <div className="flex gap-x-[30px] items-center">
              <IoMdCalendar className="text-black md:text-[30px] w-[65px]" />
              <input
                type="text"
                placeholder="Điền thời gian khởi hành"
                value={time}
                className="focus:outline-none font-bold"
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="border-[0.5px] border-gray-300 mt-[20px] w-full" />
            <div className="flex gap-x-[30px] items-center">
              <FiUser className="text-black md:text-[30px] w-[65px]" />
              <input
                type="text"
                placeholder="Điền số phòng, số người đi cùng"
                value={people}
                className="focus:outline-none font-bold"
                onChange={(e) => setPeople(e.target.value)}
              />
            </div>
            <div className="border-[0.5px] border-gray-300 mt-[20px] w-full " />
          </div>
          <button
            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-lg hover:bg-pink-600 mt-[30px]"
            onClick={() => navigate("/find-result", { state: { dataProps } })}
          >
            Tìm kiếm
          </button>
        </div>
        <div
          className="bg-white shadow-lg rounded-xl p-2 w-11/12 max-w-lg flex items-center justify-center gap-x-[25px] cursor-pointer"
          onClick={() => navigate("/hotel", { state: { dataProps } })}
        >
          <PiHouseLineBold className="font-bold text-red-500 md:text-[35px] " />
          <p className="font-bold md:text-[30px]">Khách sạn</p>
        </div>
      </div>
      <div className="px-[20px] md:px-[100px]">
        <p className="font-bold md:text-[30px] text-[25px]">
          Tin tức dành cho bạn
        </p>
        <div className="flex items-center justify-between md:mt-[30px] mt-[20px]">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            responsive={responsive}
            containerClass="carousel-container"
          >
            {data.map((item, index) => {
              return (
                <div
                  className="rounded-xl bg-white shadow-lg p-4 w-[250px] h-fit space-y-[10px]"
                  key={index}
                >
                  <div className="flex items-center gap-x-[20px] ">
                    <img
                      src={item.avatar}
                      className="w-[50px] h-[50px] object-cover rounded-full"
                    />
                    <div className="grid grid-cols-1">
                      <p className="font-bold text-[20px]">{item.name}</p>
                      <p className="text-[15px]">{item.time}</p>
                    </div>
                  </div>
                  <p className="text-[15px] break-words">{item.content}</p>
                  <img
                    src={item.image}
                    className="w-[220px] h-[240px] mx-auto object-cover cursor-pointer"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
      <div className="bg-blue-100 w-full h-[200px]  mt-[-150px]" />
      <Footer />
    </div>
  );
};

export default Ticket;
