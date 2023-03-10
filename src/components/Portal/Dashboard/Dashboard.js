import React from "react";
import CommonSidebar from "../Sidebar/Sidebar";
import { logout } from "../../Authentication/logout";
import "./dashboard.css";
import "bootstrap/dist/css/bootstrap.css";
import { FaBeer, FaLock } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="page">
      <CommonSidebar />
      <br />
      <h4>Dashboard</h4>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="bg-white"></div>
          </div>
          <div className="col ">
            <div className="bg-white"></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="bg-white"></div>
          </div>
          <div className="col">
            <div className="bg-white"></div>
          </div>
          <div className="col">
            <div className="bg-white"></div>
          </div>
          <div className="col">
            <div className="bg-white"></div>
          </div>
        </div>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
