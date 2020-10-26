const noteContents = require("../db/db.js");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Export function
module.exports = function (app) {
  // Get notes function
  app.get("/api/notes", function (req, res) {
    res.json(noteContents);
  });

  // Post notes function
  app.post("/api/notes", function (req, res) {

    let newNote = req.body;

    let lastId = noteContents[noteContents.length - 1]["id"];
    let newId = lastId + 1;
    newNote["id"] = newId;

    // Push new note contents into note contents
    noteContents.push(newNote);

    // Rewrite file to include new notes
    writeFileAsync("./db/db.json", JSON.stringify(noteContents)).then(function () {
      console.log("noteContents.json has been updated!");
    });

    res.json(newNote);
  });

  // Delet function
  app.delete("/api/notes/:id", function (req, res) {

    let deletedNote = parseInt(req.params.id);

    // For loop running through the note content array
    for (let i = 0; i < noteContents.length; i++) {
      // If deleted note id equals the chosen deleted note it will be deleted
      if (deletedNote === noteContents[i].id) {

        noteContents.splice(i, 1);

        let noteJSON = JSON.stringify(noteContents, null, 2);

        writeFileAsync("./db/db.json", noteJSON).then(function () {
          console.log("Chosen note has been deleted!");
        });
      }
    }
    res.json(noteContents);
  });
}