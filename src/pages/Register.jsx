import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRegisterMutation } from "../features/api/authApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("Jude");
  const [email, setEmail] = useState("augustjude3@gmail.com");
  const [password, setPassword] = useState("jjboxerlizhk");
  const [password_confirmation, setPasswordConfirmation] = useState("jjboxerlizhk");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const user = { name, email, password, password_confirmation };
    const {data} = await register(user);
    if(data?.success) navigate('/login')
    console.log(data);
};

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        onSubmit={registerHandler}
        className="w-1/4 flex flex-col items-center bg-gray-50 p-10 gap-10 rounded shadow"
      >
        <h1 className="text-green-500 text-xl font-bold">Register account</h1>
        <input
          type="text"
          className="w-80 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          className="w-80 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-80 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="w-80 outline-none border-b-2 py-3 bg-transparent"
          placeholder="Password comfirmation"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <div className="flex flex-col justify-center items-center">
          <div className="mb-2">
            <small className="text-xs">
              Already have an account?
              <Link to={"/login"}>
                <span className="text-green-500 cursor-pointer">Login</span>
              </Link>
            </small>
          </div>
          <button className="bg-green-400 w-24 mx-auto px-5 py-1 text-white cursor-pointer rounded">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
