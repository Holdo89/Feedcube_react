import { useProSidebar } from 'react-pro-sidebar';
import React from 'react'
import "./style.css";
import Feedcubelogo from "../../../assets/brand/FEEDCUBE_logo_white.png";
import { HiBars3BottomLeft } from 'react-icons/hi2';


const Navbar = () => {
    const { toggleSidebar, collapsed, collapseSidebar, broken } = useProSidebar();
    if(broken === true && collapsed===true)
    {
        collapseSidebar()
    }
  return (
    <div className="navbar">
    <img
          src={Feedcubelogo}
          alt="logo"
          height="45px"
          style={{ marginLeft: "15px" }}
        />
        <div style={{float:"right", marginRight:"15px"}} onClick={() => (toggleSidebar())}><HiBars3BottomLeft fontSize={"30px"}/></div>
    </div>
    )
}

export default Navbar
