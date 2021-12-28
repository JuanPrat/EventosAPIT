import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import '../../styles/Navbar.css'
import { SideMenu } from '../stateless/SideMenu'

const Navbar = () => {

  const [sidebarClass, setSidebarClass] = useState("fresh");
  
  const handleBurguerClick = () => {
    sidebarClass == "fresh" ? setSidebarClass("clicked") : setSidebarClass("fresh");
  }

  return (
    <div>
    <nav>
      <Link to="/">
        <img id="logo" src="https://data.tooliphone.net/iskin/themes/16090/10681/preview-256.png" />
      </Link>
      <section className='profile-menu'>
        <img id="perfil" src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png" />
        <div id="hamburguer-button" onClick={()=> handleBurguerClick()}>
          <i className='fa fa-bars'></i>
        </div>
      </section>
      
    </nav>
    <SideMenu sidebarClass={sidebarClass}></SideMenu>
    </div>
  )
}

export default Navbar;