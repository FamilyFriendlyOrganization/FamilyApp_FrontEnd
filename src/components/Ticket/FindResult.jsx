import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import vnaicon from "../../assets/vnaicon.jpg";
import { MdArrowRightAlt } from "react-icons/md";
import Footer from "../Footer";
import vietjet from "../../assets/vietjet.jpg";
import bamboo from "../../assets/bamboo.jpg";
const data = [
  {
    icon: vnaicon,
    name: "Vietnam Airlines",
    type: "Thương gia",
    startTime: "12:30",
    startLocation: "SGN",
    time: "2h20p",
    reachTime: "14:50",
    reachLocation: "HAN",
    money: "6.890.125",
    numberOfPeople: 1,
    date: "",
  },
  {
    icon: vietjet,
    name: "Vietjet Air",
    type: "Phổ Thông",
    startTime: "13:30",
    startLocation: "SGN",
    time: "2h10p",
    reachTime: "15:40",
    reachLocation: "HAN",
    money: "2.147.175",
    numberOfPeople: 1,
  },
  {
    icon: bamboo,
    name: "Bamboo Airlines",
    type: "Phổ thông linh hoạt",
    startTime: "14:10",
    startLocation: "SGN",
    time: "2h30p",
    reachTime: "16:40",
    reachLocation: "HAN",
    money: "3.065.115",
    numberOfPeople: 1,
  },
];
const FindResult = () => {
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
            Kết quả tìm kiếm
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
      <div className="main px-[20px] md:px-[100px] space-y-[40px] mb-[200px]">
        <div className="border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mx-auto mt-[80px] md:p-[30px] p-[10px]">
          <p className="md:text-[30px] text-[20px] text-left">
            Hiện chúng mình không tìm thấy chuyến bay phù hợp với yêu cầu của
            bạn, hãy xem qua danh sách đề cử nhé!
          </p>
        </div>
        <div className="space-y-[40px]">
          <p className="font-bold md:text-[40px] text-[20px]">
            Các chuyến bay hiện có
          </p>
          {data.map((item, index) => {
            return (
              <div className="flex" key={index}>
                <div className="border-gray-400 border-[1px] rounded-[20px] w-full max-w-[850px]  md:p-[30px] p-[10px] flex  gap-x-[50px]">
                  <div className="flex flex-col md:px-[40px]">
                    <div className="border-[1px] border-gray-300 max-w-[120px] rounded-lg">
                      <img src={item.icon} />
                    </div>
                    <div className="space-y-[10px] mt-[20px]">
                      <p className="font-bold md:text-[20px]">{item.name}</p>
                      <p className="md:text-[20px]">{item.type}</p>
                    </div>
                  </div>
                  <div className="flex gap-x-[20px] mt-[10px] relative">
                    <div className="flex flex-col items-center space-y-[10px]">
                      <p className="font-extrabold md:text-[30px]">
                        {item.startTime}
                      </p>
                      <p className="md:text-[25px]">{item.startLocation}</p>
                    </div>
                    <MdArrowRightAlt className="md:text-[120px] mt-[-30px] relative" />
                    <p className="md:text-[18px] absolute mt-[-15px] ml-[125px] ">
                      {item.time}
                    </p>
                    <div className="flex flex-col items-center space-y-[10px]">
                      <p className="font-extrabold md:text-[30px]">
                        {item.reachTime}
                      </p>
                      <p className="md:text-[25px] text-center">
                        {item.reachLocation}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border-gray-400 border-[1px] rounded-[20px] w-full max-w-[500px] md:p-[30px] p-[10px]">
                  <div className="flex gap-x-[20px] mt-[10px] justify-end">
                    <div className="flex flex-col items-center space-y-[10px] ">
                      <p className="font-extrabold md:text-[30px]">
                        {item.money}
                      </p>
                      <p className="md:text-[25px]">
                        {item.numberOfPeople} hành khách
                      </p>
                      <p
                        className="md:text-[20px] mt-[20px] font-bold text-orange-400 cursor-pointer"
                        onClick={() =>
                          navigate("/ticket-info", { state: { item } })
                        }
                      >
                        Nhấn để xem chi tiết
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="flex">
            <div className="border-gray-400 border-[1px] rounded-[20px] w-full max-w-[850px]  md:p-[30px] p-[10px] flex  gap-x-[50px]">
              <div className="flex flex-col md:px-[40px]">
                <div className="border-[1px] border-gray-300 max-w-[120px] rounded-lg">
                  <img src={vnaicon} />
                </div>
                <div className="space-y-[10px] mt-[20px]">
                  <p className="font-bold md:text-[20px]">Vietnam Airlines</p>
                  <p className="md:text-[20px]">Thương gia</p>
                </div>
              </div>
              <div className="flex gap-x-[20px] mt-[10px] relative">
                <div className="flex flex-col items-center space-y-[10px]">
                  <p className="font-extrabold md:text-[30px]">12:30</p>
                  <p className="md:text-[25px]">SGN</p>
                </div>
                <MdArrowRightAlt className="md:text-[120px] mt-[-30px] relative" />
                <p className="md:text-[18px] absolute mt-[-15px] ml-[125px] ">
                  2h30p
                </p>
                <div className="flex flex-col items-center space-y-[10px]">
                  <p className="font-extrabold md:text-[30px]">3:00</p>
                  <p className="md:text-[25px] text-center">HAN</p>
                </div>
              </div>
            </div>
            <div className="border-gray-400 border-[1px] rounded-[20px] w-full max-w-[500px] md:p-[30px] p-[10px]">
              <div className="flex gap-x-[20px] mt-[10px] justify-end">
                <div className="flex flex-col items-center space-y-[10px] ">
                  <p className="font-extrabold md:text-[30px]">9.890.125đ</p>
                  <p className="md:text-[25px]">1 hành khách</p>
                  <p
                    className="md:text-[20px] mt-[20px] font-bold text-orange-400 cursor-pointer"
                    onClick={() => navigate("/ticket-info")}
                  >
                    Nhấn để xem chi tiết
                  </p>
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

export default FindResult;
