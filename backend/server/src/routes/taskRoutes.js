const express = require("express");
const Task = require("../models/Task");
const authMiddleware = require("../middlewares/authMiddlewares");

const router = express.Router();

// Teste se a API responde
// router.get("/api", (req, res) => {
//     res.send("API está rodando!");
// });

// Listar todas as tarefas (rota protegida)
router.get("/", authMiddleware, async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Criar nova tarefa (rota protegida)
router.post("/", authMiddleware, async (req, res) => {
    const { title, description, status, deadline } = req.body;
    const novaTarefa = new Task({ title, description, status, deadline });
    await novaTarefa.save();
    res.status(201).json(novaTarefa);
});

// Atualizar tarefa
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) return res.status(404).send("Tarefa não encontrada");
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar tarefa" });
    }
});

// Deletar tarefa
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).send("Tarefa não encontrada");
        res.json(task);
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar tarefa" });
    }
});

module.exports = router;
