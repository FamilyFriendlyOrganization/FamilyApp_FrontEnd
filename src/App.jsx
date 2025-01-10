import "./App.css";
import AddFamily from "./components/AddFamily";
import Bill from "./components/BIll/Bill";
import BillElectric from "./components/BIll/Electric/BillElectric";
import BillInternet from "./components/BIll/Internet/BillInternet";
import Internet from "./components/BIll/Internet/Internet";
import BillTuition from "./components/BIll/Tuition/BillTuition";
import Tuition from "./components/BIll/Tuition/Tuition";
import { BillWater } from "./components/BIll/Water/BillWater";
import Water from "./components/BIll/Water/Water";
import CalendarNoti from "./components/CalendarNoti";
import Choose from "./components/Choose";
import ChooseNoFamily from "./components/ChooseNoFamily";
import CreateFamily from "./components/CreateFamily";
import CreateNote from "./components/CreateNote";
import Eat from "./components/Eat";
import EditProfile from "./components/EditProfile";
import JoinFamily from "./components/Family/actions/join/JoinFamily";
import Film from "./components/Film";
import GiveGift from "./components/GiveGift";
import Home from "./components/Home";
import FindHotel from "./components/Hotel/FindHotel";
import Hotel from "./components/Hotel/Hotel";
import RoomDetail from "./components/Hotel/RoomDetail";
import Login from "./components/Login";
import ManageFamily from "./components/ManageFamily";
import MoneyManagement from "./components/MoneyManagement";
import Cloth from "./components/MoreFeatures/Cloth";
import MoreFeatures from "./components/MoreFeatures/MoreFeatures";
import Moving from "./components/Moving";
import Notification from "./components/Notification/Notification";
import NotificationContent from "./components/Notification/NotificationContent";
import Profile from "./components/Profile";
import ReceiveMoney from "./components/ReceiveMoney";
import Result from "./components/Result";
import SendGift from "./components/SendGift";
import SendMoney from "./components/SendMoney";
import Shopping from "./components/Shopping";
import Signup from "./components/Signup";
import FindResult from "./components/Ticket/FindResult";
import Ticket from "./components/Ticket/Ticket";
import TicketInfo from "./components/Ticket/TicketInfo";
import TransferMoney from "./components/TransferMoney";
import Travel from "./components/Travel/Travel";
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
          <Route path="/create-family" element={<CreateFamily />} />
          <Route
            path="*"
            element={
              <div className="flex items-center justify-center">
                Không tìm thấy trang
              </div>
            }
          />
          <Route path="/choose-noFamily" element={<ChooseNoFamily />} />
          <Route path="/notification" element={<Notification />} />
          <Route path="/join-family" element={<JoinFamily />} />
          <Route
            path="/notification-content"
            element={<NotificationContent />}
          />
          <Route path="/travel" element={<Travel />} />
          <Route path="/film" element={<Film />} />
          <Route path="/water" element={<Water />} />
          <Route path="/bill-water" element={<BillWater />} />
          <Route path="/internet" element={<Internet />} />
          <Route path="bill-internet" element={<BillInternet />} />
          <Route path="/bill-electric" element={<BillElectric />} />
          <Route path="tuition" element={<Tuition />} />
          <Route path="/bill-tuition" element={<BillTuition />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/find-result" element={<FindResult />} />
          <Route path="/ticket-info" element={<TicketInfo />} />
          <Route path="/more-features" element={<MoreFeatures />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/find-hotel" element={<FindHotel />} />
          <Route path="/room-detail" element={<RoomDetail />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/moving" element={<Moving />} />
          <Route path="/cloths" element={<Cloth />} />
          <Route path="/film" element={<Film />} />
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
