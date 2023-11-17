const UserModel = require("../models/user.model");

const LogoutController = async (req, res) => {
  try {
    const { email } = req.body;
    const loggedOutUser = await UserModel.findOneAndUpdate(
      { email },
      {
        authToken: "",
      }
    );
    if (!loggedOutUser) {
      return res.status(401).json({ msg: "User not found to logout." });
    }
    return res.status(200).json({ msg: "User logged out successfully." });
  } catch (e) {
    return res.status(500).json({
      msg: "An unknown internal error occoured while loggin out.",
    });
  }
};

module.exports = LogoutController;
