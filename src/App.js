// Importa React para poder usar JSX y componentes de React
import React from 'react';

// Importa componentes de react-router-dom para manejar el enrutamiento
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Importa el componente Home desde el archivo './pages/Home'
import Home from './pages/Home';

// Importa el archivo de estilos './styles.css' para aplicar estilos a la aplicación
import './styles.css';

// Definición del componente principal de la aplicación llamado App
function App() {
  // Retorna la estructura del componente
  return (
    // Utiliza el componente Router para envolver la aplicación y habilitar el enrutamiento
    <Router>
      {/* Utiliza el componente Switch para gestionar las rutas y renderizar solo la primera coincidencia */}
      <Switch>
        {/* Define una ruta para la página de inicio, que renderiza el componente Home */}
        <Route path="/" exact component={Home} />
        {/* Puedes agregar más rutas según sea necesario */}
      </Switch>
    </Router>
  );
}

// Exporta el componente App para que pueda ser utilizado en otros archivos
export default App;
