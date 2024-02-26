import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerApi } from '../Redux/Action/userAction';

const Register = () => {


    const { isAuth, User, isLoading, errorMessage } = useSelector((state) => state.auth);
    const { isRegisterSuccess } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [image, setImage] = useState("");
    const [imgs, setImgs] = useState("");
  
    const navigate= useNavigate()
  

    const handleSub = (e) => {
        e.preventDefault();
        // const file = e.target[0].value
        const name = e.target[1].value;
        const email = e.target[2].value;
        const password = e.target[3].value;
    
        const formdata = new FormData();
    
        formdata.append("name", name);
        formdata.append("email", email);
        formdata.append("password", password);
        formdata.append("file", imgs);
        dispatch(registerApi(formdata));
      };
    const handleImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setImage(reader.result);
          setImgs(file);
          console.log(reader.result);
        };
      };


  return (
    <div className="flex justify-center  items-center w-full   h-screen">
          <form
          onSubmit={handleSub}
          className="flex flex-col w-1/3 gap-2 p-4 bg-red-400 item-center registers h-[400px]"
        >
          <label htmlFor="imgs" className="flex justify-center">
            <img
              src={image}
              alt=""
              className="w-[150px] rounded-full h-[150px] ring-2 ring-blue-400"
            />
            <input type="file" hidden id="imgs" onChange={handleImage} />
          </label>

          <input type="text" placeholder="Name" className="p-2" />
          <input type="email" placeholder="Email" className="p-2" />
          <input type="text" placeholder="Password" className="p-2" />
          <button type="submit" className="px-4 py-2 bg-blue-500">
            Register
          </button>
          {isRegisterSuccess ? (
            <span className="text-green-600">User register Successfully</span>
          ) : (
            <span className="text-red-600">{errorMessage}</span>
          )}
        </form>
    </div>
  )
}

export default Register