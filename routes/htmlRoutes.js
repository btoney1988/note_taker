const path = require("path");

// Export function
module.exports = function (app) {
  // Get function for notes
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Get function for styles
  app.get("/styles", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/css/styles.css"));
  });

  // Get function for index
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};