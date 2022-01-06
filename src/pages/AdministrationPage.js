import React, { useState } from "react";
import '../styles/AdministrationPage.css'
import '../styles/SidebarMenu.css'
import { CreatePersonPage } from "./CreatePersonsPage";
import { CreateEventPage } from "./CreateEventPage";
import { CreateCompanyPage } from "./CreateCompanyPage";
import { CreateInstitutionPage } from "./CreateInstitutionPage";
import { EditPublicityPage } from "./EditPublicityPage";
import { AdministrationLandPage } from "./AdministrationLandPage";


export const AdministrationPage = () => {

    const [page, changePage] = useState('');
    
    const [showEventModal, changeShowEventModal] = useState(false);


    const [showPublicityModal, changeShowPublicityModal] = useState(false);

    const handleAdministrationButton = (event) => {
        changePage(event.target.id)
    }

    const renderSwitchPage = () => {
        switch (page) {
            case 'register-people':
                return <CreatePersonPage></CreatePersonPage>;
            case 'register-event':
                return <CreateEventPage></CreateEventPage>;
            case 'register-company':
                return <CreateCompanyPage></CreateCompanyPage>
            case 'edit-publicity':
                return <EditPublicityPage></EditPublicityPage>
            default:
                return <AdministrationLandPage></AdministrationLandPage>
        }
    }

    return (
        <div className="administration-container">
            <div className="side-menu">
                <div id="sidebar-container" className='container'>
                    <button onClick={(event) => handleAdministrationButton(event)} id="register-people">Registrar Personas</button>
                    <button onClick={(event) => handleAdministrationButton(event)} id="register-event">Crear Evento</button>
                    <button onClick={(event) => handleAdministrationButton(event)} id="register-company">Registrar Empresa</button>
                    <button onClick={(event) => handleAdministrationButton(event)} id="edit-publicity">Editar Publicidad</button>
                </div>
            </div>
            <div className="main-content">
                {renderSwitchPage()}
            </div>
            
        </div>
    )
}