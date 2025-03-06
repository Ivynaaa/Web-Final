const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: "pendente" },
  deadline: Date
})

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task
