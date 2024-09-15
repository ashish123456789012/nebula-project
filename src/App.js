import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './comp/Header';
import Home from "./comp/Home";
import About from "./comp/About";
import Contact from "./comp/Contact";
import Playlist from "./comp/Playlist";
import Footer from "./comp/Footer";
import CreateUser from './comp/CreateUser';
import GetUser from './comp/GetUser';
import StorePortfolio from './comp/StorePortfolio';
import NotFound from './comp/NotFound'; // 
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/playlist' element={<Playlist />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/get-user' element={<GetUser />} />
        <Route path='/store-portfolio' element={<StorePortfolio />} />
        <Route path='*' element={<NotFound />} /> {}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
