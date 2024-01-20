// components/Input.js
import React, { useContext, useState } from 'react';
import { DataItemContext } from '../store/store-data';

const Input = () => {
  const { addProduct } = useContext(DataItemContext);

  const [id, setId] = useState('');
  const [sellingPrice, setPrice] = useState('');
  const [productName, setName] = useState('');
  const [category, setCategory] = useState('');

  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const selectCategory = (event) => {
    setCategory(event.target.value);
  };

  const handleAddButtonClicked = () => {
    const product = {
      id,
      sellingPrice,
      productName,
      category,
    };

    addProduct(product);

    // Clear the input fields after adding the product
    setId('');
    setPrice('');
    setName('');
    setCategory('');
  };

  return (
    <div className="input" style={{ textAlign: 'center' }}>
      <div className="row">
        <div className="col">
          <input
            type="number"
            placeholder="Product ID"
            value={id}
            onChange={handleChangeId}
          />
        </div>
        <div className="col">
          <input
            type="number"
            placeholder="Selling Price"
            value={sellingPrice}
            onChange={handlePrice}
          />
        </div>
        <div className="col">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={handleName}
          />
        </div>
        <div className="col">
          <select
            placeholder="Select Category"
            value={category}
            onChange={selectCategory}
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="food">Food</option>
            <option value="clothes">Clothes</option>
            <option value="study">Study</option>
          </select>
        </div>
        <div className="col">
          <button type="button" onClick={handleAddButtonClicked}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
