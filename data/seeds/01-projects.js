exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("projects").insert([
    {
      id: 1,
      projectname: "wax the car",
      projectdescription:
        "grab eh carnuba wax and wax applicator and microfiber cloths, wax on and then wax off",
      completed: false
    },
    {
      id: 2,
      projectname: "paint the fence",
      projectdescription: "grab can of pain, and brush, brush up an ddown",
      completed: false
    },
    {
      id: 3,
      projectname: "wash the floor",
      projectdescription:
        "grab a bucket, soap and a sponge wash in counter clockwise circle",
      completed: false
    }
  ]);
};
