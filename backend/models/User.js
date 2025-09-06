// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// }, {
//   timestamps: true,
// });

// export const User = mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      // validate: {
      //   validator: function (v) {
      //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Email regex validation
      //   },
      //   message: (props) => `${props.value} is not a valid email address!`,
      // },
    },
    password: {
      type: String,
      required: true,
      
    },
  },
  {
    timestamps: true,
  }
);

export const User=mongoose.model("User",userSchema);