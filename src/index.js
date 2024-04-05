import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer/Footer';
import Loader from './components/Loader/Loader';

const Root = () => {
  

  
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);

reportWebVitals();
