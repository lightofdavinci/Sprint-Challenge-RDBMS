const db = require("../data/db-config.js");

module.exports = {
  getResources,
  addResources
};

function getResources() {
  return db("resources");
}

function addResources() {
  return db("resources").insert(projects, "id");
}
