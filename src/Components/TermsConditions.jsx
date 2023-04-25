import React, { useEffect, useState } from "react";
import '../assets/sass/components/_termsConditions.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function TermsConditions() {
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        AOS.init({
            duration: 1500,
        }); // inicializa AOS

        fetch('https://prueba.coderf5.es/api/terms')
            .then(response => response.json())
            .then(repo => setRepo(repo))
            .then(repo => console.log(repo))
            .catch(error => console.error(error));
    }, []);



    return (
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
                </div>
        </div>
        </div>
    )
}

export default TermsConditions
