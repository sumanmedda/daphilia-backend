import mongoose from "mongoose"

const userModel = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  image: {
    type: String,
  },
  bio: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  location: {
    type: String,
  },
})

export default mongoose.model("User", userModel)
