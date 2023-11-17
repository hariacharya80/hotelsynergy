const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  hotelCode: {
    type: String,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  mailedToken: {
    type: String,
  },
  authToken: {
    type: String,
  },
});

const UserModel = mongoose.model("HOTEL_staff", userSchema, "HOTEL_staff");
module.exports = UserModel;
