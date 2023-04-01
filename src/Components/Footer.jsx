import React from "react";
import "../assets/sass/components/_footer.scss";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-info">
        <div className="bloq-top">
          <a href="index.html" className="logo-footer"></a>
        </div>
        <div className="bloq-top">
          <ul>
            <li>
              <a href="./contacto/index.html">Contacto</a>
            </li>
            <li>
              <a href="./preguntas-frecuentes/index.html">
                Preguntas Frecuentes
              </a>
            </li>
            <li>
              <a href="./terminos-y-condiciones/index.html">
                Términos y Condiciones
              </a>
            </li>
          </ul>
        </div>
        <div className="bloq-top">
          <div className="rrss">
            <p>Síguenos en:</p>
            <ul>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy">
        <hr />
        <p>&copy;SmartFood 2023 - Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;