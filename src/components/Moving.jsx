import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { CiBank } from "react-icons/ci";
import { TbTransfer } from "react-icons/tb";
import { LuSalad } from "react-icons/lu";
import { HiOutlineCash } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
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
import Footer from "./Footer";

const data = [
  [
    { month: "7", Money: 4500 },
    { month: "8", Money: 3128 },
    { month: "9", Money: 0 },
    { month: "10", Money: 0 },
    { month: "11", Money: 1590 },
    { month: "12", Money: 2240 },
    { month: "01", Money: 3490 },
  ],
  [
    { day: "9", Money: 90 },
    { day: "10", Money: 100 },
    { day: "11", Money: 70 },
    { day: "12", Money: 60 },
    { day: "13", Money: 240 },
    { day: "14", Money: 195 },
    { day: "15", Money: 341 },
  ],
];

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

const dataF = [
  { name: "Nguyễn Thùy Vân", money: "80,000 ", type: 1 },
  { name: "Đặng Thị Trúc", money: "90,000 ", type: 2 },
  { name: "Phương Như Sinh", money: "180,000 ", type: 3 },
  { name: "Nguyễn Minh Thư", money: "100,000 ", type: 1 },
];

const Moving = () => {
  const navigate = useNavigate();
  const [isWeekSelected, setIsWeekSelected] = useState(false);

  const getCurrentDay = () => {
    const date = new Date();
    return date.getDate();
  };

  const getCurrentWeekRange = () => {
    const date = new Date();
    const currentDay = date.getDate();
    const startDate = new Date(date);
    startDate.setDate(currentDay - 7);
    return {
      startDay: startDate.getDate(),
      endDay: currentDay,
    };
  };

  const getCurrentMonth = () => {
    const date = new Date();
    return date.getMonth() + 1;
  };

  const getIconByType = (type) => {
    switch (type) {
      case 1:
        return <CiBank className="text-[100px] text-blue-600 " />;
      case 2:
        return <TbTransfer className="text-[100px] text-red-400 " />;
      case 3:
        return <HiOutlineCash className="text-[100px] text-purple-500 " />;
    }
  };

  const [weekRange, setWeekRange] = useState(getCurrentWeekRange());
  const [month, setMonth] = useState(getCurrentMonth());
  const [day, setDay] = useState(getCurrentDay());

  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px] md:mb-[-50px] mb-[-70px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/money")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Di chuyển</h1>
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
      <div className="main">
        <div className="flex flex-col border-[1px] border-gray-400 w-full max-w-[1350px] ml-auto mr-auto rounded-[30px] space-y-20">
          <div className="flex justify-start space-x-5 md:ml-[170px] ml-[50px] py-5">
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
            {isWeekSelected === true ? (
              <ResponsiveContainer width="90%" height={250}>
                <BarChart data={data[1]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend content={CustomLegend} />
                  <Bar dataKey="Money">
                    {data[1].map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          parseInt(entry.day) === day ? "#C71585" : "#FFB6C1"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="90%" height={250}>
                <BarChart data={data[0]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend content={CustomLegend} />
                  <Bar dataKey="Money">
                    {data[0].map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={
                          parseInt(entry.month) === month
                            ? "#C71585"
                            : "#FFB6C1"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
        {isWeekSelected === false ? (
          <p className="md:text-[40px] text-[30px] text-black font-bold md:px-[65px] px-0 md:py-[20px] py-[10px]">
            Giao dịch tháng {month}
          </p>
        ) : (
          <p className="md:text-[40px] text-[30px] text-black font-bold md:px-[65px] px-0 md:py-[20px] py-[10px]">
            Giao dịch tuần {weekRange.startDay} - {weekRange.endDay}
          </p>
        )}
        <div className="flex flex-col border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] ml-auto mr-auto space-y-8 mb-[70px]">
          <div className="bg-blue-200 day w-full flex items-center">
            <p className="text-[35px] text-black text-start md:ml-[70px] ml-[10px]">
              11/01/2025
            </p>
          </div>
          {dataF.map((item, index) => (
            <div
              key={index}
              className="flex  items-center w-[1200px] ml-auto mr-auto border-[1px] border-gray-400 md:px-20 px-4 md:space-x-[70px] space-x-[20px]"
            >
              <div className="w-[100px] rounded-full border-gray-400 border-[1px] flex items-center justify-center my-[5px]">
                {getIconByType(item.type)}
              </div>
              <div className="flex flex-col md:mt-[-10px] space-y-[10px]">
                <p className="md:text-[35px] text-[30px] font-lightbold text-black">
                  Chuyển tiền đến <i>{item.name}</i>
                </p>
                <div className="flex md:space-x-[500px] space-x-[100px] items-center">
                  <p className="text-black font-bold md:text-[25px] text-[25px]">
                    -{item.money} VNĐ
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Moving;
