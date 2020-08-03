
exports.up = function(knex) {
  return (
      knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name').unique().notNullable();
            tbl.string('description');
            tbl.boolean('completed').notNullable().defaultTo(false);
        })
        .createTable('resource', tbl => {
            tbl.increments();
            tbl.string('name').unique().notNullable();
            tbl.string('description');
        })
        .createTable('task', tbl => {
            tbl.increments();
            tbl.string('description').notNullable();
            tbl.string('notes');
            tbl.boolean('completed').notNullable().defaultTo(false)
                tbl.integer('projects_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('project_resources', tbl => {
            tbl.integer('projects_id')
                .unsigned()
                .notNullable()
                .references('projects.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('resource.id')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.primary(['projects_id', 'resource_id'])
        })
  )
};

exports.down = function(knex) {
  return (
      knex.schema 
        .dropTableIfExists('project_resources')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('projects')
  )
};
