exports.seed = function(knex) {
    return knex('resources').insert([
      { name: 'Resource 1', resource_description: 'r-description1'},
      { name: 'Resource 2', resource_description: 'r-description2'},
      { name: 'Resource 3', resource_description: 'r-description3' }
    ]);
  };