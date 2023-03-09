import React from 'react';
import {deleteCookie} from '../../Authentication/cookieFunctions';
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  
  const navigate = useNavigate();
  function logout(){
    deleteCookie('jwt');
    navigate("/")
  }
  return(
    <>
    <h2>Dashboard</h2>
    <button onClick={logout}>Logout</button>
    </>
  );
}

