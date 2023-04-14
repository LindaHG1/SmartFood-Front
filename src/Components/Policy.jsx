import React from 'react'
import '../assets/sass/components/_termsConditions.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect, useState } from 'react';


function Policy() {

    useEffect(() => {
        AOS.init({duration:1000}); // inicializa AOS
    }, []);

    const [repo, setRepo] = useState([]);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/privacy')
            .then(response => response.json())
            .then(repo => setRepo(repo))
            .catch(error => console.error(error));
    }, []);


    return (
        <div data-aos="fade-down">
        <div className='terms'>
        {repo.map((int) => (

                <div className="content" key={int.id}>
                    <h1 className="title-section">Politica de privacidad</h1>
                    <p className='p-cookies'>{int.description}</p>
                    <p className='p-cookies'>{int.description}</p>
                    <a href="/" className="btn-back">Regresar</a>
                </div>
        ))}
        </div>
        </div>
    )
}

export default Policy
