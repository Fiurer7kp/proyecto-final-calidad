import React from "react";
import MezcladorColores from "../components/MezcladorColores";

const Arte: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-6">
        🎨 Arte - Mezclador de Colores
      </h1>
      <p className="text-slate-600 dark:text-slate-300 mb-8">
        Descubre cómo se mezclan los colores primarios para crear nuevos tonos.
      </p>
      <MezcladorColores />
    </div>
  );
};

export default Arte;