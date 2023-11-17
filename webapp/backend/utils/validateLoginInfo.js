const validateLoginInfo = (hotelCode, email, password) => {
  if (!hotelCode) {
    return {
      err: true,
      msg: "Hotel Code is required.",
    };
  }
  if (!email) {
    return { err: true, msg: "Email address is required." };
  }
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return { err: true, msg: "Please provide a valid email address." };
  }
  if (!password) {
    return { err: true, msg: "Please provide a password." };
  }
  if (password.length < 6) {
    return { err: true, msg: "Please provide a valid password." };
  }
  return { err: false };
};

module.exports = validateLoginInfo;
