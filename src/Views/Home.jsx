import React from 'react'
import Navbar from '../Components/Navbar'
import HomePage from '../Components/HomePage'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'

function Home() {
    return (
        <div>
            <Navbar/>
            <HomePage/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Home
