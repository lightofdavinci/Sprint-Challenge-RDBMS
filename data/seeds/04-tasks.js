exports.seed = function(knex) {
    return knex('tasks').insert([
      { description: 't-description1', notes: 'test notes', completed: true, project_id: '1' },
      { description: 't-description2', notes: 'tester notes', completed: true, project_id: '2' },
      { description: 't-description3', notes: 'testing notes', completed: true, project_id: '3' },
      { description: 't-description4', notes: 'tested notes', completed: true, project_id: '1' },
      { description: 't-description5', notes: 'Some more test notes', project_id: '2' },
      { description: 't-description6', notes: 'I have tested these notes', project_id: '3' },
      { description: 't-description7', notes: 'Testing more notes', completed: true, project_id: '2' },
      { description: 't-description8', notes: 'Tired of testing', project_id: '3' },
      { description: 't-description9', notes: 'The last test', project_id: '2' }
    ]);
  };