import React from "react";
import "./Home.scss";
import { FaUserPlus } from "react-icons/fa6";
import { RiHome2Line } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { PiWechatLogoBold } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { TbMoneybag } from "react-icons/tb";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";
import { TbReceipt2 } from "react-icons/tb";
import { FiGift } from "react-icons/fi";
import { MdFamilyRestroom } from "react-icons/md";
import { HiOutlineSquaresPlus } from "react-icons/hi2";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import km1 from "../assets/km1.jpg";
import km2 from "../assets/km2.jpg";
import km3 from "../assets/km3.jpg";
import km4 from "../assets/km4.jpg";
import km5 from "../assets/km5.jpg";
import km6 from "../assets/km6.jpg";
import km7 from "../assets/km7.jpg";
import km8 from "../assets/km8.jpg";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import gd1 from "../assets/gd1.jpg";
import gd2 from "../assets/gd2.jpg";
import gd3 from "../assets/gd3.jpg";
import gd4 from "../assets/gd4.jpg";
import gd5 from "../assets/gd5.jpg";
import gd6 from "../assets/gd6.jpg";
import gd7 from "../assets/gd7.jpg";
import gd8 from "../assets/gd8.jpg";
import gd9 from "../assets/gd9.png";
import gd10 from "../assets/gd10.jpg";
import { IoNavigateCircleOutline } from "react-icons/io5";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { doLogout } from "../redux/action/userAction";

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

const Home = () => {
  const isAuthen = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.user.account);

  function handleLogout() {
    dispatch(doLogout());
    navigate("/login");
  }
  return (
    <>
      <div className="header bg-home bg-cover bg-no-repeat bg-center w-full h-[120px] z-10	">
        <div className="flex justify-end md:mr-[45px] mr-[20px]">
          {isAuthen === true ? (
            <p
              className="text-white md:text-[25px] text-[25px] cursor-pointer py-1.5"
              onClick={() => handleLogout()}
            >
              Đăng xuất
            </p>
          ) : (
            <p
              className="text-white md:text-[25px] text-[25px] cursor-pointer py-1.5"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </p>
          )}
        </div>
        <div className="flex items-center text-white justify-between ml-[50px] md:ml-[70px] md:mr-[50px] mr-[20px] tp[] ">
          <span
            onClick={() => navigate("/")}
            className="space-x-3 flex items-center cursor-pointer"
          >
            <RiHome2Line className="text-[40px]" />
            <p className="font-bold text-[40px]">Trang chủ</p>
          </span>
          <div className="space-x-11 flex items-center relative ">
            <div className="relative">
              <RiNotification2Line
                className="text-[40px] cursor-pointer font-bold"
                onClick={() => navigate("/")}
              />
              <p className="absolute w-5 h-5 text-white left-10 bottom-7 font-bold">
                2
              </p>
            </div>
            <PiWechatLogoBold className="text-[40px] ml-[20px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main relative z-10">
        <div className="flex items-center findBtn w-fit bg-gray-100 mt-[-80px] mx-auto gap-x-20 my-auto">
          <input
            type="text"
            name="username"
            placeholder="Tìm kiếm..."
            className="bg-transparent focus:outline-none"
          />
          <span className="flex">
            <GoSearch
              className="text-[30px] text-pink-600 cursor-pointer font-bold"
              onClick={() => navigate("/home")}
            />
          </span>
        </div>
        <div className="flex flex-col items-center justify-center md:mt-[70px]">
          <div className="grid grid-cols-4 gap-y-10 md:gap-x-40 items-center justify-items-center gap-x-10">
            <div className="flex flex-col items-center space-y-2">
              <TbMoneybag
                className="text-red-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/money")}
              />
              <p className="text-gray-500 text-[20px]">Quản lý chi tiêu</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaRegCalendarAlt
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/calendar")}
              />
              <p className="text-gray-500 text-[20px]">Đặt lịch</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <GiReceiveMoney
                className="text-green-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/receive")}
              />
              <p className="text-gray-500 text-[20px]">Nhận tiền</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FcMoneyTransfer
                className="text-[50px] cursor-pointer"
                onClick={() => navigate("/transfer")}
              />
              <p className="text-gray-500 text-[20px]">Chuyển tiền</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaUserPlus
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/add-family")}
              />
              <p className="text-gray-500 text-[20px]">Thêm thành viên</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FiGift
                className="text-purple-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/give-gift")}
              />
              <p className="text-gray-500 text-[20px]">Tặng quà</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <MdFamilyRestroom
                className="text-blue-600 text-[50px] cursor-pointer"
                onClick={() => navigate("/manage-family")}
              />
              <p className="text-gray-500 text-[20px]">Gia đình</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <HiOutlineSquaresPlus
                className="text-[50px] cursor-pointer"
                onClick={() => navigate("/home")}
              />
              <p className="text-gray-500 text-[20px]">Các chức năng khác</p>
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <h1 className="text-black font-bold text-[24px] md:text-[30px] mt-[20px] ml-[25px] md:ml-[50px]">
              Thông tin khuyến mãi
            </h1>
          </div>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            responsive={responsive}
            containerClass="carousel-container"
          >
            <div>
              <img
                src={km1}
                alt="Slide 1"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <img
                src={km2}
                alt="Slide 2"
                className="w-full h-[300px] object-cover cursor-pointer"
              />
            </div>
            <div>
              <img
                src={km3}
                alt="Slide 3"
                className="w-full h-[300px] object-cover cursor-pointer"
              />
            </div>
            <div>
              <img
                src={km4}
                alt="Slide 4"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <img
                src={km5}
                alt="Slide 5"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <img
                src={km6}
                alt="Slide 6"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <img
                src={km7}
                alt="Slide 7"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <img
                src={km8}
                alt="Slide 8"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
          </Carousel>
        </div>
        <div className="news">
          <h1 className="text-black font-bold text-[24px] md:text-[30px] mt-[20px] ml-[25px] md:ml-[50px]">
            Tin tức
          </h1>
          <div className="flex items-center space-x-[60px]">
            <img src={news1} className="w-[40%] h-full"></img>
            <div className="flex flex-col md:mt-[-30px] space-y-5 mt-10">
              <p className="text-black font-bold text-[30px]">
                Hạnh phúc đơn giản là sự tôn trọng
              </p>
              <p className="text-[25px] text-justify flex">
                Khi có sự tôn trọng, lẫn nhau quan hệ vợ chồng sẽ được củng cố,
                tình cảm thêm bền chặt...
              </p>
              <span
                className="flex items-center text-purple-700  cursor-pointer font-bold"
                onClick={() => navigate("/")}
              >
                {" "}
                <IoNavigateCircleOutline className="text-[40px]" /> Nhấn để xem
                thêm
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-[60px]">
            <img src={news2} className="w-[40%] h-full"></img>
            <div className="flex flex-col md:mt-[-30px] space-y-5 mt-10">
              <p className="text-black font-bold text-[30px]">
                Dạy con tiêu tiền hợp lý
              </p>
              <p className="text-[25px] text-justify flex">
                Việc con tiếp cận với những kiến thức tài chính từ sớm là cần
                thiết để con hình thành tư duy...
              </p>
              <span
                className="flex items-center text-purple-700  cursor-pointer font-bold"
                onClick={() => navigate("/")}
              >
                {" "}
                <IoNavigateCircleOutline className="text-[40px]" /> Nhấn để xem
                thêm
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-[60px] justify-between md:mt-[40px] mt-[20px] md:mb-[80px]">
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              responsive={responsive}
              containerClass="carousel-container"
            >
              <div>
                <img
                  src={gd1}
                  alt="Slide 1"
                  className="w-full h-[300px] object-cover cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              <div>
                <img
                  src={gd2}
                  alt="Slide 2"
                  className="w-full h-[300px] object-cover cursor-pointer"
                />
              </div>
              <div>
                <img
                  src={gd3}
                  alt="Slide 3"
                  className="w-full h-[300px] object-cover cursor-pointer"
                />
              </div>
              <div>
                <img
                  src={gd4}
                  alt="Slide 4"
                  className="w-full h-[300px] object-cover cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              <div>
                <img
                  src={gd5}
                  alt="Slide 5"
                  className="w-full h-[300px] object-cover cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              <div>
                <img
                  src={gd9}
                  alt="Slide 6"
                  className="w-full h-[300px] object-cover cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              <div>
                <img
                  src={gd7}
                  alt="Slide 7"
                  className="w-full h-[300px] object-cover cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
              <div>
                <img
                  src={gd10}
                  alt="Slide 8"
                  className="w-full h-[300px] object-cover cursor-pointer"
                  onClick={() => navigate("/")}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
