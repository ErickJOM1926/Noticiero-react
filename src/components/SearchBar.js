import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getNewsByKeyword } from '../services/newsApi';

function SearchBar() {
    // Estado para almacenar la palabra clave de búsqueda
    const [keyword, setKeyword] = useState('');
    
    // Objeto para acceder al historial de navegación
    const history = useHistory();

    // Función para manejar la búsqueda
    const handleSearch = () => {
        // Realiza la búsqueda utilizando la función getNewsByKeyword de la API
        getNewsByKeyword(keyword).then((data) => {
            // Puedes manejar la lógica de redirección o actualización de estado aquí
            // Por ejemplo, puedes actualizar la URL o el estado del componente según los resultados de la búsqueda.
        });
    };

    return (
        <div>
            {/* Input para escribir la palabra clave de búsqueda */}
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            {/* Botón para iniciar la búsqueda */}
            <button onClick={handleSearch}>Search</button>
        </div>
    );
}

export default SearchBar;
