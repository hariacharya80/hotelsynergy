const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const cors = require("cors");
const HotelModel = require("./models/hotel.model");
const UserModel = require("./models/user.model");
const authRoute = require("./routes/AuthRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
dotenv.config();

//connect to database
const connectDatabase = async () => {
  console.log("\n👉 : Connecting to Database");
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("😁 : Connected to Database");
    return true;
  } catch (e) {
    console.log("😭 : Can not connect to database.\n");
    return false;
  }
};

//start the server.
const startServer = async () => {
  const db_connected = await connectDatabase();
  if (db_connected) {
    app.listen(process.env.SERVER_PORT);
    console.log(
      "🎉 : Server started successfully at port " + process.env.SERVER_PORT
    );
    createDemoStaffAndHotel();
  } else {
    console.log("😴 : No database instance connected, server terminated.");
    process.exit();
  }
};

//check if there are some hotels, if none are avilable
//create demo hotels and staff.

const createDemoStaffAndHotel = async () => {
  const hotelList = await HotelModel.find({});
  console.log("\n👉 : Looking for hotels.");
  if (hotelList.length === 0) {
    console.log("😭 : No hotels were found.");
    console.log("👉 : Adding demo hotel.");
    const date = new Date();
    try {
      const demoHotel = await HotelModel.create({
        name: "Mero Hotel Ltd.",
        code: "001",
        phone: "9800000",
        location: "Beni, Nepal",
        package: "normal",
        website: "www.merohotelexample.com",
        lastActivated: date.getDate(),
      });
      await demoHotel.save();
      console.log("🥳: Demo Hotel Created Successfully.");
    } catch (e) {
      console.log(e);
      console.log("😭: Error while creating a demo hotel.");
    }
  }
  console.log("\n👉 : Looking for staff.");
  const staffList = await UserModel.find({});
  if (staffList.length === 0) {
    console.log("😭: No staff were found.");
    console.log("👉: Adding a demo user.");
    const demoEncryptedPassword = await bcrypt.hash("admin12345", 10);
    try {
      const newStaff = await UserModel.create({
        name: "Demo User",
        email: "demo@system.mail",
        hotelCode: "001",
        isVerified: true,
        password: demoEncryptedPassword,
        authToken: "",
        mailedToken: "",
        role: "admin",
      });
      await newStaff.save();
      console.log("😁 : New staff added successfully.\n");
    } catch (e) {
      console.log("😭: Error adding new staff.\n");
    }
  }
};

startServer();
