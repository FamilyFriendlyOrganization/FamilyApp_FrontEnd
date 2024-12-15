import "./App.css";
import AddFamily from "./components/AddFamily";
import CalendarNoti from "./components/CalendarNoti";
import Choose from "./components/Choose";
import Eat from "./components/Eat";
import GiveGift from "./components/GiveGift";
import Home from "./components/Home";
import Login from "./components/Login";
import ManageFamily from "./components/ManageFamily";
import MoneyManagement from "./components/MoneyManagement";
import Profile from "./components/Profile";
import ReceiveMoney from "./components/ReceiveMoney";
import Result from "./components/Result";
import SendGift from "./components/SendGift";
import SendMoney from "./components/SendMoney";
import Signup from "./components/Signup";
import TransferMoney from "./components/TransferMoney";
import Welcome from "./components/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/choose" element={<Choose />}></Route>
          <Route path="/money" element={<MoneyManagement />}></Route>
          <Route path="/eat" element={<Eat />}></Route>
          <Route path="/add-family" element={<AddFamily />}></Route>
          <Route path="/calendar" element={<CalendarNoti />} />
          <Route path="/transfer" element={<TransferMoney />} />
          <Route path="/receive" element={<ReceiveMoney />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/result" element={<Result />} />
          <Route path="/manage-family" element={<ManageFamily />} />
          <Route path="/give-gift" element={<GiveGift />} />
          <Route path="/send-gift" element={<SendGift />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
