const express = require("express");
const LoginController = require("../controllers/Login.controller");
const ResetController = require("../controllers/Reset.controller");
const LogoutController = require("../controllers/Logout.controller");
const authRoute = express.Router();

authRoute.post("/login", LoginController);
authRoute.post("/logout", LogoutController);
authRoute.post("/reset", ResetController);

module.exports = authRoute;
