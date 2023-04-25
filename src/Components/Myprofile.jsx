import React, { useEffect, useState } from 'react';
import '../assets/sass/components/_myprofile.scss';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";

const MiProfile = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [countProducts, setCountProducts] = useState(0);
    const [total, setTotal] = useState(0);

    const [cli, setCli] = useState([]);
    
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        ToggleState === index ? className : "";

    useEffect(() => {
        AOS.init({
            duration: 1500,
        });
        fetch('http://127.0.0.1:8000/api/clients?email=maperezr.14@gmail.com')
            .then(response => response.json())
            .then(cli => setCli(cli))
            .then(cli => console.log(cli))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Navbar
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            />
            <div className="container-profile">
                <ul className="tab-list">
                    <li className={`tabs ${getActiveClass(1, "active-tabs")}`} onClick={() => toggleTab(1)}>Mi perfil</li>
                    <li className={`tabs ${getActiveClass(2, "active-tabs")}`} onClick={() => toggleTab(2)}>Mis Pedidos</li>
                </ul>
                <div className="content-container">
                    <div className={`content ${getActiveClass(1, "active-content")}`}>
                    {cli.map(cl => {
                        return(   
                        <div className="box" key={cl.id}>                        
                            <input className='inp-profile' placeholder='Nombre' value={cl.name} />
                            <input className='inp-profile' placeholder='Apellidos' value={cl.lastname} />
                            <input className='inp-profile' placeholder='Email' value={cl.email} />
                            <input className='inp-profile' placeholder='Contraseña' value={cl.password} />
                            <input className='inp-profile' placeholder='Dirección' value={cl.address} />
                            <button className='btn-auto' type="submit">Guardar cambios</button>
                        </div>
                        )
                    })}
                    </div>
                    <div className={`content ${getActiveClass(2, "active-content")}`}>
                        <div className="box">                            
                            <table>
                                <thead>
                                    <tr>
                                        <th className='title-table'>ID</th>
                                        <th className='title-table'>Fecha Pedido</th>
                                        <th className='title-table'>Resumen</th>
                                        <th className='title-table'>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th className='table-content'>01</th>
                                        <th className='table-content'>17/04/2023</th>
                                        <th className='table-content'>fresas, limón</th>
                                        <th className='table-content'>8</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </>
    );
};

export default MiProfile;
