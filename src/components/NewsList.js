import React, { useEffect, useState } from 'react';
import { getTopHeadlines } from '../services/newsApi';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NewsList() {
    // Estado para almacenar la lista de noticias
    const [news, setNews] = useState([]);

    // Efecto secundario para obtener las noticias al cargar el componente
    useEffect(() => {
        // Llama a la función getTopHeadlines de la API para obtener las noticias principales
        getTopHeadlines().then((data) => {
            // Actualiza el estado 'news' con las noticias obtenidas
            setNews(data.articles);
        });
    }, []); // El segundo parámetro del useEffect está vacío, lo que significa que se ejecutará solo una vez al montar el componente

    return (
        <div>
            {/* Mapea sobre la lista de noticias y renderiza un Card de Bootstrap para cada una */}
            {news.map((article) => (
                <Card key={article.title} className="mb-3">
                    {/* Si hay una URL de imagen, muestra la imagen en la parte superior del Card */}
                    {article.urlToImage && (
                        <Card.Img variant="top" src={article.urlToImage} alt={article.title} />
                    )}
                    {/* Cuerpo del Card con el título, descripción y un botón para leer más */}
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Text>{article.description}</Card.Text>
                        <Button variant="primary" href={article.url} target="_blank" rel="noopener noreferrer">
                            Read more
                        </Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default NewsList;
