import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import "../assets/sass/components/_productdetails.scss";
import AOS from "aos";
import 'aos/dist/aos.css';

const DetailsProduct = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    const [quantity, setQuantity] = useState(1);
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };
    const handleAddToCart = () => {
        // Aquí podrías enviar la información del producto y la cantidad al carrito de compras.
        console.log(`Agregado al carrito: ${quantity} kg de ${product.name}`);
    };

    // PRUEBA DE CODIGO BOTON AÑADIR AL CARRITO

    const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {
			const products = allProducts.map(item =>
				item.id === product.id
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
			setTotal(total + product.price * product.quantity);
			setCountProducts(countProducts + product.quantity);
			return setAllProducts([...products]);
		}

		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));

        AOS.init({
            duration: 1500
        }); // inicializa AOS


    }, [id]);
    return (
        <div data-aos="fade-down" key={product.id}>
            <div className="fruit-detail">
                <div className="fruit-card">
                    <img src={`http://127.0.0.1:8000/uploads/products/${product.photo}`} alt={product.name} className="fruit-detail__image zoom-image" />
                    <div className="p-fruits">
                        <div className="text">
                            <h2 className="fruit-detail__title">{product.name}</h2>
                            <p className="fruit-detail__origin"><strong>Descripción:</strong> {product.description}</p>
                            <p className="fruit-detail__type"><strong>Categoría: </strong>

                                {product.category && product.category.map(category => (
                                    <span key={category.id}>
                                        {category.typeCategory}
                                    </span>
                                ))}

                            </p>
                            <p className="fruit-detail__price"><strong>Precio por kilo:</strong> {product.price}€</p>
                        </div>
                        <div className="quantity-container">
                            <label className="kg">
                                <input
                                    type="radio"
                                    name="quantity"
                                    value="0.5"
                                    checked={product.quantity === "0.5"}
                                    onChange={handleQuantityChange}
                                />
                                0.5 kg
                            </label>
                            <label className="kg">
                                <input
                                    type="radio"
                                    name="quantity"
                                    value="1"
                                    checked={product.quantity === "1"}
                                    onChange={handleQuantityChange}
                                />
                                1 kg
                            </label>
                            <label className="kg">
                                <input
                                    type="radio"
                                    name="quantity"
                                    value="2"
                                    checked={product.quantity === "2"}
                                    onChange={handleQuantityChange}
                                />
                                2 kg
                            </label>
                            <div className="add-trolley">
                                <input type="number" value={product.quantity} onChange={handleQuantityChange} />
                                <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                            </div>
                        </div>
                        <p><a className='back-to-shop' href="/products">Seguir comprando</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProduct;
