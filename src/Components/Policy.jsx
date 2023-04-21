import React, { useEffect, useState } from "react";
import '../assets/sass/components/_termsConditions.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Policy() {
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        AOS.init({
            duration:1500
        }); // inicializa AOS

        fetch('http://127.0.0.1:8000/api/privacy')
            .then(response => response.json())
            .then(repo => setRepo(repo))
            .then(repo => console.log(repo))
            .catch(error => console.error(error));
    }, []);


    return (
        <div data-aos="zoom-in">
            <div className='terms info-page'>
                <div className="content">
                    <h1 className="title-section">Política de privacidad</h1>
                    {repo.map(item => {
                        return(
                            <div className="contentPage">
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

export default Policy
