const mongo = require("./init") // initialize connection with mondodb

// define model's schema
const taskSchema = new mongo.Schema(
  {
    title: String,
    photo: String,
    category: String,
    priority: Number, // 1 to 5 (very low to very high)
    isCompleted: { type: Boolean, default: false },
    description: String,
    dueDate: Date
  },
  {
    timestamps: true // add updated at and created at timestamps
  }
)

// cretae Task model with the schema
const Task = mongo.model("Task", taskSchema)

module.exports = Task
