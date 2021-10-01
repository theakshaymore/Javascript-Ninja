const axios = require("axios");

axios
  .get("https://coderbyte.com/api/challenges/json/json-cleaning'")
  .then(function (response) {
    console.log(response.data);
  });
