import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Footer from "./Footer";
import { FaBars } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const dataW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarNoti = () => {
  const navigate = useNavigate();
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

  const generateCalendar = (month, year) => {
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const firstWeekDay = firstDayOfMonth.getDay();
    const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

    const adjustedFirstWeekDay = (firstWeekDay === 0 ? 7 : firstWeekDay) - 1;

    for (let i = adjustedFirstWeekDay; i > 0; i--) {
      days.push({
        day: lastDateOfPrevMonth - i + 1,
        currentMonth: false,
      });
    }

    for (let date = 1; date <= lastDayOfMonth.getDate(); date++) {
      days.push({
        day: date,
        currentMonth: true,
      });
    }

    const remainingDays = 7 - (days.length % 7);
    for (let i = 1; i <= remainingDays && remainingDays < 7; i++) {
      days.push({
        day: i,
        currentMonth: false,
      });
    }

    return days;
  };

  const days = generateCalendar(month, year);

  const [showModalCreateEvent, setShowModalCreateEvent] = useState(false);
  const [dataD, setDataD] = useState([]);

  const handleOpenModal = (dayInfo) => {
    setShowModalCreateEvent(true);
    setDataD(dayInfo);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-between bg-purple-800 h-[75px] px-4 md:px-[100px]">
        <div className="flex items-center space-x-5 md:space-x-10">
          <div
            className="rounded-full bg-black flex items-center p-1"
            onClick={() => navigate("/home")}
          >
            <IoIosArrowBack className="text-white text-[20px] md:text-[45px] cursor-pointer" />
          </div>
          <h1 className="text-white text-[20px] md:text-[35px]">Đặt lịch</h1>
        </div>

        <div className="flex items-center space-x-5 md:space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[20px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="main space-y-[30px] md:space-y-[50px] mb-[100px] px-4 md:px-0">
        <div className="mt-[-50px] md:mt-[-80px] flex flex-wrap items-center justify-between gap-y-4">
          <p className="font-bold text-black text-[20px] md:text-[50px] md:ml-[300px]">
            Tháng {month} {year}
          </p>

          <div className="flex items-center gap-x-5 md:gap-x-[50px]">
            <FaArrowLeft
              className="text-[20px] md:text-[40px] cursor-pointer"
              onClick={() => {
                if (month - 1 < 1) {
                  setMonth(12);
                  setYear(year - 1);
                } else {
                  setMonth(month - 1);
                }
              }}
            />
            <FaArrowRight
              className={`text-[20px] md:text-[40px] ${
                month === new Date().getMonth() + 1 &&
                year === new Date().getFullYear()
                  ? "text-gray-400 cursor-not-allowed"
                  : "cursor-pointer"
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

          <div className="bg-blue-600 rounded-[10px] px-5 py-2 text-white flex items-center justify-center">
            <BiSolidPlusCircle
              className="text-white text-[25px] md:text-[35px] cursor-pointer"
              onClick={() => navigate("/create-note")}
            />
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 space-y-2 text-sm md:text-base">
          {dataW.map((weekDay, index) => (
            <div
              key={index}
              className="text-center font-bold flex items-center justify-center"
            >
              {weekDay}
            </div>
          ))}
          {days.map((dayInfo, index) => (
            <div
              key={index}
              onClick={() => handleOpenModal(dayInfo)}
              className={`h-[50px] md:h-[90px] flex items-center justify-center border cursor-pointer ${
                dayInfo.currentMonth ? "text-black" : "text-gray-300"
              }`}
            >
              {dayInfo.day}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CalendarNoti;
