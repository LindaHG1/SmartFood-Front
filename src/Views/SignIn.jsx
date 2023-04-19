import { React, useState } from 'react'
import RegisterForm from '../Components/RegisterForm'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



function SingIn() {
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

export default SingIn
