'use strict';

var express = require('express');
var router = express.Router();

var Flashcard = require('../model/flashcard');

router.get('/', (req, res) => {
    Flashcard.find({}, (err, flashcards) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcards);
        }
    });
});

router.get('/angular', (req, res) => {
    Flashcard.find({category: 'Angular'}, (err, flashcards) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcards);
        }
    });
});

router.get('/javascript', (req, res) => {
    Flashcard.find({category: 'JavaScript'}, (err, flashcards) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcards);
        }
    });
});

router.get('/jquery', (req, res) => {
    Flashcard.find({category: 'jQuery'}, (err, flashcards) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcards);
        }
    });
});

router.get('/node', (req, res) => {
    Flashcard.find({category: 'Node'}, (err, flashcards) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcards);
        }
    });
});

router.get('/:id', (req, res) => {
    Flashcard.findById(req.params.id, (err, flashcard) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcard);
        }
    });
});

router.post('/', (req, res) => {
    var flashcard = new Flashcard(req.body);

    flashcard.save((err, savedFlashcard) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(savedFlashcard);
        }
    });
});

router.delete('/:id', (req, res) => {
    Flashcard.findByIdAndRemove(req.params.id, err => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send();
        }
    });
});

router.put('/:id', (req, res) => {
    Flashcard.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, flashcard) => {
        if (err) {
            res.status(400).send(err);
        } else {
            res.send(flashcard);
        }
    });
});

module.exports = router;