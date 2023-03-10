import React from "react";
import CommonSidebar from "../Sidebar/Sidebar";
import "./courses.css";

export default function Courses() {
  return (
    <div className="page">
      <CommonSidebar />
      <br />
      <h4>Kursliste</h4>
      <div className="container-fluid">
        <div className="bg-white"></div>
      </div>
    </div>
  );
}
