import { React, useState } from 'react'
import Navbar from '../Components/Navbar'
import HomePage from '../Components/HomePage'
import Tips from '../Components/Tips'
import { ProductList } from '../Components/ProductList'
import Footer from '../Components/Footer'



function Home() {

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
            <HomePage/>
            <Tips/>
            <ProductList
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
            />
            <Footer/>
        </div>
    )
}

export default Home
