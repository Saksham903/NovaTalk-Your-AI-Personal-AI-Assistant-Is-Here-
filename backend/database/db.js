import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "ChatBot",
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error);
  }
};

export default dbConnect;