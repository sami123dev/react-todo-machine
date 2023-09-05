import React from "react";

export function TodoCounter({ total, completed }) {
  if (total === completed) {
    return (
      <div>
        <h1 className="text-center text-white text-3xl font-mono">TODO LIST</h1>
        <p className="text-center text-white text-xl font mono">Haz completado todas tus tareas</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1 className="text-center text-white text-3xl font-mono">TODO LIST</h1>
        <p className="text-center text-white text-xl font mono">Haz completado {completed} de {total} tareas</p>
      </div>
    );
  }
}