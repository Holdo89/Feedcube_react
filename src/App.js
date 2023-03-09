import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Portal/Login/Login'
import Dashboard from './components/Portal/Dashboard/Dashboard';
import PrivateRoutes from './components/General/PrivateRoutes';


const App = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes/>}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


