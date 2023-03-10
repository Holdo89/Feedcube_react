import React from 'react';
import { FaBeer } from 'react-icons/fa';
import CommonSidebar from '../Sidebar/Sidebar';
import {logout} from "../../Authentication/logout"

export default function Dashboard() {
  
  return(
    <>
    <CommonSidebar/>
    <FaBeer />
    <h2>Dashboard</h2>
    <button onClick={logout}>Logout</button>
    </>
  );
}

