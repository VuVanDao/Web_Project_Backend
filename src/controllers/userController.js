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
    errMessage: userData.errMessage,
    userData: userData.user,
  });
};
let handleGetAllUser = async (req, res) => {
  let id = req.body.id; //all,id
  if (!id) {
    return res.status(200).json({
      errCode: 2,
      errMessage: "Missing id",
      userData: {},
    });
  }
  let users = await userService.handleGetAllUser(id);
  return res.status(200).json({
    errCode: users.errCode,
    errMessage: users.errMessage,
    userData: users.users,
  });
};
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUser: handleGetAllUser,
};
