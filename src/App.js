import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Portal/Login/Login'
import Dashboard from './components/Portal/Dashboard/Dashboard';
import UserContextProvider from './components/Contexts/UserContext';

const App = () => {

  const [Permission, setPermission] = React.useState("0");
  const value = { Permission, setPermission };
  return (
      <UserContextProvider Permission = {value}>
            <Login />
            <Dashboard />
      </UserContextProvider>
  );
}

export default App;


