import React from 'react';
import '../assets/sass/components/_header.scss';
import banner from '../assets/images/banner.png'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import banner2 from '../assets/images/banner2.png'
import citricos from '../assets/images/citricos.jpg'
import temporada from '../assets/images/temporada.jpg'
import tropicales from '../assets/images/tropicales.jpg'
import secos from '../assets/images/secos.jpg'
import Tips from '../Components/Tips'

function HomePage() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="homepage">
            <div className="banner">
                <picture>
                    <source media="(max-width: 745px)" srcSet= {banner2}/>
                    <img src={banner} alt="Imagen de la tarjeta" />
                </picture>                        
                <div className="slogan">
                    <div data-aos="fade-left">
                        <h1>"En Smarfood encontrarás la frescura de la huerta a solo unos pasos de tu hogar"</h1>
                        <p>Explora lo que ofrecemos</p>
                    </div>
                </div>
            </div>
            <Tips/>
        </div>
    );
}

export default HomePage;