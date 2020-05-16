const kernels = require('../kernels');

exports.seed = function (knex) {
    return knex('kernel')
        .del()
        .then(function () {
            return knex('kernel').insert(kernels);
        });
};
