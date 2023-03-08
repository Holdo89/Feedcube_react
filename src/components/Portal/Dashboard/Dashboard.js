import React from 'react';
import {deleteCookie} from '../../Authentication/cookieFunctions';

export default function Dashboard() {
  return(
    <>
    <h2>Dashboard</h2>
    <button onClick={logout}>Logout</button>
    </>
  );
}


function logout(){
  console.log("logout")
  deleteCookie('jwt');
  window.location.href = '/';
}
