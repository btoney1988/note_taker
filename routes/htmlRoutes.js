const path = require("path");

module.exports = function (app) {
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(_dirname, ".../public/notes.html"));
  });

  app.get("/styles", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/css/styles.css"));
  });

  app.get("*", function (req, res) {
    res.sendFile(path.join(_dirname, "../public/index.html"));
  });

};