import React from 'react';
import '../assets/sass/components/_header.scss';
import banner from '../assets/images/banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; // importa los estilos de AOS
import { useEffect } from 'react';

function HomePage() {
    useEffect(() => {
        AOS.init({duration:1000}); // inicializa AOS
    }, []);
    
    return (
        <div className="homepage">
            
            <div className="slogan">
            <div data-aos="fade-left">

                <h1>"En Smarfood encontrarás la frescura de la huerta a solo unos pasos de tu hogar".</h1>
                <p>Explora lo que ofrecemos</p>
            </div>
            </div>

            <div className="banner">
                <img src={banner} alt="Imagen de la tarjeta" />

            </div>
            <div className="card-container">
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Imagen de la tarjeta" />

                    <p>Cítricos</p>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Imagen de la tarjeta" />

                    <p>Frutas de temporada</p>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Imagen de la tarjeta" />

                    <p>Tropicales</p>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Imagen de la tarjeta" />

                    <p>Frutos Secos</p>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
