// App.js
import React from 'react';
import Input from './components/Input';
import ProductList from './components/ProductList';
import { DataItemProvider } from './store/store-data';

function App() {
  return (
    <DataItemProvider>
      <div className="main-container m-4">
        <div className="container">
          <Input />
          <ProductList />
        </div>
      </div>
    </DataItemProvider>
  );
}

export default App;
