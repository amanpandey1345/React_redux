import { Link, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import Home from "./page/Home";
import Profile from "./page/Profile";
import Register from "./page/Register";
import Login from "./page/Login";

function App() {
  const { User, isAuth, isLoading } = useSelector((state) => state.auth);

  console.log(User, isAuth, isLoading);

  return (
    <>
      <div className="flex justify-around  items-center w-full bg-yellow-400 text-white text-3xl p-2">
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </>
  );
}

export default App;
