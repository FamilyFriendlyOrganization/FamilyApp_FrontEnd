import React, { useState } from "react";
import km1 from "../assets/km1.jpg";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../service/Auth";
import { toast } from "react-toastify";
import { updateAccount } from "../redux/action/userAction";
import { FaCamera } from "react-icons/fa";
import Footer from "./Footer";
import { IoIosReturnLeft } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const account = useSelector((state) => state.user.account);
  const [username, setUsername] = useState(account.username);
  const [password, setPassword] = useState(account.password);
  const [email, setEmail] = useState(account.email);
  const [displayName, setDisplayName] = useState(account.displayName);
  const [accountId, setAccountId] = useState(account.id);
  const [accountStatus, setAccountStatus] = useState(account.status);
  const dispatch = useDispatch();

  const [image, setImage] = useState(km1);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accountId) {
      toast.error("Không tìm thấy ID tài khoản.");
      return;
    }

    const account1 = {
      accountId,
      username,
      password,
      displayName,
      email,
      accountStatus,
    };
    let res = await updateProfile(accountId, account1);
    if (res) {
      toast.success("Cập nhật thông tin thành công!");
      dispatch(updateAccount(res.data));
    } else {
      toast.error("aaaa");
    }
  };
  return (
    <div className="main md:mt-[20px] mt-[10px]">
      <div className="flex items-center md:space-x-[380px] md:ml-[200px] ml-[100px] space-x-[100px]">
        <IoIosReturnLeft
          className="text-[35px] font-bold cursor-pointer"
          onClick={() => navigate("/home")}
        />
        <h1 className="font-bold text-[35px]">Chỉnh sửa hồ sơ</h1>
      </div>
      <div className="flex items-center justify-center rounded-full relative mt-[15px] ">
        <label htmlFor="fileInput" className="relative">
          <img
            className="rounded-full cursor-pointer"
            src={image}
            alt="Profile"
            style={{ maxHeight: "200px", maxWidth: "200px" }}
          />
          <FaCamera className="absolute bottom-2 right-7 translate-y-1/4 bg-transparent p-1 rounded-full  text-[25px]" />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>
      <form
        className="content flex items-center justify-center flex-col space-y-6 md:mt-[20px] mt-[20px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="relative border-2 border-black p-3 w-[400px]">
          <label
            className="text-purple-600  font-bold absolute -top-4 px-1 left-3 bg-white"
            htmlFor="username"
          >
            Tên đăng nhập
          </label>
          <input
            disabled
            id="username"
            type="text"
            className="border-none focus:outline-none w-full pt-2"
            placeholder="aaaa"
            name="username"
            value={username}
          ></input>
        </div>

        <div className="relative border-2 border-black p-3 w-[400px]">
          <label
            className="text-purple-600  font-bold absolute -top-4 px-1 left-3 bg-white"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="text"
            className="border-none focus:outline-none w-full pt-2"
            placeholder="aaaa"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="relative border-2 border-black p-3 w-[400px]">
          <label
            className="text-purple-600  font-bold absolute -top-4 px-1 left-3 bg-white"
            htmlFor="displayName"
          >
            Tên hiển thị
          </label>
          <input
            id="displayName"
            type="text"
            className="border-none focus:outline-none w-full pt-2"
            placeholder="aaaa"
            name="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          ></input>
        </div>
        <div className="flex items-center justify-center">
          <button className="btn bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold mt-2">
            Lưu thay đổi
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Profile;
