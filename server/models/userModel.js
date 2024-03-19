import mongoose from "mongoose";

const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: true
  }
}, {
  timestamps: true
})

export const User = new model("User", userSchema);