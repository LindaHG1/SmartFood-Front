import React, { useState, useEffect } from "react";

function OptionsWeight(setProduct) {
  const [price, setPrice] = useState(0); // Price of 1kg initially set to 0
  const [active, setActive] = useState("1kg"); // 1kg button active by default

  // Function to update price and active button based on selected option
  const handleSelection = (option) => {
    if (option === "1kg") {
      setPrice(10);
      setActive("1kg");
    } else if (option === "3kg") {
      setPrice(30);
      setActive("3kg");
    } else if (option === "0.5kg") {
      const priceHalfKg = price / 2;
      setPrice(priceHalfKg);
      setActive("0.5kg");
    }
  };

  useEffect(() => {
    // Make HTTP request to API
    fetch(`http://127.0.0.1:8000/api/products/`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err));
        }, []);

  return (
    <div>
      <button
        className={active === "1kg" ? "active" : ""}
        onClick={() => handleSelection("1kg")}
      >
        1 kg
      </button>
      <button
        className={active === "3kg" ? "active" : ""}
        onClick={() => handleSelection("3kg")}
      >
        3 kg
      </button>
      <button
        className={active === "0.5kg" ? "active" : ""}
        onClick={() => handleSelection("0.5kg")}
      >
        0.5 kg
      </button>
      <p>Price: ${price}</p>
    </div>
  );
}

export default OptionsWeight;