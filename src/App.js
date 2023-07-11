import React from 'react';
import SingUp from './Components/SingUp';
import "./App.css"
import Login from './Components/Login';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/login" element={<Login/> } />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/" element={ <Navigate to='/singup'/>} />
   </Routes>
    </div>
  );
};

export default App;