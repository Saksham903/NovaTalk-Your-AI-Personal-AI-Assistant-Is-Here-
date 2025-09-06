import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import sendMail from "../middlewares/sendMail.js";

// Sign-up controller
export const signUpUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
    const hashedPassword = await bcrypt.hash(password, 10);

    const verifyToken = jwt.sign(
      { firstName, lastName, email, hashedPassword, otp },
      process.env.JWT_SECRET,
      { expiresIn: "5m" }
    );

    const otpHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaTalk Verification</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; }
        .otp { font-size: 24px; color: #7b68ee; }
    </style>
</head>
<body>
    <h1>OTP Verification</h1>
    <p>Hello ${email}, your OTP for account verification is:</p>
    <p class="otp">${otp}</p>
</body>
</html>`;

    await sendMail(email, "OTP Verification From Chat Bot", otpHtml);

    res.json({
      message: "OTP sent successfully to your email",
      verifyToken,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// OTP verification controller
export const verifyUser = async (req, res) => {
  try {
    const { otp, verifyToken } = req.body;

    if (!otp || !verifyToken) {
      return res.status(400).json({ message: "OTP and token are required" });
    }

    const decoded = jwt.verify(verifyToken, process.env.JWT_SECRET);

    if (decoded.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const newUser = await User.create({
      firstName: decoded.firstName,
      lastName: decoded.lastName,
      email: decoded.email,
      password: decoded.hashedPassword,
    });

    res.json({
      message: "User verified and registered successfully",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login controller
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "5d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// My profile controller
export const myProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Handle contact form controller
export const handleContactForm = async (req, res) => {
  try {
    const { email, message, firstName, lastName, company, contactReason } =
      req.body;

    if (
      !email ||
      !message ||
      !firstName ||
      !lastName ||
      !company ||
      !contactReason
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!email.includes("@")) {
      return res.status(400).json({
        message: "Please enter a valid email",
      });
    }

    const subject = "Thank you for contacting us we will solve your query soon";
    const thankYouMessage = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Type:</strong> ${contactReason}</p>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "Not provided"}</p>
      <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #8b5cf6; padding-left: 16px; margin: 16px 0; font-style: italic;">
        ${message}
      </blockquote>
    `;

    await sendMail(email, subject, thankYouMessage);

    res.json({
      message: "Thank you for contacting us. We will get back to you soon.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const handleSubscribeEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    const subject = "Thank you for contacting us";
    const thankYouMessage = `
      <h2>New Contact Form Submission</h2>
      
      <p><strong>Email:</strong> ${email}</p>
      
      <blockquote style="border-left: 4px solid #8b5cf6; padding-left: 16px; margin: 16px 0; font-style: italic;">
       Thankyou for subsciring here
      </blockquote>
    `;
    await sendMail(email, subject, thankYouMessage);
    res.json({
      message: "Thank you for subscribing to our newsletter.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
