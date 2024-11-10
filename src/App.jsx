import "./App.css";
import Choose from "./components/Choose";
import Eat from "./components/Eat";
import Home from "./components/Home";
import Login from "./components/Login";
import MoneyManagement from "./components/MoneyManagement";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
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
