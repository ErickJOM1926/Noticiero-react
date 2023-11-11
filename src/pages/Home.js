// Importa la biblioteca React desde 'react'
import React from 'react';

// Importa los componentes personalizados NewsList y SearchBar desde sus respectivas ubicaciones
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';

// Define un componente funcional llamado Home
function Home() {
    // Devuelve la estructura JSX del componente
    return (
        <div>
            {/* Renderiza el componente SearchBar */}
            <SearchBar />

            {/* Renderiza el componente NewsList */}
            <NewsList />
        </div>
    );
}

// Exporta el componente Home para que pueda ser utilizado en otros lugares de la aplicación
export default Home;
