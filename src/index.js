import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';

import Admin from './routes/admin';
import Cart from './routes/cart';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='admin' element={<Admin />}/>
          <Route path='cart' element={<Cart />}/>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

