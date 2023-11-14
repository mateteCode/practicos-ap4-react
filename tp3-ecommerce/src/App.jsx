import "./App.css";
import Producto from "./components/Producto";

function App() {
  const productData = {
    nombre: "Producto 1",
    descripcion: "Descripción del producto 1.",
    precio: 345.99,
    sku: "AB1234",
    cantidadDisponible: 36,
  };

  return (
    <div className="App">
      <Producto {...productData} />
    </div>
  );
}

export default App;
