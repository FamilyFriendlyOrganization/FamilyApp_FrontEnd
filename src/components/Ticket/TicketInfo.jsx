import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Footer from "../Footer";
const dataF = [
  { title: "Tên khách hàng", value: "Nguyễn Văn A" },
  { title: "Mã số khách hàng", value: "123456789JQ" },
  { title: "Nơi đăng ký dịch vụ", value: "Thành phố Hồ Chí Minh" },
  { title: "Địa chỉ", value: "Thành phố Hồ Chí Minh" },
  { title: "Phương thức thanh toán", value: "Tài khoản ngân hàng" },
];
const TicketInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  function getCurrentDateFormatted() {
    const now = new Date();

    const day = now.getDate().toString().padStart(2, "0"); // Lấy ngày (dd)
    const month = (now.getMonth() + 1).toString().padStart(2, "0"); // Lấy tháng (mm)
    const year = now.getFullYear(); // Lấy năm (yyyy)

    // Danh sách các tháng bằng tiếng Việt
    const monthsInVietnamese = [
      "tháng 1",
      "tháng 2",
      "tháng 3",
      "tháng 4",
      "tháng 5",
      "tháng 6",
      "tháng 7",
      "tháng 8",
      "tháng 9",
      "tháng 10",
      "tháng 11",
      "tháng 12",
    ];

    const formattedDate = `${day} ${
      monthsInVietnamese[now.getMonth()]
    }, ${year}`;
    return formattedDate;
  }
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px] md:mb-[-70px] mb-[-90px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/home")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">
            Thông tin hành khách
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
      <div className="main px-[20px] md:px-[100px] mb-[100px]">
        <div>
          <p className="font-bold md:text-[40px] text-[25px]">
            Thông tin chuyến bay
          </p>
          <div className="border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mx-auto md:mt-[40px] md:p-[30px] p-[10px]">
            <div className="flex items-center flex-col mx-[60px] mb-[25px] space-y-[20px]">
              <div className="flex justify-between w-full gap-[200px]">
                <p className=" md:text-[40px] text-[25px] text-left w-[30%]">
                  Ngày bay
                </p>
                <p className="font-semibold md:text-[40px] text-[25px] text-right w-[70%]">
                  {getCurrentDateFormatted()}
                </p>
              </div>
              <div className="flex justify-between w-full gap-[200px]">
                <p className=" md:text-[40px] text-[25px] text-left w-[30%]">
                  Thời gian bay
                </p>
                <p className="font-semibold md:text-[40px] text-[25px] text-right w-[70%]">
                  {item.time} ({item.startTime} - {item.reachTime})
                </p>
              </div>
              <div className="flex justify-between w-full gap-[200px]">
                <p className=" md:text-[40px] text-[25px] text-left w-[30%]">
                  Chiều đi
                </p>
                <p className="font-semibold md:text-[40px] text-[25px] text-right w-[70%]">
                  {item.startLocation} - {item.reachLocation}
                </p>
              </div>
              <div className="flex justify-between w-full gap-[200px]">
                <p className=" md:text-[40px] text-[25px] text-left w-[30%]">
                  Hạng vé
                </p>
                <p className="font-semibold md:text-[40px] text-[25px] text-right w-[70%]">
                  {item.name} - {item.type}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px]">
          <p className="font-bold md:text-[40px] text-[25px]">
            Thông tin hành khách
          </p>
          <div className="border-gray-400 border-[1px] rounded-[30px] w-full max-w-[1350px] mx-auto md:mt-[40px] md:p-[30px] p-[10px]">
            {dataF.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-col mx-[60px] mb-[25px]"
              >
                <div className="flex justify-between w-full gap-[200px]">
                  <p className="text-gray-500 md:text-[35px] text-[25px] text-left w-[50%]">
                    {item.title}
                  </p>
                  <p className="font-semibold md:text-[35px] text-[25px] text-right w-[50%]">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between mt-[40px]">
          <p className="font-bold md:text-[40px] text-[25px]">Tổng tiền</p>
          <p className="font-bold md:text-[40px] text-[25px]">{item.money}đ</p>
        </div>
        <button
          className="w-[1000px] flex justify-center mx-auto bg-pink-500 text-white font-bold py-4 rounded-lg hover:bg-pink-600 mt-[40px]"
          onClick={() => navigate("/result")}
        >
          Thanh toán
        </button>
      </div>
      <Footer />
    </>
  );
};

export default TicketInfo;
