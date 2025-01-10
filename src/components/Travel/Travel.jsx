import React from "react";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import travel1 from "../../assets/la.jpg";
import travel2 from "../../assets/madrid.jpg";
import travel3 from "../../assets/dublin.jpg";
import travel4 from "../../assets/lima.png";
import travel5 from "../../assets/bogota.jpg";

const data = [
  {
    name: "Los Angeles",
    price: "$500",
    description: "Khám phá những điều mới và những cuộc hành trình mới",
    image: travel1,
  },
  {
    name: "Madrid",
    price: "$350",
    description: "Khám phá những điều mới và những cuộc hành trình mới",
    image: travel2,
  },
  {
    name: "Dublin",
    price: "$600",
    description: "Khám phá những điều mới và những cuộc hành trình mới",
    image: travel3,
  },
  {
    name: "Lima",
    price: "$700",
    description: "Khám phá những điều mới và những cuộc hành trình mới",
    image: travel4,
  },
  {
    name: "Bogotá",
    price: "$860",
    description: "Khám phá những điều mới và những cuộc hành trình mới",
    image: travel5,
  },
];

const Travel = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px] md:mb-[-50px] mb-[-70px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/more-features")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Du lịch</h1>
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
      <div className="main md:mt-[80px] px-[20px] md:px-[100px] space-y-5 mb-[100px]">
        <p className="font-bold md:text-[35px] text-[25px]">
          Địa điểm nổi tiếng
        </p>
        {data.map((des) => {
          return (
            <div
              key={des.name}
              className="flex flex-col md:flex-row items-center rounded-3xl md:gap-x-[30px] border-black border-2"
            >
              <img
                src={des.image}
                className="rounded-s-3xl w-full md:w-[300px] h-[200px] object-cover"
              />
              <div className="flex flex-col space-y-5 p-5 w-full">
                <div className="flex justify-between items-center">
                  <p className="font-bold md:text-[40px] text-[20px]">
                    {des.name}
                  </p>
                  <div className="bg-black rounded-full px-4 py-2">
                    <p className="md:text-[30px] text-[15px] font-bold text-white">
                      {des.price}
                    </p>
                  </div>
                </div>
                <p className="md:text-[20px] text-[15px] text-gray-400">
                  {des.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Travel;
