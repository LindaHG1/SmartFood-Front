import React, { useEffect, useState } from "react";
import '../assets/sass/components/_termsConditions.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350


function TermsConditions() {
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 1500,
        }); // inicializa AOS

        fetch('http://127.0.0.1:8000/api/terms')
            .then(response => response.json())
            .then(repo => setRepo(repo))
            .then(repo => console.log(repo))
            .catch(error => console.error(error));
    }, []);

    const [repo, setRepo] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/terms')
            .then(response => response.json())
            .then(repo => setRepo(repo))
            .catch(error => console.error(error));
    }, []);


    return (
<<<<<<< HEAD
        <div data-aos="fade-down">
        <div className='terms'>
        {repo.map((int) => (
                <div className="content" key={int.id}>
                    <h1 className="title-section">Términos y Condiciones</h1>
                    <p className='p-cookies'>{int.description}</p>
                    <p className='p-cookies'>{int.description}</p>
                    <a href="/" className="btn-back">Regresar</a>
=======
        <div data-aos="zoom-in">
        <div className='terms info-page'>
                <div className="content">
                    <h1 className="title-section">Términos y Condiciones</h1>
                    {repo.map(item => {
                        return(
                            <div className="contentPage" key={item.id}>
                                {item.description}
                            </div>
                        )
                    })}
                    <a href="/" className="btn-back">Volver al Inicio</a>
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350
                </div>
                ))}
        </div>
        </div>
    )
}

export default TermsConditions
