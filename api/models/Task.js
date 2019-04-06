const mongo = require("./init") // initialize connection with mondodb

// define model's schema
const taskSchema = new mongo.Schema({
  title: String,
  category: String,
  priority: String,
  isCompleted: Boolean,
  dueDate: Date,
  timestamps: true // add updated at and created at timestamps
})

// cretae Task model with the schema
const Task = mongo.model("Task", taskSchema)

module.exports = Task
