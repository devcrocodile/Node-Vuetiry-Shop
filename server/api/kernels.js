/* ---------------------------------------- Dependencies ---------------------------------------- */

const express = require('express');
const queries = require('../db/queries');

const router = express.Router();

/* -------------------------------------- Helper Functions -------------------------------------- */

function isValidId(req, res, next) {
    if (!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validKernel(kernel) {
    const hasTitle = typeof kernel.title === 'string' && kernel.title.trim() !== '';
    const hasURL = typeof kernel.url === 'string' && kernel.url.trim() !== '';
    const hasDescription =
        typeof kernel.description === 'string' && kernel.description.trim() !== '';
    const hasCount = !isNaN(kernel.count);
    const hasPrice = !isNaN(kernel.price);
    return hasTitle && hasDescription && hasURL && hasCount && hasPrice;
}

/* ----------------------------------------- CRUD Routes ---------------------------------------- */

router.get('/', (req, res) => {
    queries.getAll().then((kernels) => {
        res.json(kernels);
    });
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then((kernel) => {
        if (kernel) {
            res.json(kernel);
        } else {
            next();
        }
    });
});

router.post('/', (req, res, next) => {
    if (validKernel(req.body)) {
        queries.create(req.body).then((kernels) => {
            res.json(kernels[0]);
        });
    } else {
        next(new Error('Invalid kernel'));
    }
});

router.put('/:id', isValidId, (req, res, next) => {
    if (validKernel(req.body)) {
        queries.update(req.params.id, req.body).then((kernels) => {
            res.json(kernels[0]);
        });
    } else {
        next(new Error('Invalid kernel'));
    }
});

router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true,
        });
    });
});

module.exports = router;
