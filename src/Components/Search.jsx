import React, { useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/fa/search";
import '../assets/sass/components/_search.scss';

function BuscadorComponent() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [productsFilter, setProductsFilter] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setProductsFilter(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    const searchTextLowerCase = e.target.value.toLowerCase();
    const productsFilter = products.filter((product) =>
      product.name?.toLowerCase().includes(searchTextLowerCase)
    );
    setProductsFilter(productsFilter);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search-container">
          <Icon icon={search} size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Buscar productos"
            value={searchText}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
      </form>
      <div>
        <h2></h2>
        {productsFilter.map((product) => (
          <div key={product.id}>{product.name}</div>
        ))}
      </div>
    </div>
  );
}

export default BuscadorComponent;
