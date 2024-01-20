// store/store-data.js
import React, { createContext, useEffect, useState } from 'react';

export const DataItemContext = createContext();

export const DataItemProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Load products from local storage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  // Save all products to local storage whenever products change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <DataItemContext.Provider value={{ products, addProduct, deleteProduct }}>
      {children}
    </DataItemContext.Provider>
  );
};
