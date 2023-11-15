import "./App.css";
import Contador from "./Components/Contador";

function App() {
  const candidatos = ["Candidato 1", "Candidato 2"];
  return (
    <div>
      <h1 className="Titulo">Boca de Urnas</h1>
      <div className="candidatos">
        {candidatos.map((candidato, index) => (
          <Contador key={index} candidato={candidato} />
        ))}
      </div>
    </div>
  );
}

export default App;
