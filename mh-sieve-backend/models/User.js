import mongoose, { Schema } from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      // required: [true, "Please enter your first name."],
    },
    lastName: {
      type: String,
      // required: [true, "Please enter your last name."],
    },
    username: {
      type: String,
      // required: [true, "Please enter your username."],
      minLength: [4, "Username length must be 4 or more char"]
    },
    slug: {
      type: String,
      // required: true,
      // unique: true,
    },
    email: {
      type: String,
      // required: [true, "Please enter your email address."],
      validate: validator.isEmail,
      // unique: [true, "Please use official email address."],
    },
    // phone: {
    //   type: String,
    //   // required: [true, "Please enter your phone number."],
    //   unique: [true, "Please enter valid phone number"],
    //   minLength: [10, "Please enter valid phone number."],
    // },
  //   location: {
  //     address: String,
  //     city: String,
  //     state: String,
  //     pincode: Number
  //   },
  //   dob: {
  //     type: Date,
  //   },
  //   gender: {
  //     type: String,
  //   },
  //   description: {
  //     type: String,
  //     minLength: [10, "Description must be greater than 10 characters."],
  //   },
  //   profileImg: {
  //     type: String,
  //   },
  //   className: {
  //     type: String,
  //   },
  //   modules: [
  //     {
  //       type: String,
  //     },
  //   ],
  //   otp: {
  //     type: String,
  //     default: "",
  //   },
  //   isVerified: {
  //     type: Boolean,
  //     default: false,
  //   },
  //   isActive: {
  //     type: Boolean,
  //     default: true,
  //   },
  //   isDeleted: {
  //     type: Boolean,
  //     default: false,
  //   }
  // },
  // {
  //   timestamps: true,
  }
);

export const User = mongoose.model("User", schema)
