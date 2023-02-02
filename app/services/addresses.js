const country = require("../schemas/country");

/***
 * This service will save the country.
 * ** */
const save = (params) => {
  return new Promise((resolve, reject) => {
    const countrySchema = new country(params);
    countrySchema
      .save()
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

/***
 * This service will update one record.
 * ** */
const updateOne = (conditions, params) => {
  return new Promise((resolve, reject) => {
    country
      .updateOne(conditions, params)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/***
 * This service will find one record of user.
 * ** */
const findOne = (params, fields = {}) => {
  return new Promise((resolve, reject) => {
    country
      .findOne(params, fields)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

/***
 * This service will find all record of user.
 * ** */
const find = (params = {}, fields = {}) => {
  return new Promise((resolve, reject) => {
    country
      .find(params, fields)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = {
  save,
  updateOne,
  findOne,
  find,
};
