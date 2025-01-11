import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import Footer from "../Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "./Bill.scss";
import { IoWaterOutline } from "react-icons/io5";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const initialBillTitle = [
  { title: "Điện", value: "100.000 VND", isPaid: true, selected: true },
  {
    title: "Nước",
    value: "200.000 VND",
    isPaid: false,
    selected: false,
    bill: {
      icon: IoWaterOutline,
      billID: "26122024",
      money: "500,123đ",
      location: "TP.HCM",
    },
  },
  { title: "Mạng", value: "300.000 VND", isPaid: true, selected: false },
  { title: "Học phí", value: "400.000 VND", isPaid: true, selected: false },
];

const Bill = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};
  const dataF = [
    { title: "Tên khách hàng", value: "Nguyễn Văn A" },
    { title: "Mã số khách hàng", value: "123" },
    { title: "Nơi đăng ký dịch vụ", value: "Thành phố Hồ Chí Minh" },
    { title: "Địa chỉ", value: "Thành phố Hồ Chí Minh" },
    { title: "Phương thức thanh toán", value: "Tài khoản ngân hàng" },
  ];
  const [billTitle, setBillTitle] = useState(initialBillTitle);

  const handleSelect = (index) => {
    const newBillTitle = billTitle.map((item, i) => {
      if (i === index) {
        return { ...item, selected: !item.selected };
      }
      return { ...item, selected: false };
    });
    setBillTitle(newBillTitle);
  };

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
            Kết quả giao dịch
          </h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="top-content bg-blue-200">
        <div>
          <div className="flex items-center justify-center gap-[20px] md:gap-[40px] px-[20px] md:px-[100px] py-[10px]">
            <p className="font-bold text-[15px] md:text-[30px]">
              Bạn đang có 1 hóa đơn cần thanh toán
            </p>
          </div>
        </div>
      </div>
      <div className="main mb-[100px] mt-[30px]">
        <div>
          <p className="md:text-[40px] font-bold  px-[20px] md:px-[100px] mb-[30px]">
            Thông tin khách hàng
          </p>
          <div className="border-black border-[2px] rounded-[30px] w-full max-w-[1270px] mx-auto md:p-[30px] p-[10px]">
            {dataF.map((item, index) => (
              <div
                key={index}
                className="flex items-center flex-col mx-[100px] mb-[25px]"
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
        <div className="mt-[30px]">
          <p className="md:text-[40px] font-bold mb-[30px]  md:px-[100px]">
            Danh sách hóa đơn
          </p>
          <div className="flex items-center md:mt-[40px] mt-[20px] flex-col">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              responsive={responsive}
              containerClass="carousel-container"
            >
              {billTitle.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item rounded-full border-[2px] p-[10px] w-full cursor-pointer ${
                    item.selected
                      ? "border-orange-600"
                      : "border-black bg-gray-100"
                  }`}
                  onClick={() => handleSelect(index)}
                >
                  <div className="flex items-center justify-center">
                    <p
                      className={`md:text-[30px] text-[20px] text-center ${
                        item.selected ? "text-orange-600" : "text-black"
                      }`}
                    >
                      {item.title}
                    </p>
                    {!item.isPaid && (
                      <div className="ml-2 w-2 h-2 bg-orange-600 rounded-full"></div>
                    )}
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="border-black border-[2px] rounded-[30px] w-full max-w-[1270px] mx-auto md:p-[30px] p-[10px] mt-[50px]">
              {billTitle.find((item) => item.selected && item.bill) ? (
                <div>
                  {billTitle.map((item, index) => {
                    if (item.selected && item.bill) {
                      const { bill } = item;
                      return (
                        <div key={index} className="flex items-center">
                          <IoWaterOutline className="text-[30px] md:text-[100px]" />
                          <div className="grid grid-cols-2 gap-y-[25px] gap-x-[400px] md:ml-[30px]">
                            <p className="md:text-[30px] text-[25px] font-bold text-gray-400">
                              Mã hóa đơn:
                              <span className="md:text-[30px] text-[25px] font-bold text-black ml-[10px]">
                                {bill.billID}
                              </span>
                            </p>
                            <p className="md:text-[30px] text-[25px] font-bold text-gray-400">
                              Số tiền:
                              <span className="md:text-[30px] text-[25px] font-bold text-black ml-[10px]">
                                {bill.money}
                              </span>
                            </p>
                            <p className="md:text-[30px] text-[25px] font-bold text-gray-400">
                              Địa điểm:
                              <span className="md:text-[30px] text-[25px] font-bold text-black ml-[10px]">
                                {bill.location}
                              </span>
                            </p>
                            <p
                              className="md:text-[30px] text-[25px] font-bold text-orange-600 cursor-pointer"
                              onClick={() => navigate("/result")}
                            >
                              Nhấn để thanh toán
                            </p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <p className="text-center text-[20px] md:text-[30px]">
                  Không có hóa đơn cần thanh toán.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bill;
