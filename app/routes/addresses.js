const addressRouter = require("express").Router();
const { addressController } = require("../controllers");
const { requestHandlersUtils } = require("../utils");
const { verifyToken } = require("../middlewares/commonMiddleware");
const { MESSAGES } = require("../constants");

/***
 * This router function will get the user data.
 * ** */
addressRouter.route("/getCountries").get(async (req, res) => {
  try {
    const params = req.body;
    await addressController
      .getCountries(params)
      .then((result) => {
        requestHandlersUtils.sendSuccess(res, result, MESSAGES.userFetched);
      })
      .catch((err) => {
        requestHandlersUtils.sendError(res, err, MESSAGES.apiFailed);
      });
  } catch (err) {
    requestHandlersUtils.sendError(res, err, MESSAGES.apiFailed);
  }
});

/***
 * This router function will get the user data.
 * ** */
 addressRouter.route("/getStates/:country_id/:country_code").get(async (req, res) => {
  try {
    // console.log(">>",req.params)
    const params = req.params;
    await addressController
      .getStates(params)
      .then((result) => {
        requestHandlersUtils.sendSuccess(res, result, MESSAGES.userFetched);
      })
      .catch((err) => {
        requestHandlersUtils.sendError(res, err, MESSAGES.apiFailed);
      });
  } catch (err) {
    requestHandlersUtils.sendError(res, err, MESSAGES.apiFailed);
  }
});

/***
 * This router function will get the user data.
 * ** */
 addressRouter.route("/save").post(async (req, res) => {
  try {
    const params = req.body;
    await addressController
      .save(params)
      .then((result) => {
        requestHandlersUtils.sendSuccess(res, result, MESSAGES.userFetched);
      })
      .catch((err) => {
        requestHandlersUtils.sendError(res, err, MESSAGES.apiFailed);
      });
  } catch (err) {
    requestHandlersUtils.sendError(res, err, MESSAGES.apiFailed);
  }
});

/***
 * This router function will get the user data.
 * ** */
 addressRouter.route("/getCities/:state_id/:country_code").get(async (req, res) => {
  try {
    const params = req.params;
    await addressController
      .getCities(params)
      .then((result) => {
        requestHandlersUtils.sendSuccess(res, result, MESSAGES.userFetched);
      })
      .catch((err) => {
        requestHandlersUtils.sendError(res, err, MESSAGES.apiFailed);
      });
  } catch (err) {
    requestHandlersUtils.sendError(res, err, MESSAGES.apiFailed);
  }
});

module.exports = addressRouter;
