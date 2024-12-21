import db from "../models/index";
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
module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
