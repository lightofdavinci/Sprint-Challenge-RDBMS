const db = require("../data/db-config.js");

module.exports = {
  getResources,
  addResources
};

function getResources() {
  return db("projects");
}

function addResourcesprojects) {
  return db("projects").insert(projects, "id");
}
