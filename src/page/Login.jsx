import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logInApi } from "../Redux/Action/userAction";

const Login = () => {
    const { isAuth, User, isLoading, errorMessage } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
 
  
    const navigate= useNavigate()
  
    const handleSubs = (e) => {
        e.preventDefault();
    
        const email = e.target[0].value;
        const password = e.target[1].value;
    
        dispatch(logInApi({ email, password }));
        navigate("/")
      };
  return (
    <div className="flex justify-center  items-center w-full  h-screen">
        <form 
          onSubmit={handleSubs}
          className="flex flex-col w-1/3 gap-2 p-4 bg-red-400 item-center login h-[200px]"
        >
          <input type="email" placeholder="Email" className="p-2" />
          <input type="text" placeholder="Password" className="p-2" />
          <button type="submit" className="px-4 py-2 bg-blue-500">
            Login
          </button>
        </form>
    </div>
  );
};

export default Login;
