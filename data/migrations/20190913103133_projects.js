
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable()
            .unique();
        tbl.string('project_description', 500);
        tbl.boolean('completed')
            .defaultTo(false);
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable()
            .unique()
        tbl.string('resource_description', 500);
    })
    .createTable('project_resources', tbl => {
        tbl.increments();
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.integer('resource_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 500)
            .notNullable()
            .unique();
        tbl.string('notes', 500);
        tbl.boolean('completed')
            .defaultTo(false);
        tbl.integer('project_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    }) 
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources') 
};
