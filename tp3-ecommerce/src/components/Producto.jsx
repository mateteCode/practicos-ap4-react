import React from "react";
import "./Producto.css";

const Producto = ({ nombre, descripcion, precio, sku, cantidadDisponible }) => {
  return (
    <div className="card">
      <h2>{nombre}</h2>
      <p>{descripcion}</p>
      <p>${precio}</p>
      <p>{sku}</p>
      <p>{cantidadDisponible} disponibles</p>
    </div>
  );
};

export default Producto;
