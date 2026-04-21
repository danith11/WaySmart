"use client";

import { CiUser, CiLock } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

export default function SignupPage() {
  const [isVisible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!isVisible);
  };
  return (
    <div className="min-h-screen flex justify-center items-center bg-blue-50">
      <div className="flex min-h-[600px] w-[900px] bg-black/5 shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Create Your Account
          </h2>
          <div className="flex items-center  rounded-lg px-3 py-2 mb-4 bg-gray-50">
            <CiUser className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Enter Username"
              className="ml-2 w-full bg-transparent outline-none"
            />
          </div>

          <div className="flex items-center  rounded-lg px-3 py-2 mb-4 bg-gray-50">
            <CiLock className="text-xl text-gray-500" />
            <input
              type={isVisible ? 'text' : 'password'}
              placeholder="Enter a Password"
              className="ml-2 w-full bg-transparent outline-none"
            />
            {isVisible ? (
              <FiEye className="text-xl text-gray-500" onClick={handleClick} />
            ) : (
              <FiEyeOff
                className="text-xl text-gray-500"
                onClick={handleClick}
              />
            )}
          </div>

          <div className="flex items-center  rounded-lg px-3 py-2 mb-4 bg-gray-50">
            <CiLock className="text-xl text-gray-500" />
            <input
              type={isVisible ? 'text' : 'password'}
              placeholder="Re-Enter the Password"
              className="ml-2 w-full bg-transparent outline-none"
            />
            {isVisible ? (
              <FiEye className="text-xl text-gray-500" onClick={handleClick} />
            ) : (
              <FiEyeOff
                className="text-xl text-gray-500"
                onClick={handleClick}
              />
            )}
          </div>

          <button className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition font-semibold">
            SIGN UP
          </button>

          <p className="text-center text-sm text-gray-900 mt-4">Or</p>

          <p className="flex gap-2 justify-center text-center text-sm text-gray-500 mt-4">
            Do you have an Account
            <span>
              <button className="text-black">Login</button>
            </span>
          </p>
        </div>
        <div className="w-1/2 flex flex-col bg-blue-900 items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">WaySmart</h1>
          <p className="text-center text-lg opacity-80">
            Sign Up to continue your journey
          </p>
        </div>
      </div>
    </div>
  );
}
