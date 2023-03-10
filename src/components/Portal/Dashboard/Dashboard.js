import React from 'react';
import { FaBeer } from 'react-icons/fa';
import CommonSidebar from '../Sidebar/Sidebar';
import {logout} from "../../Authentication/logout"
import "./dashboard.css"
export default function Dashboard() {
  
  return(
    <div className="dashboard">
    <CommonSidebar/>
    <FaBeer />
    <h2>Dashboard</h2>
    <button onClick={logout}>Logout</button>
    </div>
  );
}

