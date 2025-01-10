import React from "react";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Footer";

const NotificationContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-5 md:px-20">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-black p-2">
            <IoIosArrowBack
              className="text-white text-2xl md:text-3xl cursor-pointer"
              onClick={() => navigate("/notification")}
            />
          </div>
          <h1 className="text-white text-xl md:text-2xl">Nội dung thông báo</h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-black p-2">
            <IoIosSearch
              className="text-white text-2xl md:text-3xl cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <div className="rounded-full bg-black p-2">
            <RxCross1
              className="text-white text-2xl md:text-3xl cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
        </div>
      </div>
      <div className="main bg-gray-100 px-5 md:px-20 py-5 mt-[70px] rounded-lg shadow-lg">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex flex-col space-y-6">
            <div>
              <label
                className="block font-semibold text-lg md:text-xl text-gray-700"
                htmlFor="person"
              >
                Người gửi:
              </label>
              <div
                className="mt-2 border border-gray-300 py-3 px-4 rounded-md text-lg md:text-xl text-gray-900 bg-gray-50"
                id="person"
              >
                {item.name}
              </div>
            </div>
            <div>
              <label
                className="block font-semibold text-lg md:text-xl text-gray-700"
                htmlFor="title"
              >
                Tựa đề:
              </label>
              <div
                className="mt-2 border border-gray-300 py-3 px-4 rounded-md text-lg md:text-xl text-gray-900 bg-gray-50"
                id="title"
              >
                Chúc mừng sinh nhật
              </div>
            </div>
            <div>
              <label
                className="block font-semibold text-lg md:text-xl text-gray-700"
                htmlFor="content"
              >
                Nội dung:
              </label>
              <div
                className="mt-2 border border-gray-300 py-3 px-4 rounded-md text-lg md:text-xl text-gray-900 bg-gray-50"
                id="content"
              >
                Hôm này ta cùng gặp nhau nơi đây!
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotificationContent;
