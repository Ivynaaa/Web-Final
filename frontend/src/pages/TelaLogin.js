// src/pages/TelaLogin.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TelaLogin = () => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/tarefas");
    } catch (error) {
      setErrorMessage("Credenciais inválidas.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="p-6 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Senha</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("password", { required: true })}
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Entrar
        </button>

        <div className="mt-4 text-center">
          <p>
            Não tem uma conta?{" "}
            <a
              href="/cadastro"
              className="text-blue-500 hover:text-blue-700"
            >
              Cadastre-se
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default TelaLogin;
