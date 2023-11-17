const mongoose = require("mongoose");
const hotelSchema = new mongoose.Schema({
  code: {
    type: String,
  },
  name: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  phone: {
    type: String,
  },
  package: {
    type: String,
  },
  lastActivated: {
    type: String,
  },
});

const HotelModel = mongoose.model("HOTEL_info", hotelSchema, "HOTEL_info");

module.exports = HotelModel;
