import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { CiBank } from "react-icons/ci";
import { LuSalad } from "react-icons/lu";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./Eat.scss";
const dataM = [
  { month: "5", Money: 4500 },
  { month: "6", Money: 3128 },
  { month: "7", Money: 0 },
  { month: "8", Money: 0 },
  { month: "9", Money: 1590 },
  { month: "10", Money: 2240 },
  { month: "11", Money: 3490 },
];
import { IoIosArrowDown } from "react-icons/io";
const CustomLegend = () => {
  return (
    <div className="flex items-center justify-center ">
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "lightpink",
          marginRight: "10px",
        }}
      ></div>
      <span style={{ color: "black", fontWeight: "bold" }}>
        Đơn vị tính: VNĐ
      </span>
    </div>
  );
};

const dataW = [
  { day: "4", Money: 90 },
  { day: "5", Money: 100 },
  { day: "6", Money: 70 },
  { day: "7", Money: 60 },
  { day: "8", Money: 240 },
  { day: "9", Money: 195 },
  { day: "10", Money: 341 },
];

const Eat = () => {
  const navigate = useNavigate();
  const [isWeekSelected, setIsWeekSelected] = useState(false);

  const getCurrentMonth = () => {
    const date = new Date();
    return date.getMonth() + 1;
  };
  const [month, setMonth] = useState(getCurrentMonth());

  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[150px] md:mb-[-50px] mb-[-70px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Ăn uống</h1>
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
      <div className="main">
        <div className="flex flex-col border-[1px] border-gray-400 w-full max-w-[1350px] ml-auto mr-auto rounded-[30px] space-y-20">
          <div className="flex justify-start space-x-5 md:ml-[170px] ml-[50px]">
            <div
              className={`${
                isWeekSelected ? "bg-purple-100 text-purple-800" : "text-black"
              } border-gray-400 border-[1px] flex items-center justify-center p-5 rounded-[20px] cursor-pointer`}
              onClick={() => setIsWeekSelected(true)}
            >
              <p className="text-[20px] font-extrabold">Theo tuần</p>
            </div>
            <div
              className={`border-gray-400 border-[1px] flex items-center justify-center p-5 rounded-[20px] cursor-pointer ${
                isWeekSelected ? "text-black" : "text-purple-700 bg-purple-100"
              }`}
              onClick={() => setIsWeekSelected(false)}
            >
              <p className="text-[20px] font-extrabold">Theo tháng</p>
            </div>
          </div>
          <div className="flex md:ml-[100px] ml-0">
            <ResponsiveContainer width="90%" height={250}>
              <BarChart data={isWeekSelected === true ? dataW : dataM}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend content={CustomLegend} />
                <Bar dataKey="Money">
                  {dataM.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        parseInt(entry.month) === month ? "#C71585" : "#FFB6C1"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p className="md:text-[40px] text-[30px] text-black font-bold md:px-20 px-0 md:py-[20px] py-[10px]">
          Giao dịch tháng {month}
        </p>
        <div className="flex flex-col border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] ml-auto mr-auto space-y-8">
          <div className="bg-blue-200 day w-full flex items-center">
            <p className="text-[35px] text-black text-start md:ml-[70px] ml-[10px]">
              30/10/2024
            </p>
          </div>
          <div className="flex  items-center w-[1200px] ml-auto mr-auto border-[1px] border-gray-400 md:px-20 px-4 md:space-x-[70px] space-x-[20px]">
            <div className="w-[100px] rounded-full border-gray-400 border-[1px] flex items-center justify-center my-[5px]">
              <CiBank className="text-[100px] text-blue-600 font-bold" />
            </div>
            <div className="flex flex-col md:mt-[-10px] space-y-[10px]">
              <p className="md:text-[35px] text-[30px] font-lightbold text-black">
                Chuyển tiền đến <i>Nguyễn Thùy Vân</i>
              </p>
              <div className="flex md:space-x-[500px] space-x-[50px] items-center">
                <div className=" p-2 rounded-[30px] border-[1px] border-black bg-gray-200 flex items-center space-x-4">
                  <LuSalad className="text-[30px] text-green-500" />
                  <p className="text-black font-semibold text-[20px]">
                    Ăn uống
                  </p>
                  <IoIosArrowDown className="text-[30px] text-black" />
                </div>
                <p className="text-black font-bold md:text-[30px] text-[25px]">
                  -80,000 VNĐ
                </p>
              </div>
            </div>
          </div>
          <div className="flex  items-center w-[1200px] ml-auto mr-auto border-[1px] border-gray-400 md:px-20 px-4 md:space-x-[70px] space-x-[20px]">
            <div className="w-[100px] rounded-full border-gray-400 border-[1px] flex items-center justify-center my-[5px]">
              <CiBank className="text-[100px] text-blue-600 font-bold" />
            </div>
            <div className="flex flex-col md:mt-[-10px] space-y-[10px]">
              <p className="md:text-[35px] text-[30px] font-lightbold text-black">
                Chuyển tiền đến <i>Nguyễn Thùy Vân</i>
              </p>
              <div className="flex md:space-x-[500px] space-x-[50px] items-center">
                <div className=" p-2 rounded-[30px] border-[1px] border-black bg-gray-200 flex items-center space-x-4">
                  <LuSalad className="text-[30px] text-green-500" />
                  <p className="text-black font-semibold text-[20px]">
                    Ăn uống
                  </p>
                  <IoIosArrowDown className="text-[30px] text-black" />
                </div>
                <p className="text-black font-bold md:text-[30px] text-[25px]">
                  -80,000 VNĐ
                </p>
              </div>
            </div>
          </div>
          <div className="flex  items-center w-[1200px] ml-auto mr-auto border-[1px] border-gray-400 md:px-20 px-4 md:space-x-[70px] space-x-[20px]">
            <div className="w-[100px] rounded-full border-gray-400 border-[1px] flex items-center justify-center my-[5px]">
              <CiBank className="text-[100px] text-blue-600 font-bold" />
            </div>
            <div className="flex flex-col md:mt-[-10px] space-y-[10px]">
              <p className="md:text-[35px] text-[30px] font-lightbold text-black">
                Chuyển tiền đến <i>Nguyễn Thùy Vân</i>
              </p>
              <div className="flex md:space-x-[500px] space-x-[50px] items-center">
                <div className=" p-2 rounded-[30px] border-[1px] border-black bg-gray-200 flex items-center space-x-4">
                  <LuSalad className="text-[30px] text-green-500" />
                  <p className="text-black font-semibold text-[20px]">
                    Ăn uống
                  </p>
                  <IoIosArrowDown className="text-[30px] text-black" />
                </div>
                <p className="text-black font-bold md:text-[30px] text-[25px]">
                  -80,000 VNĐ
                </p>
              </div>
            </div>
          </div>
          <div className="flex  items-center w-[1200px] ml-auto mr-auto border-[1px] border-gray-400 md:px-20 px-4 md:space-x-[70px] space-x-[20px]">
            <div className="w-[100px] rounded-full border-gray-400 border-[1px] flex items-center justify-center my-[5px]">
              <CiBank className="text-[100px] text-blue-600 font-bold" />
            </div>
            <div className="flex flex-col md:mt-[-10px] space-y-[10px]">
              <p className="md:text-[35px] text-[30px] font-lightbold text-black">
                Chuyển tiền đến <i>Nguyễn Thùy Vân</i>
              </p>
              <div className="flex md:space-x-[500px] space-x-[50px] items-center">
                <div className=" p-2 rounded-[30px] border-[1px] border-black bg-gray-200 flex items-center space-x-4">
                  <LuSalad className="text-[30px] text-green-500" />
                  <p className="text-black font-semibold text-[20px]">
                    Ăn uống
                  </p>
                  <IoIosArrowDown className="text-[30px] text-black" />
                </div>
                <p className="text-black font-bold md:text-[30px] text-[25px]">
                  -80,000 VNĐ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eat;
