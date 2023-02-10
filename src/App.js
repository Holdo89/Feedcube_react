import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Portal/Login/Login'
import Dashboard from './components/Portal/Dashboard/Dashboard';


const App = () => {

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


