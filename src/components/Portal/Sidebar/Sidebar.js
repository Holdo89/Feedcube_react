import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Feedcubelogo from "../../../assets/brand/FEEDCUBE_logo_white.png";
import {FaBeer, FaLock } from 'react-icons/fa';
import {MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from 'react-icons/md';




function CommonSidebar() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [arrow, setArrow] = useState(<MdKeyboardDoubleArrowLeft/>);

  function showSidebar(){
    collapseSidebar();
    if(collapsed===false)
    {
      setArrow(<MdKeyboardDoubleArrowRight />)
    }
    else
    {
      setArrow(<MdKeyboardDoubleArrowLeft />)
    }
  }

  return (
    <>
    <Navbar />
      <Sidebar className = 'sidebar' breakPoint="xs" backgroundColor='#404c64' style={{border:"none"}}>
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