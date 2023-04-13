import React from "react";
import { useState } from "react";
import { Trolley } from '../Trolley';
import { Cards } from '../Cards';
import './FakeShopStyles.css';
import './Trolley.css';

function Shop() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="container-shop">
      <Trolley
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />
      <Cards
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />
    </div>
  )
}

export default Shop