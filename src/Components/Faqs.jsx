import React, { useEffect, useState } from "react";
import "../assets/sass/components/_frequentlyaskedquestions.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function Accordion({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faqs-item">
            <a className={isOpen ? "faqs-title active" : "faqs-title"} onClick={() => setIsOpen(!isOpen)} href="#custom">{title}</a>
            <div className={isOpen ? "faqs-content" : "faqs-content no-height"}>
                <div className="faqs-content-inside">
                    {children}
                </div>
            </div>
        </div>
    );
}

function Faqs(){
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        fetch('http://127.0.0.1:8000/api/faqs')
            .then(response => response.json())
            .then(faqs => setFaqs(faqs))
            .then(faqs => console.log(faqs))
            .catch(error => console.error(error));
    }, []);

    return (
        <section className="section-faqs" data-aos="fade-down">
            <div className="faqs">
                <h1 className="title-section">Preguntas frecuentes</h1>
                <div className="faqs-grid">
                {faqs.map(fq => {
                    return(     
                    <Accordion title={fq.question} key={fq.id}>
                        <p>{fq.answer}</p>
                    </Accordion>
                    )
                })}
                </div>
            </div>
        </section>
    );
}

export default Faqs;