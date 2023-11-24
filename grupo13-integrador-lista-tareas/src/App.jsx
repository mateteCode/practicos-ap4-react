// EDITAR

import React, { useState, useEffect } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const App = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const tareasAlmacenadas = JSON.parse(localStorage.getItem("tareas"));
    console.log(tareasAlmacenadas);
    setTareas(tareasAlmacenadas);
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  const hCompletar = (tareaId) => {
    setTareas((tareasAnteriores) =>
      tareasAnteriores.map((tarea) =>
        tarea.id === tareaId
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };

  const hBorrarTarea = (tareaId) => {
    setTareas((tareasAnteriores) =>
      tareasAnteriores.filter((tarea) => tarea.id !== tareaId)
    );
  };

  const hAgregarTarea = (tareaNueva) => {
    console.log(tareaNueva);
    setTareas((tareasAnteriores) => [tareaNueva, ...tareasAnteriores]);
  };

  return (
    <main>
      <h1>Lista de Tareas</h1>
      <div className="tareas__contenedor">
        <TaskForm onAgregarTarea={hAgregarTarea} />
        <TaskList
          tareas={tareas}
          onCompletar={hCompletar}
          onBorrarTarea={hBorrarTarea}
        />
      </div>
    </main>
  );
};

export default App;
