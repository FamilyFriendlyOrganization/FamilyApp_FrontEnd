import React, { useState } from "react";
import { PiLessThan } from "react-icons/pi";
import km1 from "../assets/km1.jpg";
import { RxEyeOpen } from "react-icons/rx";
import { PiEyeClosedLight } from "react-icons/pi";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../service/Auth";
import { toast } from "react-toastify";
import { updateAccount } from "../redux/action/userAction";

const Profile = () => {
  const account = useSelector((state) => state.user.account);
  const [username, setUsername] = useState(account.username);
  const [password, setPassword] = useState(account.password);
  const [email, setEmail] = useState(account.email);
  const [displayName, setDisplayName] = useState(account.displayName);
  const [isShowPassWord, setIsShowPassWord] = useState(false);
  const [accountId, setAccountId] = useState(account.id);
  const [accountStatus, setAccountStatus] = useState(account.status);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const account1 = {
      accountId,
      username,
      password,
      displayName,
      email,
      accountStatus,
    };
    let res = await updateProfile(accountId, account1);
    console.log("check", res);
    if (res) {
      toast.success("Cập nhật thông tin thành công!");
      dispatch(updateAccount(res.data));
      console.log(account);
    } else {
      toast.error("aaaa");
    }
  };
  return (
    <div className="main md:mt-[20px] mt-[10px]">
      <div className="flex items-center md:space-x-[380px] md:ml-[200px] ml-[150px] space-x-[70px]">
        <PiLessThan className="text-[35px] font-bold" />
        <h1 className="font-bold text-[35px]">Chỉnh sửa hồ sơ</h1>
      </div>
      <div className="flex items-center justify-center rounded-full relative mt-[15px] ">
        <img
          className="rounded-full"
          src={km1}
          style={{ maxHeight: "200px", maxWidth: "200px" }}
        ></img>
      </div>
      <form
        className="content flex items-center justify-center flex-col space-y-6 md:mt-[20px]"
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
            id="username"
            type="text"
            className="border-none focus:outline-none w-full pt-2"
            placeholder="aaaa"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="relative border-2 border-black p-3 w-[400px]">
          <label
            className="text-purple-600  font-bold absolute -top-4 px-1 left-3 bg-white"
            htmlFor="password"
          >
            Mật khẩu
          </label>
          <input
            id="password"
            type={isShowPassWord ? "text" : "password"}
            className="border-none focus:outline-none w-full pt-2"
            placeholder="aaaa"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {isShowPassWord ? (
            <span
              className="absolute right-5 top-5"
              onClick={() => setIsShowPassWord(false)}
            >
              <RxEyeOpen />
            </span>
          ) : (
            <span
              className="absolute right-5 top-5"
              onClick={() => setIsShowPassWord(true)}
            >
              <PiEyeClosedLight />
            </span>
          )}
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
          <button className="btn bg-purple-800 text-white font-bold">
            Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
