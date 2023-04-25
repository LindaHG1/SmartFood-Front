import { React, useState } from 'react'
import Navbar from '../Components/Navbar'
import Cookies from '../Components/cookies'
import Footer from '../Components/Footer'

function CookiesView() {

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
            <Cookies/>
            <Footer/>
        </div>
    )
}

export default CookiesView
