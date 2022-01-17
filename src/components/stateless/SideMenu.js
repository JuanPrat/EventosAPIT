import React, { useEffect } from 'react';
import { Link } from '@reach/router'
import '../../styles/SidebarMenu.css'
import { Button } from 'react-bootstrap'

export const SideMenu = (data) => {

    var firebase = require('firebase');
    var firebaseui = require('firebaseui');

    var ui = new firebaseui.auth.AuthUI(firebase.auth());

    useEffect(() => {
        const element = document.getElementById("sidebar-container")
        const actualClass = element.className;
        actualClass.includes('container-hidden') ? element.className = "container-sidebar-nav" : element.className = "container-hidden"
    })

    const handleCloseSideMenu = () => {
        const element = document.getElementById("sidebar-container")
        const actualClass = element.className;
        actualClass.includes('container-hidden') ? element.className = "container-sidebar-nav" : element.className = "container-hidden"
    }

    return (
        <div id="sidebar-container" className='container-sidebar-nav'>
            <Link to='/administration/'>
                <Button variant="sucess" className="button-nav" onClick={handleCloseSideMenu}>Administrar</Button>
            </Link>
            <Link to="/">
                <Button variant="sucess" className="button-nav">Mis Eventos</Button>
            </Link>
            <Link to="/">
                <Button variant="sucess" className="button-nav">Inscripciones</Button>
            </Link>
            <Link to="/">
                <Button variant="sucess" className="button-nav">Iniciar Sesión</Button>
            </Link>
            <Link to="/">
                <Button variant="sucess" className="button-nav">Perfil</Button>
            </Link>
            <Link to="/">
                <Button variant="sucess" className="button-nav">Cerrar Sesión</Button>
            </Link>
        </div>
    )
}