import { React, useState } from 'react'
import Navbar from '../Components/Navbar'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import About from '../Components/About'


function Contact() {
    const handleScroll = () => {
        const form = document.getElementById('form-section');
        window.scrollTo({ top: form.offsetTop - 100, behavior: 'smooth' });
    }
    
    
    const [allProducts, setAllProducts] = useState([]);
    const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);

    return (
        <div>
            <Navbar
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            />
            <About/>
            <button id="your-opinion" onClick={handleScroll}>Queremos escucharte, tu opinión nos importa mucho. <span>¡Escríbenos!</span></button>
            
            <ContactForm/>
            <Footer/>

        </div>
    )
}

export default Contact
