const router = require('express').Router();
// TODO: Add const for functions that create, get, and delete tasks
const { findById, createNewNote, validateNote } = require('../../lib/notes.js');
const { notes } = require('../../db/db.json');


//TODO: add 'router.get' to read notes in db
router.get('/notes', (req, res) => {
    res.json(notes);
    console.log(notes);
});

//TODO: add 'router.post' to create a new note in db
router.post('/notes', (req, res) => {
    idNum = notes.length + 1;
    req.body.id = idNum.toString();

    console.log(req.body);

    if (!validateNote(req.body)) {
        res.status(400).send("Note is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

//TODO(OPTIONAL): add 'router.delete' to delete a note in db
// router.delete('/notes/:id'), findById, (req, res) => {
//     const { id } = req.params;

//     const projectIndex = findById(id);

//     notes.splice(projectIndex, 1);

//     return res.send();
// }

module.exports = router;