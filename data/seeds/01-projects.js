exports.seed = function(knex) {
    return knex('projects').insert([
      { name: 'Project #1', project_description: 'p-description1', completed: true },
      { name: 'Project #2', project_description: 'p-description 2' },
      { name: 'Project #3', project_description: 'p-description 3' }
    ]);
  };