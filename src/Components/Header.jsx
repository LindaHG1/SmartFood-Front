import React from 'react';
import '../assets/sass/components/_header.scss';
import banner from '../assets/images/banner.png'

function HomePage() {
    return (
        <div className="homepage">
            <div className="banner">
            <img src={ banner } alt="Imagen de la tarjeta" />
                {/* <h1>Bienvenido a mi sitio web</h1>
                <p>Explora lo que tengo para ofrecer</p> */}
            </div>
            <div className="card-container">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Imagen de la tarjeta" />
                    
                    <p>Descripción de la tarjeta 1</p>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Imagen de la tarjeta" />
                    
                    <p>Descripción de la tarjeta 2</p>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Imagen de la tarjeta" />
                    
                    <p>Descripción de la tarjeta 3</p>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Imagen de la tarjeta" />
                    
                    <p>Descripción de la tarjeta 4</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
