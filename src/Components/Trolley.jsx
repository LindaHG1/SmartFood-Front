
import React, { useState, useEffect } from "react";
import "../assets/sass/components/_trolley.scss";

function Frutas() {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        fetch('https://mi-api.com/frutas')
            .then(response => response.json())
            .then(data => setCarrito(data));
    }, []);

    function agregarAlCarrito(fruta) {
        const nuevaFruta = { ...fruta, cantidad: 1 };
        const carritoActualizado = [...carrito, nuevaFruta];
        setCarrito(carritoActualizado);
    }

    function actualizarCantidad(id, cantidad) {
        const carritoActualizado = [...carrito];
        const fruta = carritoActualizado.find((f) => f.id === id);
        fruta.cantidad = cantidad;
        setCarrito(carritoActualizado);
    }

    function eliminarDelCarrito(id) {
        const carritoActualizado = carrito.filter((f) => f.id !== id);
        setCarrito(carritoActualizado);
    }

    function calcularSubtotal(fruta) {
        return fruta.cantidad * fruta.precio;
    }

    function calcularTotal() {
        return carrito.reduce((total, f) => total + calcularSubtotal(f), 0);
    }

    return (
        <div className="cart-container">
            <h1>Carrito</h1>
            <hr></hr>
            <ul className="fruit-list">
                {frutas.map((fruta) => (
                    <li key={fruta.id}>
                        <h2>{fruta.nombre}</h2>
                        <img className="fruit-img" src={fruta.imagen} alt={fruta.nombre} />
                        <p>Precio: €{fruta.precio}</p>
                        <button className="delete-btn" onClick={() => agregarAlCarrito(fruta)}>Agregar al carrito</button>
                    </li>
                ))}
            </ul>

            <h1 className="title-cart">Carrito de compras</h1>
            <hr/>
            <div className="table-cart">
                <table>
                    <tbody>
                        {carrito.length === 0 ? (
                            <div className="emty-cart">Tu carrito está vacío</div>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Producto</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th>Subtotal</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carrito.map((fruta) => (
                                        <tr key={fruta.id}>
                                            <td>{fruta.foto}</td>
                                            <td>{fruta.precio}€</td>
                                            <td>
                                                <input type="number" value={fruta.cantidad} checked={product.quantity === "2"} onChange={(e) => actualizarCantidad(fruta.id, e.target.value)} />
                                            </td>
                                            <td>€{calcularSubtotal(fruta)}</td>
                                            <td>
                                                <button className="delete-btn" onClick={() => eliminarDelCarrito(fruta.id)}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </tbody>
                </table>
            </div>
            <hr />
            <h2 className="total">Total de tu compra:</h2>
            <p className="p-cart">Subtotal: {calcularTotal()}€</p>
            <p className="p-cart">Envío: 5.00€</p>
            <p className="p-cart">Total: {calcularTotal() + 5}€</p>
            <div className="btn-end">
                <button className="btn-cart">Finalizar compra</button>
            </div>
        </div>
    );
}



const frutas = [
    { id: 1, nombre: "Manzana", imagen: "manzana.jpg", precio: 0.99 },
    { id: 2, nombre: "Plátano", imagen: "platano.jpg", precio: 0.45 },
    { id: 3, nombre: "Naranja", imagen: "naranja.jpg", precio: 1.50 },
];

export default Frutas;


