import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Carousel from "react-multi-carousel";
import vna from "../../assets/vna.jpg";
import qa1 from "../../assets/qa1.jpg";
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
  { title: "Người già", selected: true },
  {
    title: "Người lớn",
    selected: false,
  },
  { title: "Trẻ em", selected: false },
];
const Cloth = () => {
  const navigate = useNavigate();
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
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/more-features")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Quần áo</h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main mt-[40px] px-[20px] md:px-[100px] space-y-[40px] mb-[100px]">
        <p className="md:text-[40px] text-[25px]">Phân loại</p>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          responsive={responsive}
          containerClass="carousel-container"
          className="flex items-center"
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
        <div className="flex-col flex items-center justify-center space-y-[40px]">
          <div className="grid grid-cols-4 gap-[20px]">
            <div className="rounded-xl bg-white shadow-lg w-[250px] h-fit space-y-[10px] relative">
              <div className="flex items-center justify-between">
                <div className="rounded-xl w-full relative">
                  <img src={qa1} alt="product" className="rounded-xl" />
                  <div className="bg-red-400 p-1 text-white text-center rounded-md absolute top-2 right-2">
                    <p className="md:text-[15px] text-white">-20%</p>
                  </div>
                  <p className="md:text-[20px] text-gray-700 my-[10px] ml-[10px]">
                    Quần áo 1
                  </p>
                  <div className="flex items-center space-x-[20px] ml-[10px]">
                    <p className="font-bold text-[25px]">16$</p>
                    <p className="text-[25px] line-through">12$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-lg w-[250px] h-fit space-y-[10px] relative">
              <div className="flex items-center justify-between">
                <div className="rounded-xl w-full relative">
                  <img src={qa1} alt="product" className="rounded-xl" />
                  <div className="bg-red-400 p-1 text-white text-center rounded-md absolute top-2 right-2">
                    <p className="md:text-[15px] text-white">-20%</p>
                  </div>
                  <p className="md:text-[20px] text-gray-700 my-[10px] ml-[10px]">
                    Quần áo 1
                  </p>
                  <div className="flex items-center space-x-[20px] ml-[10px]">
                    <p className="font-bold text-[25px]">16$</p>
                    <p className="text-[25px] line-through">12$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-lg w-[250px] h-fit space-y-[10px] relative">
              <div className="flex items-center justify-between">
                <div className="rounded-xl w-full relative">
                  <img src={qa1} alt="product" className="rounded-xl" />
                  <div className="bg-red-400 p-1 text-white text-center rounded-md absolute top-2 right-2">
                    <p className="md:text-[15px] text-white">-20%</p>
                  </div>
                  <p className="md:text-[20px] text-gray-700 my-[10px] ml-[10px]">
                    Quần áo 1
                  </p>
                  <div className="flex items-center space-x-[20px] ml-[10px]">
                    <p className="font-bold text-[25px]">16$</p>
                    <p className="text-[25px] line-through">12$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-lg w-[250px] h-fit space-y-[10px] relative">
              <div className="flex items-center justify-between">
                <div className="rounded-xl w-full relative">
                  <img src={qa1} alt="product" className="rounded-xl" />
                  <div className="bg-red-400 p-1 text-white text-center rounded-md absolute top-2 right-2">
                    <p className="md:text-[15px] text-white">-20%</p>
                  </div>
                  <p className="md:text-[20px] text-gray-700 my-[10px] ml-[10px]">
                    Quần áo 1
                  </p>
                  <div className="flex items-center space-x-[20px] ml-[10px]">
                    <p className="font-bold text-[25px]">16$</p>
                    <p className="text-[25px] line-through">12$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-[20px]">
            <div className="rounded-xl bg-white shadow-lg w-[250px] h-fit space-y-[10px] relative">
              <div className="flex items-center justify-between">
                <div className="rounded-xl w-full relative">
                  <img src={qa1} alt="product" className="rounded-xl" />
                  <div className="bg-red-400 p-1 text-white text-center rounded-md absolute top-2 right-2">
                    <p className="md:text-[15px] text-white">-20%</p>
                  </div>
                  <p className="md:text-[20px] text-gray-700 my-[10px] ml-[10px]">
                    Quần áo 1
                  </p>
                  <div className="flex items-center space-x-[20px] ml-[10px]">
                    <p className="font-bold text-[25px]">16$</p>
                    <p className="text-[25px] line-through">12$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-lg w-[250px] h-fit space-y-[10px] relative">
              <div className="flex items-center justify-between">
                <div className="rounded-xl w-full relative">
                  <img src={qa1} alt="product" className="rounded-xl" />
                  <div className="bg-red-400 p-1 text-white text-center rounded-md absolute top-2 right-2">
                    <p className="md:text-[15px] text-white">-20%</p>
                  </div>
                  <p className="md:text-[20px] text-gray-700 my-[10px] ml-[10px]">
                    Quần áo 1
                  </p>
                  <div className="flex items-center space-x-[20px] ml-[10px]">
                    <p className="font-bold text-[25px]">16$</p>
                    <p className="text-[25px] line-through">12$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-lg w-[250px] h-fit space-y-[10px] relative">
              <div className="flex items-center justify-between">
                <div className="rounded-xl w-full relative">
                  <img src={qa1} alt="product" className="rounded-xl" />
                  <div className="bg-red-400 p-1 text-white text-center rounded-md absolute top-2 right-2">
                    <p className="md:text-[15px] text-white">-20%</p>
                  </div>
                  <p className="md:text-[20px] text-gray-700 my-[10px] ml-[10px]">
                    Quần áo 1
                  </p>
                  <div className="flex items-center space-x-[20px] ml-[10px]">
                    <p className="font-bold text-[25px]">16$</p>
                    <p className="text-[25px] line-through">12$</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white shadow-lg w-[250px] h-fit space-y-[10px] relative">
              <div className="flex items-center justify-between">
                <div className="rounded-xl w-full relative">
                  <img src={qa1} alt="product" className="rounded-xl" />
                  <div className="bg-red-400 p-1 text-white text-center rounded-md absolute top-2 right-2">
                    <p className="md:text-[15px] text-white">-20%</p>
                  </div>
                  <p className="md:text-[20px] text-gray-700 my-[10px] ml-[10px]">
                    Quần áo 1
                  </p>
                  <div className="flex items-center space-x-[20px] ml-[10px]">
                    <p className="font-bold text-[25px]">16$</p>
                    <p className="text-[25px] line-through">12$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cloth;
