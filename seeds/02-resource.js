
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'Training Kit', description: 'lambda TK'},
        {name: 'Alex Sierra', description: 'TL'},
        {name: 'Google', description: 'Search'}
      ]);
    });
};
