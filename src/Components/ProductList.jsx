import { React, useEffect, useState } from 'react';
import './Products/ProductList.css';


export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	
	const[products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/products')
		.then(response => response.json())
		.then(data => setProducts(data))
		.then(data => console.log(data))
		.catch(error => console.error(error));

	}, []);

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

	return (
		<div className='container-items'>
			{products.map(product => (
				<div className='item' key={product.id}>
					<figure>
						<img src={`http://127.0.0.1:8000/uploads/products/${product.photo}`} alt={product.name} />
					</figure>
					<div className='info-product'>
						<div className='name-price'>
							<h3 className='product-name'>{product.name}</h3>
							<p className='price'>{product.price} €</p>
						</div>
						<button onClick={() => onAddProduct(product)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductList
