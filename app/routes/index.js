const usersRoute = require("./users");
const addressRoute = require("./addresses");
require("dotenv").config();
const API_PRE_FIX = process.env.API_PRE_FIX;

module.exports = (app) => {
  app.use(`${API_PRE_FIX}user`, usersRoute);
  app.use(`${API_PRE_FIX}address`, addressRoute);
};
