// const express = require("express")
// const mongoose = require("mongoose")

// const app = express()
// const port = 3000

// // Middleware para interpretar JSON
// app.use(express.json())

// // Conectar ao MongoDB
// mongoose.connect(
//   "mongodb+srv://ivynamagalhaes003:VZqlfJ92W4lLFocO@planner-web.zc7qe.mongodb.net/planner-web"
// )
//   .then(() => console.log("Conectado ao MongoDB"))
//   .catch(err => console.error("Erro ao conectar ao MongoDB:", err))

// // Definir o modelo de Tarefa
// const Task = mongoose.model("Task", {
//   title: String,
//   description: String,
//   status: String,
//   deadline: Date,
// })

// // leitura de todas as tarefas
// app.get("/", async (req, res) => {
//     const tasks = await Task.find()
//     res.send(tasks)
// })

// // Rota para criar uma nova tarefa
// app.post("/task", async (req, res) => {
//   try {
//     console.log("Recebendo dados:", req.body)

//     const { title, description, status, deadline } = req.body

//     const novaTarefa = new Task({
//       title,
//       description,
//       status: status || "pendente",
//       deadline: deadline ? new Date(deadline) : null,
//     });

//     await novaTarefa.save();
//     res.status(201).json(novaTarefa)
//   } catch (error) {
//     console.error("Erro ao salvar no banco:", error)
//     res.status(500).json({ error: "Erro ao criar tarefa" })
//   }
// });

// // Rota para atualizar uma tarefa
// app.put("/:id", async (req, res) => {
//     const task = await Task.findByIdAndUpdate(req.params.id, {
//         title: req.body.title,
//         description: req.body.description,
//         status: req.body.status,
//         deadline: req.body.deadline ? new Date(req.body.deadline) : null,
//       },{new: true} )
//     return res.send(task)
// })

// app.delete("/:id", async (req, res) => {
//     const task = await Task.findByIdAndDelete(req.params.id)
//     if (!task) {
//         res.status(404).send("Tarefa não encontrada")
//         return
//     }
//     return res.send(task)
// })

// // Iniciar servidor
// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`)
// })
// teste commit
