import React, { useEffect } from 'react';
import '../../styles/SidebarMenu.css'

export const SideMenu = (data) => {

    useEffect(() => {
        const element = document.getElementById("sidebar-container")
        const actualClass = element.className;
        actualClass.includes('container-hidden') ? element.className = "container" : element.className = "container-hidden"
    })

    return (
        <div id="sidebar-container" className='container'>
                <button>Administrar</button>
                <button>Mis Eventos</button>
                <button>Inscripciones</button>
                <button>Perfil</button>
                <button>Cerrar Sesión</button>
        </div>
    )
}