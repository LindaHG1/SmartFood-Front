import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products/ProductList.css';
import allcategories from '../assets/images/todas-categorias.jpg'


export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
	
	const [products, setProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState('');

	useEffect(() => {
		fetch('http://127.0.0.1:8000/api/categories')
		.then(response => response.json())
		.then(data => setCategories(data))
		.catch(error => console.error(error));
	}, []);

	useEffect(() => {
		let url = 'http://127.0.0.1:8000/api/products';
		if (category) {
		url += `/category/${category}`;
		}
		fetch(url)
		.then(response => response.json())
		.then(data => setProducts(data))
		.catch(error => console.error(error));
	}, [category]);

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

	const handleCategoryClick = (category) => {
		setCategory(category);
	};

	const handleCategoryChange = event => {
		const newCategory = event.target.value;
		console.log('Selected category:', newCategory);
		setCategory(newCategory);
	};

	return (
		<div className='container-products'>
			<div className='categories-mobile'>
				<p>Filtar por Categorias</p>
				<select value={category} onChange={handleCategoryChange}>
					<option value=''>Todas las categorías</option>
					{categories.map(category => (
						<option key={category.id} value={category.typecategory}>
							{category.typecategory}
						</option>
					))}
				</select>
			</div>
			<ul className='container-categories categories-desktop'>
				<li className='item-category' onClick={() => handleCategoryClick('')}>
					<img src={allcategories} alt="" />
					<span>Todas</span>
				</li>
				{categories.map(category => (
					<li key={category.id} onClick={() => handleCategoryClick(category.typecategory)} className='item-category'>						
						<img src={`http://127.0.0.1:8000/uploads/categories/${category.photo}`} alt={category.typecategory} />
						<span>{category.typecategory}</span>
					</li>
				))}
			</ul>
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