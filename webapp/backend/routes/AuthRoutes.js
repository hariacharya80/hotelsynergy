const express = require("express");
const LoginController = require("../controllers/Login.controller");
const ResetController = require("../controllers/Reset.controller");
const authRoute = express.Router();

authRoute.post("/login", LoginController);
authRoute.post("/reset", ResetController);

module.exports = authRoute;
