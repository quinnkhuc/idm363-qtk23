import React, { useEffect, useState } from 'react';
import './App.scss';

import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from './firestore'
import { useDispatch } from 'react-redux';
import { initialize_store } from './features/product';

import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';

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
    <>
      <Header />
      <Catalog />
    </>
  );
}

export default App;
