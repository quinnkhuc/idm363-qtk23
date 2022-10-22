import React from 'react';
import './App.scss';

import { useSelector } from "react-redux";

import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  const products = useSelector((state) => state.product.value);

  return (
    <>
      <Header />

      <div id="catalog">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            imgURL={product.imgURL}
          />
        ))}
      </div>
    </>
  );
}

export default App;
