exports.seed = function(knex) {
  // Deletes ALL existing entries

  // Inserts seed entries
  return knex("resources").insert([
    { id: 1, resourcename: "wax", resourcedescription: "carnuba" },
    { id: 2, resourcename: "paint", resourcedescription: "green" },
    { id: 3, resourcename: "soap", resourcedescription: "minwax" },
    { id: 4, resourcename: "sponge", resourcedescription: "natural" },
    { id: 5, resourcename: "brush", resourcedescription: "big brissel" },
    { id: 6, resourcename: "applique", resourcedescription: "para waas" }
  ]);
};
