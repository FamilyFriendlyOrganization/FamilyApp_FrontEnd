import React from "react";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer";
import icon1 from "../../../assets/dhqg1.png";
import icon2 from "../../../assets/ct.jpg";
import icon3 from "../../../assets/uef.png";
import icon4 from "../../../assets/uth.png";
import maDHQG from "../../../assets/msDHQG.jpg";
import maCT from "../../../assets/maCaoThang.jpg";
import maUEF from "../../../assets/maUEF.jpg";

const data = [
  {
    name: "Đại học Quốc Gia TP.HCM",
    image: icon1,
    mssv: maDHQG,
  },
  {
    name: "Cao đẳng kỹ thuật Cao Thắng",
    image: icon2,
    mssv: maCT,
  },
  {
    name: "Trường Đại học Kinh tế - Tài chính TP.HCM",
    image: icon3,
    mssv: maUEF,
  },
  {
    name: "Trường Đại học Giao thông vận tải TP.HCM",
    image: icon4,
    mssv: maUEF,
  },
];

const Tuition = () => {
  const navigate = useNavigate();
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
          <h1 className="text-white text-[25px] md:text-[35px]">
            Chọn nhà cung cấp
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
      <div className="main mt-[100px] px-[20px] md:px-[100px] mb-[100px]">
        <p className="md:text-[40px] text-[20px] font-bold ">
          Tất cả các nhà cung cấp nước
        </p>
        <div className="content flex flex-col md:mt-[30px] mt-[10px] gap-y-[50px]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate("/bill-tuition", { state: { item } })}
              >
                <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[40px] cursor-pointer">
                  <img
                    src={item.image}
                    className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover"
                  />
                  <div className="text-center md:text-left">
                    <p className="font-bold text-[15px] md:text-[30px]">
                      {item.name}
                    </p>
                    <p className="text-[15px] md:text-[20px]">
                      {item.location}
                    </p>
                  </div>
                </div>
                <div className="border-[0.5px] border-gray-300 mt-[20px] md:max-w-[1150px] md:ml-[140px]" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tuition;
