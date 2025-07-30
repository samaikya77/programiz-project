import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home';
import Html from './components/html';
import Css from './components/css';
import Js from './components/js';
import Python from './components/python';
import C from './components/c++';
import Ruby from './components/ruby';
import Numpy from './components/numpy';
import R from './components/r';
import Sql from './components/sql';
import Typescript from './components/typescript';
import Pandas from './components/pandas';
import Kotlin from './components/Kotlin';
import Rust from './components/Rust';
import Swift from './components/Swift';
import Nav from './Nav';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/js" element={<Js />} />
        <Route path="/python" element={<Python />} />
        <Route path="/c" element={<C />} />
        <Route path="/ruby" element={<Ruby />} />
        <Route path="/numpy" element={<Numpy />} />
        <Route path="/r" element={<R />} />
        <Route path="/sql" element={<Sql />} />
        <Route path="/typescript" element={<Typescript />} />
        <Route path="/pandas" element={<Pandas />} />
        <Route path="/kotlin" element={<Kotlin />} />
        <Route path="/rust" element={<Rust />} />
        <Route path="/swift" element={<Swift />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
