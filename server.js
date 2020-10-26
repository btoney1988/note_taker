// Dependency Express
const express = require("express");

// Creating app variable
const app = express();

// Port with Heroku change
const PORT = process.env.PORT || 3001;

// Use functions for server
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(express.static("/assets"));

// Calling on the api and html route functions
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Starting server
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
})

