import React from "react";
import "../assets/sass/components/_footer.scss";
import { Icon } from '@iconify/react';



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
            <ul>
              <li>
                <a href="#">
                <Icon icon="mdi:instagram" width="32" height="38" />
                </a>
              </li>
              <li>
                <a href="#">
                {/* <Icon icon="typcn:social-youtube-circular" width="42" height="42" /> */}
                <Icon icon="tabler:brand-youtube" width="32" height="38" />
                </a>
              </li>
              <li>
                <a href="#">
                <Icon icon="basil:facebook-outline" width="32" height="38"/>
                </a>
              </li>
              <li>
                <a href="#">
                <Icon icon="icon-park-outline:twitter" width="30" height="34" />
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