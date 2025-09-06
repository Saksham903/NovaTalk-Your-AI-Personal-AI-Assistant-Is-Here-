import { createContext, useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { server } from "../main";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [btnLoading, setBtnLoading] = useState(false);
  const [userInitials, setUserInitials] = useState(""); // Add state for initials

  async function loginUser(email, password, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/login`, {
        email,
        password,
      });
      console.log("API Response:", data); // Debug log
      console.log("User Object:", data.user); // Debug log

      toast.success(data.message);
      localStorage.setItem("token", data.token); // Save token in localStorage
      setIsAuth(true); // Update isAuth state immediately
      setUser(data.user); // Set user data

      // Extract initials from firstName and lastName
      if (data.user?.firstName && data.user?.lastName) {
        const initials = `${data.user.firstName[0]}${data.user.lastName[0]}`.toUpperCase();
        setUserInitials(initials); // Store initials
        console.log("User Initials Set:", initials); // Debug log
      } else {
        console.log("First Name or Last Name missing in API response."); // Debug log
        setUserInitials("?"); // Fallback value
      }

      navigate("/home"); // Navigate to home page
      setBtnLoading(false);
    } catch (error) {
      console.log("Login Error:", error.response?.data || error); // Debug log
      toast.error(error.response?.data?.message || "Login failed");
      setBtnLoading(false);
    }
  }

  async function signupUser(firstName, lastName, email, password, navigate) {
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      toast.success(data.message);
      localStorage.setItem("verifyToken", data.verifyToken);
      navigate("/verify");
      setBtnLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  }

  const [user, setUser] = useState([]);
const [isAuth, setIsAuth] = useState(() => !!localStorage.getItem("token"));  async function verifyUser(otp, navigate) {
    const verifyToken = localStorage.getItem("verifyToken");
    if (!verifyToken) {
      return toast.error("Please request a verification code first.");
    }

    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/verify`, {
        otp,
        verifyToken,
      });
      toast.success(data.message);
      localStorage.clear();
      localStorage.setItem("verifyToken", data.token);
      localStorage.setItem("token", data.token); // Save token in localStorage
      navigate("/login");
      setBtnLoading(false);
      // setIsAuth(true);
      // setUser(data.user);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  }

  const [loading, setLoading] = useState(true);

  async function fetchUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token not found in localStorage.");
      setIsAuth(false);
      return;
    }

    try {
      const { data } = await axios.get(`${server}/api/user/me`, {
        headers: {
          token: token,
        },
      });
      console.log("Fetch User Response:", data); // Debug log
      setIsAuth(true);
      setUser(data);

      // Extract initials from firstName and lastName
      if (data?.firstName && data?.lastName) {
        const initials = `${data.firstName[0]}${data.lastName[0]}`.toUpperCase();
        setUserInitials(initials); // Store initials
        console.log("User Initials Set:", initials); // Debug log
      } else {
        console.log("First Name or Last Name missing in Fetch User response."); // Debug log
        setUserInitials("?"); // Fallback value
      }

      setLoading(false);
    } catch (error) {
      console.log("Error fetching user:", error.response?.data || error); // Debug log
      setIsAuth(false);
      setLoading(true);
    }
  }

  const logouHandler = (navigate) => {
    localStorage.clear();
    setIsAuth(false);
    setUser([]);
    navigate("/login");
    toast.success("Logged out successfully");
  };

  async function handleSubscribe(email){
    try {
      const { data } = await axios.post(`${server}/api/user/handleSubscribe`, {
        email,
      });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function handleSendEmail(firstName, lastName, email, company, subject, message, contactReason) {
    try {
      const { data } = await axios.post("http://localhost:4000/api/user/contact", {
        firstName,
        lastName,
        email,
        company,
        subject,
        message,
        contactReason,
      });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send message");
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        loginUser,
        signupUser,
        btnLoading,
        isAuth,
        setIsAuth,
        user,
        userInitials, // Provide initials to context
        verifyUser,
        loading,
        logouHandler,
        handleSubscribe,
        handleSendEmail,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
