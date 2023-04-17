import React from 'react'
import '../assets/sass/components/_about.scss'
import about from '../assets/images/tropicales.jpg'

function About() {
    return (
        <div className='about__container'>
            <div className="about__title">
                    <h2 className='about-title'>SOBRE NOSOTROS</h2>
                    
                </div>
            <div className="about__box">
                <div className="about__left">
                    <p className="about__text">
                        En Smartfood, somos una empresa de frutas comprometida con el trabajo en equipo y el cuidado del medio ambiente. Creemos que la colaboración y el compromiso son la clave para lograr el éxito en cualquier proyecto.

                        Además, estamos comprometidos con la sostenibilidad y el cuidado del medio ambiente. Trabajamos de manera responsable y consciente para minimizar nuestro impacto ambiental en cada etapa de nuestro proceso de producción, desde la siembra hasta la distribución.

                        Nos enorgullece trabajar juntos para ofrecer frutas de alta calidad y sostenibles que son saludables para nuestros clientes y para el planeta. En Smartfood, el trabajo en equipo y el cuidado del medio ambiente son valores fundamentales que impulsan todo lo que hacemos.

                    </p>

                </div>
                <div className="about__right">
                    <img className="about-img" src={about} />
                </div>
            </div>
        </div>
    )
}

export default About
