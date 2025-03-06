// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";
import TelaTarefas from "./pages/TelaTarefas";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
        <Route
          path="/tarefas"
          element={
            <ProtectedRoute>
              <TelaTarefas />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<TelaLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
