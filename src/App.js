import logo from './logo.svg';
import './App.css';
import Home from './screens/user/home/Home';
import About from './screens/user/about/About';
import Product from './screens/user/products/Product';
import Contact from './screens/user/contact/Contact';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Notfound from './screens/user/notfound/Notfound';
import Training from './screens/user/training/Training';
 
function App() {
  return (
      <Routes>
        <Route path='/' element={<Training />} />
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='about-us' element={<About /> }/>
        <Route path='contact-us' element={<Contact /> }/>
        <Route path='products' element={<Product /> }/>
        <Route path='*' element={<Notfound /> }/> 
      </Routes>
  );
}

export default App;
