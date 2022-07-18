import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Mainpart from './components/Mainpart';
import { Routes, Route } from "react-router-dom";
import Features from './components/Features';

function App() {
  return (
    <>
      <Navbar />
      <Mainpart />
      <Features />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </>
  );
}

export default App;
