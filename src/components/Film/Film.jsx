import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import phim1 from "../../assets/phim1.png";
const Film = () => {
  const navigate = useNavigate();
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
          <h1 className="text-white text-[25px] md:text-[35px]">Gợi ý phim</h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main mt-[40px] px-[20px] md:px-[100px] space-y-[40px] mb-[100px]">
        <p className="md:text-[40px] text-[25px]">Top 5 phim hôm nay</p>
        <img src={phim1} />
      </div>
      <Footer />
    </>
  );
};

export default Film;
