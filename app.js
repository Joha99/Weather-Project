const express = require("express");
//native Node HTTPS module
const https = require("https");

// initalize new express app
const app = express();

// landing page
app.get("/", function (req, res) {
  var url =
    "https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=9e2aa3cdf0b653363eaf05000206ee15&units=metric";

  // GET request to Openweathermap
  https.get(url, function (response) {
    console.log(response.statusCode);

    // get the data from response
    response.on("data", function (data) {
      // convert hexadecimal data to JSON format
      const weatherData = JSON.parse(data);
      console.log(weatherData); 
    });
  });
});

// server running on port 3000, add callback function
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
