exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("table_name").insert([
    { id: 1, project_id: 1, completed: false, description: "fun times" },
    { id: 2, project_id: 1, completed: false, description: "funnner times" },
    { id: 3, project_id: 1, completed: false, description: "more fun times" },
    { id: 4, project_id: 2, completed: false, description: "most fun times" },
    {
      id: 5,
      project_id: 2,
      completed: false,
      description: "ledfdaast fun times"
    },
    {
      id: 6,
      project_id: 2,
      completed: false,
      description: "ldfdeast fun times"
    },
    {
      id: 7,
      project_id: 3,
      completed: false,
      description: "least ffffun times"
    },
    {
      id: 8,
      project_id: 3,
      completed: false,
      description: "leafffst fun times"
    },
    { id: 9, project_id: 3, completed: false, description: "unfun times" }
  ]);
};
