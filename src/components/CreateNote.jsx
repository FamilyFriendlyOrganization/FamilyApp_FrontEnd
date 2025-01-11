import React, { useState } from "react";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const CreateNote = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-black p-2">
            <IoIosArrowBack
              className="text-white text-2xl md:text-3xl cursor-pointer"
              onClick={() => navigate("/calendar")}
            />
          </div>
          <h1 className="text-white text-xl md:text-2xl">Tạo sự kiện</h1>
        </div>
        <div className="flex items-center space-x-4">
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
                Chủ đề:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Điền chủ đề"
                className="mt-2 border border-gray-300 py-3 px-4 w-full rounded-md text-lg md:text-xl text-gray-900 bg-gray-50"
              ></input>
            </div>
            <div>
              <label
                className="block font-semibold text-lg md:text-xl text-gray-700"
                htmlFor="person"
              >
                Nội dung:
              </label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Điền nội dung"
                className="mt-2 border border-gray-300 py-3 px-4 w-full rounded-md text-lg md:text-xl text-gray-900 bg-gray-50"
              ></input>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-[40px]">
          <button
            className="btn bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold mt-2 w-[400px]"
            onClick={() => navigate("/calendar")}
          >
            Tạo lịch
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateNote;
