import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import phim1 from "../assets/phim1.jpg";
import phim2 from "../assets/phim2.jpg";
import phim3 from "../assets/phim3.png";
import phim4 from "../assets/phim4.jpg";
import phim5 from "../assets/phim5.jpg";
import "./Film.scss";
import Carousel from "react-multi-carousel";

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

const Film = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between bg-purple-800 h-[75px] px-[20px] md:px-[100px]">
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <IoIosArrowBack
              className="text-white text-[30px] md:text-[45px] cursor-pointer"
              onClick={() => navigate("/more-features")}
            />
          </div>
          <h1 className="text-white text-[25px] md:text-[35px]">Gợi ý phim</h1>
        </div>
        <div className="flex items-center space-x-10">
          <div className="rounded-full bg-black flex items-center p-1">
            <RxCross1 className="text-white text-[30px] md:text-[45px] cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="main mt-[40px] px-[20px] md:px-[100px] space-y-[40px] mb-[100px]">
        <p className="md:text-[40px] text-[25px]">Top 5 phim hôm nay</p>
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
                src={phim1}
                alt="Slide 1"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <img
                src={phim2}
                alt="Slide 2"
                className="w-full h-[300px] object-cover cursor-pointer"
              />
            </div>
            <div>
              <img
                src={phim3}
                alt="Slide 3"
                className="w-full h-[300px] object-cover cursor-pointer"
              />
            </div>
            <div>
              <img
                src={phim4}
                alt="Slide 4"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
            <div>
              <img
                src={phim5}
                alt="Slide 5"
                className="w-full h-[300px] object-cover cursor-pointer"
                onClick={() => navigate("/")}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Film;
