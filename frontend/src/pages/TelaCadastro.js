// src/pages/TelaCadastro.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TelaCadastro = () => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:3000/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      navigate("/login");
    } catch (error) {
      setErrorMessage("Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="p-6 bg-white rounded-lg shadow-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4">Cadastro</h2>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("name", { required: true })}
          />
        </div>
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
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default TelaCadastro;
