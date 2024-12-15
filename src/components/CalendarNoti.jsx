import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Footer from "./Footer";
import { FaBars } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";

const dataW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const CalendarNoti = () => {
  const [month, setMonth] = useState(9);
  const [year, setYear] = useState(2024);

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
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Đặt lịch</h1>
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
      <div className="main space-y-[50px] mb-[100px]">
        <div className="mt-[-80px] flex items-center justify-center gap-x-[200px]">
          <FaBars className="text-[30px]" />
          <p className="font-bold text-black md:text-[50px] text-[20px]">
            Tháng {month + 1} {year}
          </p>
          <div className="flex items-center gap-x-[50px] cursor-pointer">
            <FaArrowLeft
              className="text-[40px]"
              onClick={() => {
                if (month === 0) {
                  setMonth(11);
                  setYear(year - 1);
                } else {
                  setMonth(month - 1);
                }
              }}
            />
            <FaArrowRight
              className="text-[40px]"
              onClick={() => {
                if (month === 11) {
                  setMonth(0);
                  setYear(year + 1);
                } else {
                  setMonth(month + 1);
                }
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 space-y-2">
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
              onClick={handleOpenModal}
              className={`h-[90px] flex items-center justify-center border cursor-pointer ${
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
