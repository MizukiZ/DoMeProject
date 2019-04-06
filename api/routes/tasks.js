const express = require("express")
const Task = require("../models/Task") // import Task model

const router = new express.Router() // get Router instance froom express

// get
router.get("/tasks", (req, res) => {
  const status = req.query.status
  // get all records
  Task.find({})
    .then(tasks => {
      res.json(tasks)
    })
    .catch(error => {
      res.json({ error })
    })
})

// create
router.post("/tasks", (req, res) => {
  Task.create(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})

// update
router.put("/task/:id", (req, res) => {
  const { id } = req.params
  Task.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    .then(task => {
      res.json(task)
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})

// delete
router.delete("/task/:id", (req, res) => {
  const { id } = req.params
  Task.findByIdAndDelete(id)
    .then(task => {
      res.json({ message: `${task.title} is deleted!` })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

// delte completed ones
router.delete("/tasks", (req, res) => {
  Task.remove({ isCompleted: true })
    .then(() => {
      res.json({ message: "Deleted all checked tasks" })
    })
    .catch(error => {
      res.status(500).json({ error: error.message })
    })
})

module.exports = router
