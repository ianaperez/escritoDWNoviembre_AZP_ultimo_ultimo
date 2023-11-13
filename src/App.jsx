import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Prueba práctica React</h1>
      <Link to={"/crear"}>
        <button>Crear Usuarios</button>
      </Link>
    </div>
  );
}

export default App;
