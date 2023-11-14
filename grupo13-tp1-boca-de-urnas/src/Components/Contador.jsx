import { useState } from "react";

const Contador = ({ candidato }) => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className="contador">
      <h2>{candidato}</h2>
      <h3>{contador}</h3>
      <div className="botones">
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
      </div>
    </div>
  );
};
export default Contador;
