import React from "react";
import CalculadoraBasica from "../components/CalculadoraBasica";

const Matematicas: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
        🧮 Matemáticas - Calculadora Básica
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Aprende operaciones matemáticas fundamentales con esta calculadora interactiva.
      </p>
      <CalculadoraBasica />
    </div>
  );
};

export default Matematicas;