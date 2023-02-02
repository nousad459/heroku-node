const country = require("../schemas/country");
const states = require("../schemas/states");
const cities = require("../schemas/city");

/***
 * This service will save the country.
 * ** */
const save = (params) => {
  return new Promise((resolve, reject) => {
    const citiesSchema = new cities(params);
    citiesSchema
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
const getCountries = (params = {}, fields = {}) => {
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

/***
 * This service will find all record of user.
 * ** */
const getStates = (params = {}, fields = {}) => {
  return new Promise((resolve, reject) => {
    states
      .find(params, fields)
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
const getCities = (params = {}, fields = {}) => {
  console.log(">>>", params);
  // let payload = {
  //   country_id: parseInt(3901),
  //   country_code: params.country_code,
  // };
  return new Promise((resolve, reject) => {
    cities
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
  getCountries,
  getStates,
  getCities,
};
