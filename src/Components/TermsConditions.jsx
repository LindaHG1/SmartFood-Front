import React from 'react'
import '../assets/sass/components/_termsConditions.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';


function TermsConditions() {

    useEffect(() => {
        AOS.init({duration:1000}); // inicializa AOS
    }, []);

    return (
        <div data-aos="zoom-in">
        <div className='terms'>
            {/* <img class="church" src="../assets/images/church.png" alt="church-separador"> */}
                <div className="content">
                    <h1 className="title-section">Términos y Condiciones</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Faucibus elementum amet molestie mattis nunc at sed etiam in. Pharetra fringilla facilisi massa habitant et ac. Bibendum id tellus gravida gravida nibh sodales viverra nulla dictum. Bibendum amet odio in sed molestie lectus eu sit lorem. Pharetra diam enim id quis id at egestas urna in. Malesuada hendrerit maecenas eget enim lorem sed. Vitae pellentesque massa maecenas a egestas turpis diam.
                    </p>
                    <p>
                        Tristique vitae pharetra enim curabitur dui.Ut enim suscipit mattis pellentesque ante eu consectetur. Tincidunt sollicitudin quis imperdiet enim enim. Faucibus quam faucibus et lorem dictumst morbi id viverra tellus. Sit viverra sit fermentum a. In dolor fermentum gravida tellus a a. Donec tellus enim augue viverra vulputate. Sit sed risus facilisis nunc tellus hendrerit. Sit enim egestas morbi lorem. Laoreet fames eget rutrum nisi mi odio. Molestie massa cras bibendum dui enim cursus tristique porttitor. Nec quisque tortor ullamcorper faucibus vulputate. Nibh lectus viverra convallis tincidunt porttitor tempus amet vitae eget.
                    </p>
                    <p>
                        In suspendisse eros at morbi id congue egestas justo. Bibendum dictum neque duis neque ridiculus sagittis leo mattis aliquam. Massa eu cum suspendisse netus pellentesque cursus a tristique. Porttitor adipiscing et a massa pellentesque. Tempus vitae leo quis auctor eget posuere augue pretium in. Cursus sem tellus dignissim malesuada in. Habitant rutrum viverra id dignissim. Nam tristique morbi amet ut elit enim viverra viverra ullamcorper. Ultricies imperdiet eget ac metus tellus.
                    </p>
                    <a href="../index.html" className="btn-back">Regresar</a>
                </div>
        </div>
        </div>
    )
}

export default TermsConditions
