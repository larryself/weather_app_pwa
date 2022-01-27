import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Index from "./pages/index";
import City from "./pages/city/city";
import Error from "./pages/error/error";
import "./styles/index.css"

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/city" element={<City/>}/>
          <Route path="/404" element={<Error/>}/>
          <Route path='*' element={<Navigate to='/404'/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
