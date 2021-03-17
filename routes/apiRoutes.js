const notesData = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');

module.exports = (app) => {
    app.get("/api/notes", (req, res) => res.json(notesData));
    app.post("/api/notes", (req, res) => {
        notesData.push(req.body);
        res.json(true);
        
        const id = generateUniqueId({
            length: 3,
            useLetters: false,
        })
    });
    // app.post("/api/clear", (req, res) => {
    //     tableData.length = 0;
    //     waitlistData.length = 0;
    //     res.json({ok: true});
    // });
};