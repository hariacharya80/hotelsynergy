const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const validateLoginInfo = require("../utils/validateLoginInfo");

const LoginController = async (req, res) => {
  const { hotelCode, email, password } = req.body;
  //validate the login information
  const validInformation = validateLoginInfo(hotelCode, email, password);
  if (validInformation.err) {
    return res.status(401).json({ msg: validInformation.msg });
  }

  //try to login user if all info are valid.
  try {
    //finding an user with that email.
    const existingUser = await UserModel.findOne({
      email,
    });
    if (!existingUser) {
      return res.status(401).json({
        msg: "No user with that email were found, please check your email address.",
      });
    }

    //checking if the password is valid
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({ msg: "Wrong password, please try again." });
    }
    if (hotelCode.toLowerCase() !== existingUser.hotelCode.toLowerCase()) {
      return res
        .status(401)
        .json({ msg: `User is not from the hotel ${hotelCode}` });
    }
    const AuthToken = await jwt.sign(
      {
        email: existingUser.email,
        hotelCode: existingUser.hotelCode,
      },
      process.env.JWT_SECRET.toString()
    );

    //update the auth token in db
    const updatedUser = await UserModel.findOneAndUpdate(
      { email },
      {
        authToken: AuthToken,
      }
    );
    if (!updatedUser) {
      return res
        .status(401)
        .json({ msg: "Error while trying to login, please try again later." });
    }

    return res.status(200).json({
      hotelId: existingUser.hotelCode,
      userName: existingUser.name,
      authToken: AuthToken,
      userImge: `${existingUser._id}.png`,
      userEmail: existingUser.email,
      isVerified: existingUser.isVerified,
      role: existingUser.role,
    });
  } catch (e) {
    console.log(e);
    return res
      .status(500)
      .json({ msg: "An unknown internal server error occoured." });
  }
};

module.exports = LoginController;
