import { React, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import RegisterForm from '../Components/RegisterForm'

function Register() {
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
            <RegisterForm/>
            <Footer/>
        </div>
    )
}

export default Register