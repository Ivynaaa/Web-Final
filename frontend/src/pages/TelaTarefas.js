// src/pages/TelaTarefas.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const TelaTarefas = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
      } catch (error) {
        console.error("Erro ao buscar tarefas", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Tarefas</h1>
      <div>
        {tasks.map((task) => (
          <div key={task._id} className="mb-4 p-4 bg-white shadow rounded">
            <h2 className="font-semibold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TelaTarefas;
