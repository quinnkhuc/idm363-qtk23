import React, { useEffect, useState } from 'react';
import './App.scss';

import { Routes, Route } from "react-router-dom";
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from './firestore'
import { useDispatch } from 'react-redux';
import { initialize_store } from './features/product';

import Admin from './routes/admin';
import Cart from './routes/cart';
import Home from './routes/home';


import './App.scss';

function App() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'products'))
    onSnapshot(q, querySnapshot => {
      setProducts([])
      querySnapshot.forEach(doc => {
        setProducts(prevProducts => [
          ...prevProducts,
          doc.data()
        ])
      })
    })
  }, [])

  useEffect(() => {
    dispatch(initialize_store(products))
  })

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='admin' element={<Admin />}/>
        <Route path='cart' element={<Cart />}/>
      </Routes>
    </div>
  );
}

export default App;
