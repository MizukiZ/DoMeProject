const express = require("express")
const Task = require("../models/Task") // import Task model

const router = new express.Router() // get Router instance froom express

// get
router.get("/tasks", (req, res) => {
  const { sortQuery } = req.query
  // get all records

  if (sortQuery === "priority") {
    // decending order for priority
    Task.find()
      .sort({ priority: -1 })
      .then(tasks => {
        res.json(tasks)
      })
      .catch(error => {
        res.json({ error })
      })
  } else {
    // ascending order
    Task.find()
      .sort(sortQuery)
      .then(tasks => {
        res.json(tasks)
      })
      .catch(error => {
        res.json({ error })
      })
  }
})

// create task
router.post("/tasks", (req, res) => {
  Task.create(req.body)
    .then(task => {
      res.status(201).json(task)
    })
    .catch(error => {
      res.status(400).json({ error })
    })
})

// update task
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

// delete task
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
