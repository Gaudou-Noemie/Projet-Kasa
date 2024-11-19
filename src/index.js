// Création de toutes les routes du Site 
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Accommodation from './pages/accommodation'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <main className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/accommodation/:id" element={<Accommodation/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </main>
      <Footer/>
    </Router>
  </React.StrictMode>
);

