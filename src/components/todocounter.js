export function TodoCounter({ total, completed }) {
  if (total == completed) {
    return (
      <div className="grid grid-cols-1">
        <h1 className="justify-self-center font-mono text-3xl text-white">TODO LIST</h1>
        <p className="justify-self-center font-mono text-xl text-white" >Haz completado todas tus tareas felicidades! </p>
      </div>
    );
  } 
  else return (
      <div className="grid grid-cols-1">
        <h1 className="justify-self-center font-mono text-3xl text-white">TODO LIST</h1>
        <p className="justify-self-center font-mono text-xl text-white" >Haz completado {completed} de {total} tareas </p>
      </div>
    );
  }