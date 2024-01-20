// components/ProductList.js
import React, { useContext } from 'react';
import { DataItemContext } from '../store/store-data';

const ProductList = ({ category }) => {
  const { products, deleteProduct } = useContext(DataItemContext);

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  const handleDeleteClick = (productId) => {
    deleteProduct(productId);
  };

  return (
    <div>
      {category && <h3>{category} Products:</h3>}
      {!category && <h3>All Products:</h3>}
      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            {`ID: ${product.id}, Price: ${product.sellingPrice}, Name: ${product.productName}, Category: ${product.category}`}
            <button onClick={() => handleDeleteClick(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
