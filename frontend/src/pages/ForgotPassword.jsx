import React, { useState } from "react";
import { UserData } from "../context/UserContext";
// import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "../components/Loading";
import { Mail, Lock, LogIn, Eye, EyeOff, Brain } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const { btnLoading } = UserData();

//   const navigate = useNavigate();

  //   useEffect(() => {
  //     if (isAuth) {
  //       navigate("/home");
  //     }
  //   }, [isAuth, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    // loginUser(email, password, navigate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full translate-y-12 -translate-x-12 opacity-50"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              {/* <span className="text-xl font-semibold text-gray-900">
                NovaTalk
              </span> */}
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={submitHandler} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Please enter your email here
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl outline-none transition-all duration-200 focus:border-blue-500 focus:bg-blue-50 hover:border-gray-300"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={btnLoading}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                btnLoading
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-[0.98] shadow-lg hover:shadow-xl"
              }`}
            >
              {btnLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <LoadingSpinner />
                  <span>Sending...</span>
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>

          {/* Footer */}
          {/* <div className="text-center mt-6 pt-6 border-t border-gray-100">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <button
                onClick={() => navigate("/signup")}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors hover:underline cursor-pointer"
              >
                Sign up here
              </button>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
