import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  bio: String,
  onboarded: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
