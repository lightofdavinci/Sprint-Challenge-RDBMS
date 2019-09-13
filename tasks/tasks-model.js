const db = require('../data/db-config.js');

module.exports = {
    getTasks,
    addTask
}

function getTasks() {
    return db('tasks as t')
        .innerJoin('projects as p', 't.project_id', '=', 'p.id')
        .select('p.name', 'p.project_description', 't.description', 't.notes', 't.completed')
}

function addTask(task) {
    return db('tasks').insert(task);
}