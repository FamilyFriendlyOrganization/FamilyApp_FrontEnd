import React, { useState } from "react";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "TriVu",
    time: "5 phút trước",
  },
  {
    name: "MinhTriet",
    time: "T3, 31/12/2024",
  },
];

const Notification = () => {
  const navigate = useNavigate();
  const [mark, setMark] = useState(false);

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
          <h1 className="text-white text-[25px] md:text-[35px]">Thông báo</h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosSearch
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
      </div>
      <div className="main md:mt-[100px] mt-[30px] px-[20px] md:px-[100px]">
        <div className="md:mb-[50px] mb-[70px] space-y-[50px]">
          {data.map((item) => {
            return (
              <div
                key={item.name}
                className="space-y-[5px] cursor-pointer"
                onClick={() =>
                  navigate("/notification-content", { state: { item } })
                }
              >
                <div
                  className={`rounded-full ${
                    mark ? "bg-blue-400" : "bg-orange-400"
                  } md:w-[30px] md:h-[30px] w-[20px] h-[20px] flex items-center justify-center`}
                />
                <p className="font-bold text-black md:text-[40px] text-[20px] md:px-[30px] px-[10px]">
                  {item.name} đã gửi 1 thông báo!
                </p>
                <p className="font-bold text-gray-400 md:text-[30px] text-[20px] md:px-[200px] px-[10px] mt-[10px]">
                  {item.time}
                </p>
                <div className="border-[1px] border-gray-400 w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-10">
        <button
          className="bg-blue-600 text-white py-4 px-8 rounded-full font-bold md:text-[30px]"
          onClick={() => setMark(true)}
        >
          Đánh dấu đã đọc
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Notification;
