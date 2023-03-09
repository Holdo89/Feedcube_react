import React from 'react';
import {deleteCookie} from '../../Authentication/cookieFunctions';
import { useNavigate } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

export default function Dashboard() {
  
  const navigate = useNavigate();
  function logout(){
    deleteCookie('jwt');
    navigate("/")
  }
  return(
    <>
    <FaBeer />
    <h2>Dashboard</h2>
    <button onClick={logout}>Logout</button>
    </>
  );
}

