import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import km1 from "../assets/km1.jpg";
import avatar1 from "../assets/avatar1.jpg";
import avatar3 from "../assets/avatar3.jpg";
import avatar4 from "../assets/avatar4.jpg";
import avatar5 from "../assets/image5.jpg";
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
import Footer from "./Footer";

const data = [
  [
    { month: "6", Money: 4500 },
    { month: "7", Money: 3128 },
    { month: "8", Money: 0 },
    { month: "9", Money: 0 },
    { month: "10", Money: 1590 },
    { month: "11", Money: 2240 },
    { month: "12", Money: 3490 },
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
          backgroundColor: "blue",
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
  {
    name: "Nguyễn Đình Duy",
    role: "cha",
    time: "50p trước",
    image: avatar4,
  },
  { name: "Đoàn Như Sinh", role: "mẹ", time: "1h trước", image: avatar1 },
  {
    name: "Nguyễn Trường An",
    role: "con",
    time: "3p trước",
    image: avatar5,
  },
  {
    name: "Nguyễn Thị Tố Trân",
    role: "con",
    time: "12p trước",
    image: avatar3,
  },
];
const ManageFamily = () => {
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

  const [weekRange, setWeekRange] = useState(getCurrentWeekRange());
  const [month, setMonth] = useState(getCurrentMonth());
  const [day, setDay] = useState(getCurrentDay());

  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">
            Quản lý gia đình
          </h1>
        </div>

        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosSearch className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main mb-[100px] mt-[30px]">
        <p className="md:text-[40px] text-[25px] font-bold md:ml-[65px]">
          Thời gian biểu của các thành viên
        </p>
        <div className="border-gray-400 border-[1px] w-full max-w-[1350px] mx-auto mt-[30px] md:p-[30px] p-[10px] md:mt-[30px] ">
          <p className="md:text-[40px] text-[25px] font-bold text-red-500">
            Gia đình Batman
          </p>
          <div className="border-[1px] border-gray-400 md:mt-[20px] md:mb-[20px]"></div>
          <div className="space-y-[30px] ml-[50px]">
            {dataF.map((member, index) => (
              <div key={index} className="flex items-center">
                <img
                  className="rounded-full cursor-pointer"
                  src={member.image}
                  style={{ maxHeight: "150px", maxWidth: "150px" }}
                />
                <div className="grid grid-cols-2 gap-y-[25px] gap-x-[400px] md:ml-[30px]">
                  <div>
                    <p className="md:text-[20px] text-[25px] font-bold text-gray-400">
                      Họ và Tên
                    </p>
                    <p className="md:text-[20px] text-[25px] font-bold">
                      {member.name}
                    </p>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[25px] font-bold text-gray-400">
                      Thời gian biểu
                    </p>
                    <p className="md:text-[20px] text-[25px] font-bold">
                      Nhấn để xem ngay!
                    </p>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[25px] font-bold text-gray-400">
                      Hoạt động gần nhất
                    </p>
                    <p className="md:text-[20px] text-[25px] font-bold">
                      {member.time}
                    </p>
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[25px] font-bold text-gray-400">
                      Tặng quà
                    </p>
                    <p className="md:text-[20px] text-[25px] font-bold">
                      Trao gửi yêu thương!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <p className="md:text-[40px] text-[25px] font-bold md:ml-[65px] md:mt-[30px] md:mb-[30px]">
          Thống kê chi tiêu
        </p>
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
                          parseInt(entry.day) === day ? "blue" : "lightblue"
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
                          parseInt(entry.month) === month ? "blue" : "lightblue"
                        }
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ManageFamily;
