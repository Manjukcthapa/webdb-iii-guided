
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(tbl) {
        // pk called id, auto-increments, integer
        tbl.increments();
    
        // a varchar called name, 128, unique, not null
        tbl
          .string('name', 128)
          .notNullable()
          .unique();
    
        // syntax for a foreign key
        tbl
          .integer('role_id')
          .unsigned()
          .references('id')
          .inTable('roles')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
  
};
