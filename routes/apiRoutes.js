const notesData = require('../db/db.json');
const generateUniqueId = require('generate-unique-id');
const router = require('express').Router();
const fs = require('fs');


router.get("/notes", (req, res) => 
    res.json(notesData));

    fs.readFile()

router.post("/notes", (req, res) => {
        notesData.push(req.body);
        res.json(true);
        
    fs.writeFile();
        notesData.push.JSON.stringify(req.body);
        
    fs.readFile();

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



    module.exports = router;

