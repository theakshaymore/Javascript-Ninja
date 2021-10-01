const axios = require("axios");

axios
  .get("https://coderbyte.com/api/challenges/json/json-cleaning'")
  .then(function (response) {
    for (var values in response) {
      if (
        response[values] === "-" ||
        response[values] === null ||
        response[values] === "" ||
        response[values] === "N/A"
      ) {
        delete response[values];
      }
      for (var values2 in response[values]) {
        if (
          response[values][values2] === "-" ||
          response[values][values2] === null ||
          response[values][values2] === "" ||
          response[values][values2] === "N/A"
        ) {
          delete response[values][values2];
        }
      }
    }
    console.log(response.data);
  });
