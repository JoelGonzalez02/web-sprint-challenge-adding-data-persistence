const express = require('express');

const router = express.Router();

const Projects = require('./db-model');

router.get('/', (req, res)=> {
    Projects.getProjects()
        .then(projects => {
                res.status(200).json(projects)
        })
        .catch(err => {
            console.error(err.message, err.response), 
            res.status(500).json({errorMessage: 'There was a problem with the database'})
        })
})

router.get('/resources', (req, res)=> {
    Projects.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.error(err.message, err.response),
            res.status(500).json({errorMessage: 'There are no resources in the database'})
        })
})

router.get('/tasks', (req, res)=> {
    Projects.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.error(err.message, err.response),
            res.status(500).json({errorMessage: 'There are no tasks in the database'})
        })
})

router.post('/', (req, res)=> {
    const newProject = req.body;

    Projects.addProject(newProject)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.error(err.message, err.response),
            res.status(500).json({errorMessage: 'There was an error while creating your project'})
        })
})

router.post('/resources', (req, res)=> {
    const newResource = req.body;

    Projects.addResource(newResource)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            console.error(err.message, err.response),
            res.status(500).json({errorMessage: 'There was an error while creating your resource'})
        })
})

router.post('/tasks', (req, res)=> {
    const newTask = req.body;

    Projects.addTask(newTask)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            console.error(err.message, err.response),
            res.status(500).json({errorMessage: 'There was an error while creating your task'})
        })
})

module.exports = router;