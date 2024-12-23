import db from "../models/index";
import CRUDService from "../services/CRUDservice";
let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homePage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};
let getAboutPage = async (req, res) => {
  return res.render("aboutPage.ejs");
};
let getCRUD = async (req, res) => {
  return res.render("crud.ejs");
};
let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log("message", message);
  return res.render("crud.ejs");
};
let displayCRUD = async (req, res) => {
  try {
    let data = await CRUDService.getAllUsers();
    return res.render("displayCRUD.ejs", { data: data });
  } catch (error) {
    console.log(error);
  }
};
let updateCRUD = async (req, res) => {
  try {
    let id = req.params.id;
    let data = await CRUDService.getInfoUserById(id);
    return res.render("updateCRUD.ejs", { user: data });
  } catch (error) {
    console.log(error);
  }
};
let getUpdateUser = async (req, res) => {
  let data = req.body;
  let message = await CRUDService.updateUserData(data);
  return res.render("displayCRUD.ejs", { data: message });
};
let deleteCRUD = async (req, res) => {
  let userId = req.query.id;
  if (userId) {
    let data = await CRUDService.getInfoUserById(userId);
    return res.render("deleteCRUD.ejs", { user: data });
  } else {
    return res.send("User not found");
  }
};
let deleteUser = async (req, res) => {
  let userId = req.body.id;
  let data = await CRUDService.deleteUserById(userId);
  return res.render("displayCRUD.ejs", { data: data });
};
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  updateCRUD: updateCRUD,
  getUpdateUser: getUpdateUser,
  deleteCRUD: deleteCRUD,
  deleteUser: deleteUser,
};
