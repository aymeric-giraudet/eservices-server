var express = require('express');
var router = express.Router();

var students = [];
var notes = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET users listing. */
router.get('/etudiants', function (req, res) {
    res.send(students);
});

router.get('/etudiants/:id', function(req,res) {
    res.send(students[req.params.id]);
});

router.post('/etudiants', function (req, res) {
    students.forEach(function (t) {
        if(req.query.prenom===t.prenom && req.query.nom===t.nom) {
            res.status(409).send("L'etudiant a deja été ajouté");
        }
    });
    var student = { id: students.length, prenom:req.query.prenom, nom:req.query.nom};
    students.push(student);
    res.status(201).send(student);
});

router.get('/notes', function (req, res) {
    res.send(notes);
});

router.post('/notes', function(req, res) {
    var note = req.body;
    notes.push(note);
    res.status(201).send(note);
});

module.exports = router;
