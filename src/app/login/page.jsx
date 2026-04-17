import { CiUser, CiLock } from "react-icons/ci";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-100">
      {/* Card */}
      <div className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl flex overflow-hidden w-[900px]">
        {/* Left Side */}
        <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-10">
          <h1 className="text-5xl font-bold mb-4">WaySmart</h1>
          <p className="text-center text-lg opacity-80">
            Smart navigation starts here. Login to continue your journey.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">
            Welcome Back
          </h2>

          {/* Username */}
          <div className="flex items-center border rounded-lg px-3 py-2 mb-4 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
            <CiUser className="text-xl text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="ml-2 w-full bg-transparent outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex items-center border rounded-lg px-3 py-2 mb-6 bg-gray-50 focus-within:ring-2 focus-within:ring-blue-400">
            <CiLock className="text-xl text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="ml-2 w-full bg-transparent outline-none"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-500 transition font-semibold">
            LOGIN
          </button>

          {/* Extra */}
          <p className="text-sm text-center text-gray-500 mt-4">
            Forgot password?
          </p>
        </div>
      </div>
    </div>
  );
}
