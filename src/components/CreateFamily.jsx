/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./Choose.css";
import { createFamily } from "../service/Service";
import "react-datepicker/dist/react-datepicker.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { toast } from "react-toastify";

const options = [
  { value: 0, label: "Nam " },
  { value: 1, label: "Nữ" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "black",
    padding: "5px",
    fontWeight: "bold",
  }),
};

const CreateFamily = () => {
  const account = useSelector((state) => state.user.account);
  const [name, setName] = useState(account.username);
  const [status, setAccountStatus] = useState(account.status);
  const [accountId, setAccountId] = useState(account.id);
  const [familyName, setFamilyName] = useState("");
  const [budget, setFamilyBudget] = useState(0);
  const [sex, setSex] = useState(0);
  const [birthday, setBirthday] = useState(null);
  const navigate = useNavigate();

  const family = { status: 0, familyName, budget, createdAccountId: accountId };
  const user = { status, name, userId: accountId, birthday, sex };
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let res = await createFamily(family, user);
    console.log(res);
    if (res && res.data) {
      toast.success("Tạo gia đình thành công!");
      navigate("/home");
    } else {
      toast.error("Tạo gia đình thất bại!");
    }
  };

  return (
    <div className="bg-choose1 relative w-full h-full bg-center">
      <form
        className="overlay bg-white p-20 rounded-[20px] fade-in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-gray-400 border-[1px]"
        // onSubmit={(e) => handleSubmitForm(e)}
      >
        <h1 className="md:text-[40px] text-[25px] text-black font-bold mt-[-40px] font-serif text-center">
          Tạo gia đình
        </h1>
        <div className="relative border-[1px] border-gray-500 p-4 w-[700px] mt-[40px] rounded-md">
          <label
            className="absolute -top-6 px-3 left-8 bg-white text-[24px]"
            htmlFor="familyName"
          >
            Tên gia đình
          </label>
          <input
            id="familyName"
            type="text"
            className="border-none focus:outline-none w-full"
            placeholder="Hãy đặt tên bạn muốn cho gia đình nhé"
            name="familyName"
            onChange={(e) => setFamilyName(e.target.value)}
          ></input>
        </div>
        <div className="relative border-[1px] border-gray-500 p-4 w-[700px] mt-[40px] mb-[40px] rounded-md">
          <label
            className="absolute -top-6 px-3 left-8 bg-white text-[24px]"
            htmlFor="budget"
          >
            Ngân sách
          </label>
          <input
            id="budget"
            type="number"
            className="border-none focus:outline-none w-full"
            placeholder="Nhập số tiền dự kiến trong ngân sách gia đình"
            onChange={(e) => setFamilyBudget(e.target.value)}
            name="budget"
          ></input>
        </div>
        <Select
          styles={customStyles}
          placeholder="Chọn giới tính"
          className="font-bold"
          defaultValue={options[0]}
          onChange={(selectedOption) => setSex(selectedOption.value)}
          options={options}
        />
        <div className="mt-[40px] border-[1px] border-gray-500 p-1 w-[700px] rounded-md">
          <Flatpickr
            value={birthday}
            onChange={([date]) => setBirthday(date)}
            options={{ dateFormat: "d/m/Y" }}
            className="text-black text-[24px] focus:outline-none font-bold px-3"
            placeholder="Chọn ngày sinh"
          />
        </div>
        <div className="flex justify-center items-center mt-[50px] mb-[-50px]">
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[28px] px-20 py-1 rounded-[50px] font-bold"
            onClick={() => navigate("/home")}
          >
            Tiếp tục
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateFamily;
