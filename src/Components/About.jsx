import {React, useEffect} from 'react'
import '../assets/sass/components/_about.scss'
import about from '../assets/images/tropicales.jpg'
// import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import ContactForm from './ContactForm';
// import { useRef } from 'react';


function About() {

    // const formContact = useRef(null);

    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behavior: "smooth"
    //     })
    // }

    // const location = useLocation();

    // useEffect(() => {
    //     const seccion = new URLSearchParams(location.search).get("contactForm");
    //     if (seccion) {
    //         const seccionElement = document.getElementById(seccion);
    //         if (seccionElement) {
    //         seccionElement.scrollIntoView({ behavior: "smooth" });
    //         }
    //     }
    //     console.log(useEffect);
    //     }, [location]);

//   useEffect(() => {
//     const section = new URLSearchParams(location.search).get("contactForm");
//     if (section) {
//       const sectionElement = document.getElementById(section);
//       if (sectionElement) {
//         sectionElement.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [location]);


    return (

        <section id="about_us_section" className='about__container'>
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
                    {/* <Link to="/contact?form=formContact">Tu opinión nos importa</Link> */}


                </div>
                <div className="about__right">
                    <img className="about-img" src={about} />
                </div>
            
            </div>
            {/* <section ref={formContact}>
                <p><a onClick={() => scrollToSection(formContact)} className='p-opinion' href="/contact?form=contactForm">Tu opinión nos importa</a></p>
            </section>
            <section id="formContact">
            <ContactForm/>
            </section> */}
        </section>
    )
}

export default About
