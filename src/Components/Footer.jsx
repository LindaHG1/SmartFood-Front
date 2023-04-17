import React, { useEffect, useState } from "react";
import "../assets/sass/components/_footer.scss";
import logo from '../assets/images/logo.png';
import { Icon } from '@iconify/react';
import logo from '../assets/images/logo.png'







const Footer = () => {
<<<<<<< HEAD

  const [repo, setRepo] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/store')
            .then(response => response.json())
            .then(repo => setRepo(repo))
            .then(repo => console.log(repo))
            .catch(error => console.error(error));
    }, []);



=======
    const [foot, setFoot] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/store')
            .then(response => response.json())
            .then(foot => setFoot(foot))
            .then(foot => console.log(foot))
            .catch(error => console.error(error));
    }, []);
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350
  return (
    <footer className="footer">
      <div className="top-info">
        <div className="bloq-top">
<<<<<<< HEAD
          <a href='/' className="logo-footer"><img className="logo" src={logo} alt="SmartFood" width='120'/></a>
=======
          <a href="/" className="logo-footer">
          <img className="logo" src={logo} alt="SmartFood" width="120" />
          </a>
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350
        </div>
        <div className="bloq-top">
          <ul>
            <li>
              <a href="/contact">Contacto</a>
            </li>
            <li>
              <a href="/faqs">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="/terms">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="/privacy">
                Politica de privacidad
              </a>
            </li>
          </ul>
        </div>
        <div className="bloq-top">
          <div className="rrss">
            <p>Síguenos en:</p>
<<<<<<< HEAD
            {repo.map((item) => {
=======
            {foot.map((item) => {
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350
              return (
                <ul>
                  {item.social.map((sm) => {
                    return (
                      <li key={sm.id}>
                        <a href={sm.linkicon} target="_blank" rel="noreferrer">
                          <Icon icon={`mdi:${sm.nameicon}`} width="32" height="38" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>
      <div className="copy">
        <hr />
<<<<<<< HEAD
        {repo.map((item) => {
          return (
            <p>{item.address}</p>
          );
        })}

=======
        <br />
>>>>>>> 00622b1ce2c527dfc811623c3d40b4cfb3fa3350
        <p>&copy;SmartFood 2023 - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;