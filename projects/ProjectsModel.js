const db = require("../data/db-config.js");

module.exports = {
  getProjects,
  addProjects
};

function getProjects() {
  return db("projects");
}

function addProjects(projects) {
  return db("projects").insert(projects, "id");
}