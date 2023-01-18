
exports.up = function(knex) {
  return knex.schema.createTable('user', table => {

    table.specificType('id', 'char(36) primary key');
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.timestamp('date_created').notNullable().defaultTo(knex.fn.now());

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
