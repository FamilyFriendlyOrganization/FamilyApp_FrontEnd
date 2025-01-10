import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { PiMoneyWavyBold } from "react-icons/pi";
import { RxEyeOpen } from "react-icons/rx";
import { PiEyeClosedLight } from "react-icons/pi";
import { IoIosArrowForward } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import "./MM.scss";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import { SlNotebook } from "react-icons/sl";
import { useSelector } from "react-redux";

const MoneyManagement = () => {
  const account = useSelector((state) => state.user.account);
  const familyId = account.familyId;
  const navigate = useNavigate();
  const [isShowMoney, setIsShowMoney] = useState(true);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [isGetMoney, setIsGetMoney] = useState(false);

  const getCurrentMonth = () => {
    const date = new Date();
    return date.getMonth() + 1;
  };

  const getCurrentYear = () => {
    const year = new Date();
    return year.getFullYear();
  };

  const [month, setMonth] = useState(getCurrentMonth());
  const [year, setYear] = useState(getCurrentYear());
  const data = [
    { name: "Ăn uống", money: 3300 },
    { name: "Mua sắm", money: 1100 },
    { name: "Di chuyển", money: 1600 },
  ];
  const data1 = [
    { name: "Lương", money: 5000 },
    { name: "Thưởng", money: 500 },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "purple",
    "pink",
    "blue",
  ];

  const handlePieClick = (_, index) => {
    setSelectedColor(COLORS[index % COLORS.length]);
  };

  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px] ">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">
            Quản lý chi tiêu
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
      <div className="flex flex-col rounded-[30px] border-gray-500 border-[1px] mt-[50px] w-full max-w-[1350px]  ml-auto mr-auto">
        <div className="flex justify-start ml-[50px] items-center md:space-x-[90px]  space-x-[10px] md:ml-[200px]">
          <PiMoneyWavyBold className="text-[50px] text-pink-500" />
          <p className="text-[35px] text-black font-bold ">Số dư thanh toán</p>
          {isShowMoney ? (
            <span
              className="text-[45px] cursor-pointer"
              onClick={() => setIsShowMoney(false)}
            >
              <RxEyeOpen />
            </span>
          ) : (
            <span
              className="text-[45px] cursor-pointer"
              onClick={() => setIsShowMoney(true)}
            >
              <PiEyeClosedLight />
            </span>
          )}
        </div>
        <div className="flex justify-start ml-[50px] md:ml-[200px] items-center space-x-[100px] md:space-x-[600px]">
          <div
            className="text-[35px] text-purple-700 font-bold"
            style={{ minWidth: "200px" }}
          >
            <span
              style={{
                display: "inline-block",
                width: "200px",
                whiteSpace: "nowrap",
              }}
            >
              {isShowMoney
                ? "999,999,999 VNĐ"
                : "999,999,999 VNĐ".replace(/./g, "*")}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-[30px] border-gray-500 border-[1px] mt-[50px] w-full max-w-[1350px] mx-auto main">
        <div className="flex justify-between items-center px-[50px] md:px-[200px]">
          <IoIosArrowBack
            className="text-[40px] cursor-pointer flex-shrink-0"
            onClick={() => {
              if (month - 1 < 1) {
                setMonth(12);
                setYear(year - 1);
              } else {
                setMonth(month - 1);
              }
            }}
          />
          <div className="flex items-center justify-center space-x-[15px] rounded-[50px] bg-gray-200 px-[20px] mt-5">
            <CiCalendar className="text-[30px]" />
            <p className="text-[30px] text-center flex-grow">
              Tháng {month} / {year}
            </p>
          </div>
          <IoIosArrowForward
            className={`text-[40px] cursor-pointer flex-shrink-0 ${
              month === new Date().getMonth() + 1 &&
              year === new Date().getFullYear()
                ? "text-gray-400 cursor-not-allowed"
                : ""
            }`}
            onClick={() => {
              if (
                !(
                  month === new Date().getMonth() + 1 &&
                  year === new Date().getFullYear()
                )
              ) {
                if (month + 1 > 12) {
                  setYear(year + 1);
                  setMonth(1);
                } else {
                  setMonth(month + 1);
                }
              }
            }}
          />
        </div>
        <div className="flex flex-wrap items-center justify-center px-4 md:px-10 thu-chi">
          <div
            className={`flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-4 ${
              isGetMoney ? "border-gray-400" : "border-pink-400"
            } border-[3px] mt-12 space-y-1 chi cursor-pointer`}
            onClick={() => setIsGetMoney(false)}
          >
            <div className="flex items-center space-x-4">
              <HiArrowRightOnRectangle className="text-[40px] text-pink-400" />
              <p className="text-gray-500 text-[20px] md:text-[30px]">
                Chi tiêu
              </p>
            </div>
            <p className="text-black font-bold text-[20px] md:text-[30px]">
              6,000,000 VNĐ
            </p>
          </div>
          <div
            className={`flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 p-4 ${
              isGetMoney ? "border-pink-400" : "border-gray-400"
            } border-[3px] mt-12 space-y-1 thu cursor-pointer`}
            onClick={() => setIsGetMoney(true)}
          >
            <div className="flex items-center space-x-4">
              <HiArrowLeftOnRectangle className="text-[40px] text-pink-400" />
              <p className="text-gray-500 text-[20px] md:text-[30px]">
                Thu nhập
              </p>
            </div>
            <p className="text-black font-bold text-[20px] md:text-[30px]">
              5,500,000 VNĐ
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-3">
          <p className="text-gray-500 md:text-[30px] text-[20px]">
            Thu - Chi =
          </p>
          <p className="text-purple-600 md:text-[30px] text-[20px] ml-5">
            -500,000 VNĐ
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mb-12">
          <PieChart width={700} height={600}>
            <Pie
              activeIndex={activeIndex}
              data={isGetMoney ? data1 : data}
              dataKey="money"
              outerRadius={250}
              fill="green"
              // onMouseEnter={onPieEnter}
              onClick={handlePieClick}
              style={{ cursor: "pointer", outline: "none" }}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="w-[300px]">
            {isGetMoney
              ? data1.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-[50px] mb-5 cursor-pointer"
                    onClick={() => navigate("/home")}
                  >
                    <div className={`content${index + 1}`}></div>
                    <p
                      className={`md:text-[30px] text-[20px] ${
                        selectedColor === COLORS[index % COLORS.length]
                          ? "font-bold"
                          : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </p>
                  </div>
                ))
              : data.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-[50px] mb-5 cursor-pointer"
                    onClick={() => {
                      if (item.name === "Ăn uống") {
                        navigate("/eat");
                      }
                      if (item.name === "Mua sắm") {
                        navigate("/shopping");
                      } else {
                        navigate("/moving");
                      }
                    }}
                  >
                    <div className={`content${index + 1}`}></div>
                    <p
                      className={`md:text-[30px] text-[20px] ${
                        selectedColor === COLORS[index % COLORS.length]
                          ? "font-bold"
                          : "text-gray-500"
                      }`}
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoneyManagement;
