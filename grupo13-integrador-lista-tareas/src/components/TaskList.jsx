import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tareas, onCompletar, onBorrarTarea }) => {
  return (
    <ul className="tareas__lista">
      {tareas.map((tarea) => (
        <TaskItem
          key={tarea.id}
          tarea={tarea}
          onCompletar={onCompletar}
          onBorrarTarea={onBorrarTarea}
        />
      ))}
    </ul>
  );
};

export default TaskList;
