const db = require('../data/db-config');

module.exports = {
    getResources, 
    getProjects,
    getTasks,
    addResource,
    addProject,
    addTask
}

function getResources() {
    return db('resource')
}

function getProjects() {
    return db('projects')
}

function getTasks() {
    return db('task')
        .join('projects', 'task.projects_id', 'projects.id')
        .select('task.id', {taskDescription: 'task.description'},
        'task.notes', 'task.completed',
        {projectName: 'projects.name'},
        {projectDescription: 'projects.description'})
}


function addResource(newResource) {
    return db('resource')
        .insert(newResource)
        .then(id => {
            return newResource;
        })
}

function addProject(newProject) {
    return db('projects')
        .insert(newProject)
        .then(id => {
            return newProject
        })
}

function addTask(newTask) {
    return db('task')
        .insert(newTask)
        .then(id => {
            return {
                newTask
            }
        })
}

