import React, { useState } from 'react';
import '../assets/sass/components/_myprofile.scss';

const MiProfile = () => {
    const [ToggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const getActiveClass = (index, className) =>
        ToggleState === index ? className : "";

    return (
        <div className="container-profile">
            <ul className="tab-list">
                <li className={`tabs ${getActiveClass(1, "active-tabs")}`} onClick={() => toggleTab(1)}>Mi perfil</li>
                <li className={`tabs ${getActiveClass(2, "active-tabs")}`} onClick={() => toggleTab(2)}>Mis Pedidos</li>
            </ul>
            <div className="content-container">
                <div className={`content ${getActiveClass(1, "active-content")}`}>
                    <div className="box">
                        
                        <input className='inp-profile' placeholder='Nombre'/>
                        <input className='inp-profile' placeholder='Apellidos'/>
                        <input className='inp-profile' placeholder='Email'/>
                        <input className='inp-profile' placeholder='Contraseña'/>
                        <input className='inp-profile' placeholder='Dirección'/>
                        <button className='btn-auto' type="submit">Guardar cambios</button>
                    </div>
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
    );
};

export default MiProfile;
