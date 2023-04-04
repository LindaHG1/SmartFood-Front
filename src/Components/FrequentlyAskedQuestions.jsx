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

function Faqs() {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
    }, []);

    return (
        <section className="section-faqs" data-aos="fade-down">
            <div className="faqs">
                <h1 className="title-section">Preguntas frecuentes</h1>
                <div className="faqs-grid">
                    <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Consectetur commodi vitae omnis cumque dolorem eius? Harum
                            voluptas rem voluptates asperiores assumenda dolore nisi fugit
                            illo consequuntur dolores, ipsum, recusandae ad?
                        </p>
                    </Accordion>
                    <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Consectetur commodi vitae omnis cumque dolorem eius? Harum
                            voluptas rem voluptates asperiores assumenda dolore nisi fugit
                            illo consequuntur dolores, ipsum, recusandae ad?
                        </p>
                    </Accordion>
                    <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Consectetur commodi vitae omnis cumque dolorem eius? Harum
                            voluptas rem voluptates asperiores assumenda dolore nisi fugit
                            illo consequuntur dolores, ipsum, recusandae ad?
                        </p>
                    </Accordion>
                    <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Consectetur commodi vitae omnis cumque dolorem eius? Harum
                            voluptas rem voluptates asperiores assumenda dolore nisi fugit
                            illo consequuntur dolores, ipsum, recusandae ad?
                        </p>
                    </Accordion>
                    <Accordion title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Consectetur commodi vitae omnis cumque dolorem eius? Harum
                            voluptas rem voluptates asperiores assumenda dolore nisi fugit
                            illo consequuntur dolores, ipsum, recusandae ad?
                        </p>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}

export default Faqs;