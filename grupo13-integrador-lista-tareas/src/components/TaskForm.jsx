import React, { useState } from "react";

const TaskForm = ({ onAgregarTarea }) => {
  const [nombreTarea, setNombreTarea] = useState("");

  const hInputChange = (e) => {
    setNombreTarea(e.target.value);
  };

  const hAgregarTarea = () => {
    if (nombreTarea.trim() !== "") {
      onAgregarTarea({
        id: new Date().getTime(),
        nombre: nombreTarea,
        completada: false,
      });
      setNombreTarea("");
    }
  };

  return (
    <div className="tareas__formulario">
      <input
        type="text"
        placeholder="Escriba una tarea nueva"
        value={nombreTarea}
        onChange={hInputChange}
      />
      <button onClick={hAgregarTarea}>+</button>
    </div>
  );
};

export default TaskForm;
