import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { useLoginMutation } from "../features/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../features/service/authSlice";

const Login = () => {
  const [email, setEmail] = useState("augustjude2@gmail.com");
  const [password, setPassword] = useState("jjboxerlizhk");
  const [login] = useLoginMutation();
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const loginhandler = async(e) => {
    e.preventDefault();
    console.log(email, password);
    const {data} = await login({email,password})
    dispatch(addUser({user:data?.user,token:data?.token}))
    if(data?.success) navigate('/')
    console.log(data);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={loginhandler}
        className="w-96 flex flex-col items-center bg-gray-50 p-10 gap-10 rounded shadow"
      >
        <h1 className="text-blue-500 text-xl font-bold">Login Account</h1>
        <input
          type="email"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-72 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2">
            <small className="text-xs">
              Don't have an account?
              <Link to={"/register"}>
                <span className="text-green-500 cursor-pointer">Register</span>
              </Link>
            </small>
          </div>
          <button className="bg-blue-400 w-24 mx-auto px-5 py-1 text-white cursor-pointer rounded">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
