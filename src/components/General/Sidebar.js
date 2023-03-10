import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import { useState } from 'react';
import Navbar from './Navbar';
import Feedcubelogo from "../../assets/brand/FEEDCUBE_logo_white.png";
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaBeer, FaLock } from 'react-icons/fa';




function CommonSidebar() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [arrow, setArrow] = useState(<FaAngleDoubleLeft/>);

  function showSidebar(){
    collapseSidebar();
    if(collapsed===false)
    {
      setArrow(<FaAngleDoubleRight />)
    }
    else
    {
      setArrow(<FaAngleDoubleLeft />)
    }
  }

  return (
    <>
    <Navbar />
      <Sidebar className = 'sidebar' breakPoint="xs" backgroundColor='grey'>
      <img
          src={Feedcubelogo}
          alt="logo"
          height="50px"
          style={{ margin: "17px" }}
        />
        <Menu color="white">
        <MenuItem component={<Link to="/dashboard" />} icon={<FaLock />}> Dashboard</MenuItem>
        <MenuItem component={<Link to="/courses" />} icon={<FaBeer />}> Kurse</MenuItem>
          <MenuItem> Calendar</MenuItem>
          <MenuItem> E-commerce</MenuItem>
        </Menu>
        <div className='sidebarburger' onClick={() => (showSidebar())}>{arrow}</div>
      </Sidebar>
    </>
  );
}

export default CommonSidebar