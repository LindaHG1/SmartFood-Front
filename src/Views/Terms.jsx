import { React, useState } from 'react'
import Navbar from '../Components/Navbar';
import TermsConditions from '../Components/TermsConditions';
import Footer from '../Components/Footer';

function Terms() {
    
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
            <TermsConditions/>
            <Footer/>
        </div>
    )
}

export default Terms
