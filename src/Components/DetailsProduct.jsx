import React, { useState } from "react";
import "../assets/sass/components/_productdetails.scss";
import prueba from "../assets/images/prueba.png";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const DetailsProduct = ({ name, origin, type, price, image }) => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleAddToCart = () => {
        // Aquí podrías enviar la información del producto y la cantidad al carrito de compras.
        console.log(`Agregado al carrito: €{quantity} kg de €{name}`);
    };

    useEffect(() => {
        AOS.init({duration:1000}); // inicializa AOS
    }, []);

    return (
        <div data-aos="fade-down">
        <div className="fruit-detail">
            <h2 className="fruit-detail__title">Nombre del producto</h2>
            
            <div className="fruit-card">

            
                <img src={prueba} alt={name} className="fruit-detail__image zoom-image" />
            
                <div className="p-fruits">
                    <div className="text">
                    <p className="fruit-detail__origin"><strong>Origen:</strong> algun texto{origin}</p>
                    <p className="fruit-detail__type"><strong>Tipo:</strong> mas texto {type}</p>
                    <p className="fruit-detail__price"><strong>Precio por kilo:</strong> 10€ {price}</p>
                    </div>
                    <div className="quantity-container">
                        
                        <label className="kg">
                            <input
                                type="radio"
                                name="quantity"
                                value="0.5"
                                checked={quantity === "0.5"}
                                onChange={handleQuantityChange}
                            />
                            0.5 kg
                        </label>
                        <label className="kg">
                            <input
                                type="radio"
                                name="quantity"
                                value="1"
                                checked={quantity === "1"}
                                onChange={handleQuantityChange}
                            />
                            1 kg
                        </label>
                        <label className="kg">
                            <input
                                type="radio"
                                name="quantity"
                                value="2"
                                checked={quantity === "2"}
                                onChange={handleQuantityChange}
                            />
                            2 kg
                        </label>
                        <div className="add-trolley">
                        <label>
                            <input
                                type="number"
                                value={quantity}
                                onChange={handleQuantityChange}
                            />
                            <button onClick={handleAddToCart}>Agregar al carrito</button>
                        </label>
                    
                        </div>
                        </div>
                        
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default DetailsProduct;
