import "../assets/sass/components/_footer.scss";
import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div class="top-info">
            <div class="bloq-top">
              <a href="index.html" class="logo-footer">
              </a>
            </div>
            <div class="bloq-top">
              <ul>
                <li><a href="./contacto/index.html">Contacto</a></li>
                <li><a href="./preguntas-frecuentes/index.html">Preguntas Frecuentes</a></li>
                <li><a href="./terminos-y-condiciones/index.html">Términos y Condiciones</a></li>
              </ul>
            </div>
            <div class="bloq-top">
              <div class="rrss">
                <p>Síguenos en:</p>
                <ul>
                  <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
        </div>
        <div class="copy">
            <hr></hr>
            <p>&copy;SmartFood 2023 - Todos los derechos reservados</p>
        </div>
    
    </footer>
  );
};

export default Footer;
