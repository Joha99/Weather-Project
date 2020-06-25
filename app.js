const express = require("express"); 

// initalize new express app 
const app = express(); 

// landing page 
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); 
}); 

// server running on port 3000, add callback function 
app.listen(3000, function () {
    console.log("Server running on port 3000"); 
}); 