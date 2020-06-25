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

    // callback function when response data reached
    response.on("data", function (data) {
      // convert hexadecimal data to JSON format
      const weatherData = JSON.parse(data);
      console.log(weatherData);

      // select parts of data that I need
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const iconcode = weatherData.weather[0].icon;
      const iconurl =
        "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";

      // unlike res.send, res.write may be called multiple times to provide successive parts of the body
      res.write(`<h1>Temperature in Seoul: ${temp} degrees Celcius</h1>`);
      res.write(`<h1>Current weather: ${weatherDescription}</h1>`);
      res.write(`<img src="${iconurl}">`);
      res.send();
    });
  });
});

// server running on port 3000, add callback function
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
