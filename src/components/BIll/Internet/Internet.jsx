import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import vnpt from "../../../assets/vnpt.png";
import viettel from "../../../assets/viettel.png";
import fpt from "../../../assets/fpt.png";
import sctv from "../../../assets/sctv.png";
import billVNPT from "../../../assets/maVNPT.jpg";
import billViettel from "../../../assets/maViettel.jpg";
import billFPT from "../../../assets/maFPT.jpg";
import billSCTV from "../../../assets/maSCTV.png";
import Footer from "../../Footer";
const data = [
  {
    name: "VNPT",
    location: "Toàn quốc",
    image: vnpt,
    billImage: billVNPT,
  },
  {
    name: "FPT",
    location: "Toàn quốc",
    image: fpt,
    billImage: billFPT,
  },
  {
    name: "Viettel",
    location: "Toàn quốc",
    image: viettel,
    billImage: billViettel,
  },
  {
    name: "Dịch vụ internet và truyền hình cáp SCTV",
    location: "Toàn quốc",
    image: sctv,
    billImage: billSCTV,
  },
];
const Internet = () => {
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
          Tất cả các nhà cung cấp mạng và truyền hình
        </p>
        <div className="content flex flex-col md:mt-[30px] mt-[10px] gap-y-[50px]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate("/bill-internet", { state: { item } })}
              >
                <div className="flex flex-col md:flex-row items-center gap-[20px] md:gap-[40px] cursor-pointer">
                  <img
                    src={item.image}
                    className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-cover"
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

export default Internet;
