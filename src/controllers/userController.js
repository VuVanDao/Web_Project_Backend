import userService from "../services/userService";
let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (!email || !password) {
    return res.status(500).json({
      message: "Missing email or password",
      errCode: 1,
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData.errCode,
    errMassage: userData.errMessage,
    userData: userData.user,
  });
};
module.exports = {
  handleLogin: handleLogin,
};
