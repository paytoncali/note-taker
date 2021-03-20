// const notesData = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');
const router = require('express').Router();
const fs = require('fs');


router.get("/notes", (req, res) => {
    // res.json(notesData));

    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;
        // let savedNotes = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);  
    })
});

router.post("/notes", (req, res) => {

    const newNote = JSON.stringify(req.body)
    newNote.id = generateUniqueId();
    console.log("new note: ")

    fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
        if (err) throw err;

        let savedNotes = JSON.parse(data);
        console.log("saved notes: ")
        savedNotes.push(newNote);

        fs.writeFile(`${__dirname}/../db/db.json`, JSON.stringify(savedNotes), (err, data) => {
            if (err) throw err;

            res.json(newNote);
            console.log("new Note :");
            console.log(newNote);
        })
    })
    
});

    // app.post("/api/clear", (req, res) => {
    //     tableData.length = 0;
    //     waitlistData.length = 0;
    //     res.json({ok: true});
    // });



module.exports = router;
