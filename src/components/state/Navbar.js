import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router'
import '../../styles/Navbar.css'
import { SideMenu } from '../stateless/SideMenu'
import { app } from './FirebaseConfig'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Navbar = () => {

  const [sidebarClass, setSidebarClass] = useState("fresh");

  const storage = getStorage(app)
    const imgRef = ref(storage, 'logo.png')

    getDownloadURL(imgRef)
        .then((url) => {
            debugger
            const img = document.getElementById('logo');
            img.setAttribute('src', url);
        })
        .catch((error) => {
            // Handle any errors
        });
  
  const handleBurguerClick = () => {
    sidebarClass == "fresh" ? setSidebarClass("clicked") : setSidebarClass("fresh");
  }

  return (
    <div>
    <nav>
      <Link to="/">
        <img id="logo" />
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