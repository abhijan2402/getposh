import image from './image.png';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Lottie from "lottie-react";
import ShopLogo from './ShopLogo.json'
import Load from './loading.json'
import { useEffect, useState } from 'react';
import Main from './Main';
function App() {


  return (
    <Routes>
      <Route path='/getposh' element={<Main />} />
    </Routes>

  );
}

export default App;
