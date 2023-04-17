import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
		.then(pd => setProducts(pd))
		.then(pd => console.log(pd))
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
		<div className='container-products'>
			{/* <div className='listCategories'>
				<ul>
					{category.map(cat => (
						<li className='itemCat' key={category.id} onClick={() => setCategories(cat)}>
							{category.typeCategory}
						</li>
					))}
				</ul>
			</div> */}
			<div className='container-items'>
				{products.map(product => (
					<div className='item' key={product.id}>
						<Link to={`/products/${product.id}`} key={product.id}>
							<figure>
								<img src={`http://127.0.0.1:8000/uploads/products/${product.photo}`} alt={product.name} />
							</figure>
						</Link>
						<div className='info-product'>
							<Link to={`/products/${product.id}`} key={product.id}>
								<div className='name-price'>
									<h3 className='product-name'>{product.name}</h3>
									<p className='price'>{product.price} €</p>
								</div>
							</Link>
							<button onClick={() => onAddProduct(product)}>
								Añadir al carrito
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductList
