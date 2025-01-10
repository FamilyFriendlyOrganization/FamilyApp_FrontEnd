import React from "react";
import { useNavigate } from "react-router-dom";

const JoinFamily = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-choose1 relative w-full h-full bg-center">
        <form className="overlay bg-white p-6 md:p-20 rounded-[20px] fade-in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-gray-400 border-[1px] w-11/12 md:w-auto">
          <div className="border-[1px] border-gray-500 p-4 w-full md:w-[700px] rounded-md">
            <input
              id="familyName"
              type="text"
              className="border-none focus:outline-none w-full"
              placeholder="Nhập mã gia đình mà bạn muốn tham gia"
              name="familyName"
              // onChange={(e) => setFamilyName(e.target.value)}
            ></input>
          </div>
          <h2 className="text-[20px] md:text-[28px] text-black mt-10 font-bold mb-10">
            Nếu chưa có mã mời hãy liên hệ với người thân ngay nhé!
          </h2>
          <div className="flex justify-center items-center">
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[20px] md:text-[28px] px-10 md:px-20 py-1 rounded-[50px] font-bold"
              onClick={() => navigate("/home")}
            >
              Tiếp tục
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JoinFamily;
