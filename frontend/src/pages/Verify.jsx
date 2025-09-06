import React, { useState, useRef, useEffect } from "react";
import { UserData } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Shield, ArrowLeft, AlertCircle } from "lucide-react";

const Verify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const {resendOtp}=UserData();
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(30);
  const { verifyUser, btnLoading } = UserData();
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  // Timer for resend functionality
  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError("");

      // Auto-focus next input
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d+$/.test(pastedData)) {
      const newOtp = pastedData
        .split("")
        .concat(Array(6 - pastedData.length).fill(""));
      setOtp(newOtp.slice(0, 6));
      inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const otpString = otp.join("");

    if (otpString.length !== 6) {
      setError("Please enter all 6 digits");
      return;
    }

    setError("");
    verifyUser(Number(otpString), navigate);
  };

  const handleResend = () => {
    if(resendTimer===0){
      resendOtp();
      setResendTimer(30);
    }
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
            <button
              onClick={() => navigate(-1)}
              className="mb-4 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>

            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Verify Your Account
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              We've sent a 6-digit verification code to
              <br />
              <span className="font-medium text-gray-800">
                your registered email
              </span>
            </p>
          </div>

          {/* OTP Input Form */}
          <form onSubmit={submitHandler} className="space-y-6">
            <div className="flex justify-center space-x-3 mb-6">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className={`w-12 h-14 text-center text-xl font-bold border-2 rounded-xl transition-all duration-200 outline-none ${
                    digit
                      ? "border-blue-500 bg-blue-50 text-blue-600"
                      : "border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:bg-blue-50"
                  } ${error ? "border-red-300 bg-red-50" : ""}`}
                />
              ))}
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-center justify-center space-x-2 text-red-600 text-sm">
                <AlertCircle className="w-4 h-4" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={btnLoading || otp.some((digit) => !digit)}
              className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                btnLoading || otp.some((digit) => !digit)
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 active:scale-[0.98] shadow-lg hover:shadow-xl"
              }`}
            >
              {btnLoading && (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Please Wait...</span>
                </div>
              )}
              {!btnLoading && "Verify Account"}
            </button>
          </form>

          {/* Resend Section */}
          <div className="text-center mt-6 pt-6 border-t border-gray-100">
            <p className="text-gray-600 text-sm mb-2">
              Didn't receive the code?
            </p>
            {resendTimer > 0 ? (
              <p className="text-gray-500 text-sm">
                Resend code in{" "}
                <span className="font-medium text-blue-600">
                  {resendTimer}s
                </span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors hover:underline"
              >
                Resend Code
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
