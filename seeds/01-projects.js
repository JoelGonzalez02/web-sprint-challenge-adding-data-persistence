
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'node-db1', description: 'first node project', completed: true},
        {name: 'node-db2', description: 'second node project', completed: true},
        {name: 'node-db3', description: 'third node project', completed: true},
        {name: 'node-db4', description: 'fourth node project', completed: true}
      ]);
    });
};
