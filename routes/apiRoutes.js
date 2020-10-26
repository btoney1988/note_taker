const noteText = require("../db/noteContents");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteText);
  });

  app.post("/api/notes"), function (req, res) {
    noteText.push(req.body);
    res.json("saved");
  };

  app.delete("/api/notes/:index", function (req, res) {
    const dlt = parseInt(req.params.index);
    const tempNotes = [];

    for (let i = 0; i < noteText.length; i++) {
      if (i !== dlt) {
        tempNotes.push(noteText[i]);
      }
    }
    noteText = tempNotes;

    res.json("Delete Successful");
  });
}