exports.up = function (knex) {
    return knex.schema.createTable('kernel', (table) => {
        table.increments();
        table.text('title');
        table.text('description');
        table.float('count');
        table.float('price');
        table.text('url');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('kernel');
};
