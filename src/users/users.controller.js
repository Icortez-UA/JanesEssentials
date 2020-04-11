const express = require('express');
const router = express.Router();
const userService = require('./user.service');

//routes
router.post('./authenticate', authenticate);
router.post('./register', register);
router.get('./', getAll);
router.get('./current', getCurrent);
router.get('./:id', getById);
router.put('./:id', update);
router.put('./:id', _delete);

module.exports = router;

function authenticate(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user): res.sendStatus(404))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}