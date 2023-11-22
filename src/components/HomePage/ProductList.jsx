import React, { useState, useEffect } from 'react';
import ProductSlider from './ProductSlider';


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from your API or another source
    // For example, using fetch:
    fetch('https://api.example.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {/* Other components */}
      <ProductSlider products={products} />
      {/* Other components */}
    </div>
  );
};

export default ProductList;
