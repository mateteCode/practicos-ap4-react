import React, { useState } from "react";

const TaskItem = ({ tarea, onCompletar, onBorrarTarea }) => {

  const hCompletar = () => {
    onCompletar(tarea.id);
  };

  const hBorrarTarea = () => {
    onBorrarTarea(tarea.id);
  };

  return (
    <li className="tareas__item">
      <div
        className="item__texto"
        style={{ textDecoration: tarea.completada ? "line-through" : "none" }}
      >
        {tarea.nombre}
      </div>
      <div className="item__opciones">
        <button className="item__boton-completar" onClick={hCompletar}>
          {tarea.completada ? "✓" : " "}
        </button>
        <button className="item__boton-borrar" onClick={hBorrarTarea}>
          X
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
