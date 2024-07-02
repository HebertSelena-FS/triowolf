import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import QuotePage from './pages/quote';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/quote' element={<QuotePage />} />
      </Routes>
    </>
  )
}

export default App;