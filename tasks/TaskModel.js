const db = require("../data/db-config.js");

module.exports = {
  addTask,
  getTask
};

function getTask() {
  return db("tasks").join("projects", "project_id", "=", "projects.id");
}

function addTask(tasks) {
  return db("tasks").insert(tasks, "id");
}
