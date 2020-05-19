const knex = require('./knex');

module.exports = {
    getAll() {
        return knex('kernel');
    },
    getOne(id) {
        return knex('kernel').where('id', id).first();
    },
    create(kernel) {
        return knex('kernel').insert(kernel, '*');
    },
    update(id, kernel) {
        return knex('kernel').where('id', id).update(kernel, '*');
    },
    delete(id) {
        return knex('kernel').where('id', id).del();
    },
};
