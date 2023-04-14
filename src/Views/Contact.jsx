import { React, useState } from 'react'
import Navbar from '../Components/Navbar'
import ContactForm from '../Components/ContactForm'
import Footer from '../Components/Footer'
import About from '../Components/About'

function Contact() {
    
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
            <ContactForm/>
            <Footer/>

        </div>
    )
}

export default Contact
