import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./Choose.css";
import { getAllUser, getFamilyById } from "../service/Service";
import { chooseFamily } from "../redux/action/userAction";

const options = [
  { value: "chocolate", label: "Gia đình A" },
  { value: "strawberry", label: "Gia đình B" },
  { value: "vanilla", label: "Gia đình C" },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: "black",
    borderRadius: "10px",
    padding: "5px",
    fontWeight: "bold",
  }),
};

const ChooseNoFamily = () => {
  const account = useSelector((state) => state.user.account);
  const [accountId, setAccountId] = useState(account.id);
  const [userId, setUserId] = useState();
  const [familyId, setFamilyId] = useState([]);
  const [familyListId, setFamilyListId] = useState("");
  const [familyListName, setFamiyListName] = useState([]);
  const [selectedFamily, setSelectdFamily] = useState("");
  const [selectedOption, setSelectOption] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(chooseFamily(selectedFamily));
    navigate("/home");
  };

  const fetchFamilyId = async () => {
    let res = await getAllUser();
    if (res) {
      const newRes = res.data.filter(
        (user) => user.assignedAccountId === accountId
      );
      setFamilyListId(newRes.map((family) => family.familyId));
    }
  };

  const fetchFamilyName = async () => {
    try {
      const responses = await Promise.all(
        familyListId.map((id) => getFamilyById(id))
      );

      const familyNames = responses.map((res, index) => ({
        value: familyListId[index],
        label: res.data.family.familyName,
      }));

      setFamiyListName(familyNames);
    } catch (error) {
      console.error("Lỗi khi tải tên gia đình:", error);
    }
  };

  useEffect(() => {
    fetchFamilyId();
  }, [accountId]);
  useEffect(() => {
    if (familyListId.length > 0) {
      fetchFamilyName();
    }
  }, [familyListId]);

  return (
    <div className="bg-choose1  relative w-full h-full bg-center">
      <form className="overlay bg-white p-20 rounded-[20px] fade-in absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-gray-400 border-[1px]">
        <h1 className="text-[36px] text-black font-bold mt-[-40px] font-serif">
          Xin chào, {account.displayName}
        </h1>
        <h2 className="text-[28px] text-gray-500 mt-10">
          Ngày hôm nay của bạn thế nào??
        </h2>
        {familyListName.length === 0 ? (
          <>
            <h2 className="text-[28px] text-black mt-10 font-bold mb-10">
              Bạn đang không thuộc gia đình nào. Tham gia hoặc tạo gia đình ngay
              nhé!
            </h2>
            <div className="flex justify-center items-center mt-[50px] mb-[-50px] gap-[20px]">
              <button
                className="bg-blue-600 text-white text-[28px] px-12 py-1 rounded-[50px] font-bold"
                onClick={() => navigate("/join-family")}
              >
                Tham gia
              </button>
              <button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[28px] px-20 py-1 rounded-[50px] font-bold"
                onClick={() => navigate("/create-family")}
              >
                Tạo
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-[28px] text-black mt-10 font-bold mb-10">
              Bạn đang là thành viên của {familyListName.length} gia đình, hãy
              chọn 1 nhé!
            </h2>
            <Select
              styles={customStyles}
              placeholder="Chọn gia đình của bạn"
              className="font-bold"
              defaultValue={familyListName[0]}
              onChange={(seletecdOption) =>
                setSelectdFamily(seletecdOption.value)
              }
              options={familyListName}
            />
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-[28px] px-20 py-1 rounded-[50px] font-bold"
              onClick={(e) => handleSubmitForm(e)}
            >
              Tiếp tục
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default ChooseNoFamily;
