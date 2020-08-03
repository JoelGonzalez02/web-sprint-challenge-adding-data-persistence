
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {projects_id: 1, description: 'learn about relational databases and sql', notes: 'see Tk', completed: true},
        {projects_id: 2, description: 'learn about database schema design', notes: 'see TK', completed: 'true'},
        {projects_id: 3, description: 'learn about mutli-table queries', notes: 'see Tk', completed: true},
        {projects_id: 4, description: 'learn about data modeling', notes: 'see TK', completed: true}
      ]);
    });
};
