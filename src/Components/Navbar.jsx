import '../assets/sass/components/_navbar.scss';
import logo from '../assets/images/logo.png';
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from "react";




export const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);



    const handleToggle = () => {
        setToggle(!toggle);
    };

    useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
        return () => {
            window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
        };
    }, []);


    return (
        
        <nav className={toggle ? "navbar expanded" : "navbar"}>
            <img className="logo" src={logo} alt="SmartFood" />

            <div className="toggle-icon" onClick={handleToggle}>
                <ul className='icons-nav' style={{ display: "flex", alignItems: "center" }}>
                    <li className="float-shadow icon-nav">
                        <a href="#">
                            <Icon icon="ic:round-shopping-cart" width="28" height="28" />
                        </a>
                    </li>

                    <li className="float-shadow icon-nav">
                        <a href="#" >
                            <Icon icon="teenyicons:user-circle-solid" width="28" height="28" />
                        </a>
                    </li>

                    <li className="float-shadow icon-nav">
                        {toggle ? <Icon icon="material-symbols:close-rounded" className='menu' width="30" height="30" /> : <Icon icon="ic:round-menu" className='menu' width="32" height="32" />}
                    </li>

                </ul>
            </div>

            <ul className="links">
                <li className="float-shadow">
                    <a href="/">Inicio</a>
                </li>
                <li className="float-shadow">
                    <a href="/productos">Productos</a>
                </li>
                <li className="float-shadow">
                    <a href="/contacto">Contacto</a>
                </li>
            </ul>

            <ul className='icons-desk'>
                    <li className="float-shadow icon-desk">
                    {windowWidth > 768 ? (
                        <a href="#">
                            <Icon icon="ic:round-shopping-cart" width="28" height="28" />
                        </a>
                        ) : null}
                    </li>

                    <li className="float-shadow icon-desk">
                    {windowWidth > 768 ? (
                        <a href="#" >
                            <Icon icon="teenyicons:user-circle-solid" width="28" height="28" />
                        </a>
                        ) : null}
                    </li>
                </ul>
        </nav>
    );
};

export default Navbar;