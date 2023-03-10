import { useProSidebar } from 'react-pro-sidebar';
import React from 'react'
import Hamburger from 'hamburger-react'
import "./style.css";
import Feedcubelogo from "../../assets/brand/FEEDCUBE_logo_white.png";


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
        <div style={{float:"right"}} onClick={() => (toggleSidebar())}><Hamburger toggled={false} size={20} /></div>
    </div>
    )
}

export default Navbar
