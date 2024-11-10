import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./Choose.css";

const options = [
  { value: "chocolate", label: "Gia đình A" },
  { value: "strawberry", label: "Gia đình B" },
  { value: "vanilla", label: "Gia đình C" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "black",
    borderRadius: "40px",
    padding: "5px",
    fontWeight: "bold",
  }),
};

const Choose = () => {
  const account = useSelector((state) => state.user.account);
  const [selectedOption, setSelectOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="bg-choose1  relative w-full h-full bg-center">
      <form
        className="overlay bg-white p-20 rounded-[20px] fade-in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-gray-400 border-[1px]"
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <h1 className="text-[36px] text-black font-bold mt-[-40px] font-serif">
          Xin chào, {account.displayName}
        </h1>
        <h2 className="text-[28px] text-gray-500 mt-10">
          Ngày hôm nay của bạn thế nào??
        </h2>
        <h2 className="text-[28px] text-black mt-10 font-bold mb-10">
          Bạn đang là thành viên của 2 gia đình, hãy chọn 1 nhé!
        </h2>
        <Select
          styles={customStyles}
          placeholder="Chọn gia đình của bạn"
          className="font-bold"
          defaultValue={selectedOption}
          onChange={setSelectOption}
          options={options}
        />
        <div className="flex justify-center items-center mt-[50px] mb-[-50px]">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[28px] px-20 py-1 rounded-[50px] font-bold">
            Tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
};

export default Choose;
