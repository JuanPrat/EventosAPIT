import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from 'react-bootstrap'
import { CompanyModal } from './CreateCompanyModal'
import '../../../App.css'
const axios = require('axios');

export const CreatePersonModal = (props) => {

    const [showPeopleModal, changeShowPeopleModal] = useState(false);
    const [showCompanyModal, changeShowCompanyModal] = useState(false);
    const [showClicked, setShowClicked] = useState(false);
    const [companies, setCompanies] = useState([])
    const handleClose = () => {

        changeShowPeopleModal(false);
    }


    const handleOtherClick = (event) => {
        debugger
        if (event.target.value === 'Otro') {
            debugger
            if (event.target.name == 'institutions-input') {
                debugger
                changeShowCompanyModal(true)
            }
        }
    }

    const handleAddPerson = () => {

    }

    useEffect(() => {
        debugger
        axios.get('https://ancient-plains-23826.herokuapp.com/emp-empresas')
            .then((response) => {
                setCompanies(response.data)
            })
        if (showClicked) {
            changeShowPeopleModal(true)
        }
        setShowClicked(true);
    }, [props._show, showCompanyModal])

    return (
        <>

            <CompanyModal _show={showCompanyModal}></CompanyModal>
            <Modal show={showPeopleModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Persona</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form autoComplete="on" className="administration-form">
                        <input type="text" name="type-document" placeholder="Tipo documento" required></input>
                        <input type="text" name="document" placeholder="numero documento" required></input>
                        <input type="text" name="first-last-name" placeholder="Primer apellido" required></input>
                        <input type="text" name="second-last-name" placeholder="Segundo apellido" required></input>
                        <input type="text" name="first-name" placeholder="Primer nombre" required></input>
                        <input type="text" name="second-name" placeholder="Segundo nombre" required></input>
                        <input type="email" name="email" placeholder="Email" required></input>
                        <input type="text" name="cellphone" placeholder="cellphone" required></input>
                        <input type="text" list="institutions" placeholder="Empresa/Institucion" name="institutions-input" required onChange={event => handleOtherClick(event)}></input>
                        <input type="text" list="type-person" placeholder="Tipo usuario"></input>
                        <datalist id="institutions" name="institution">
                            <option value="Politecnico Jaime Isaza Cadavid"></option>
                            <option value="Sofka Technologies"></option>
                            <option value="Otro"></option>
                        </datalist>
                        <datalist id="type-person" name="type-person">
                            <option value="Estudiante"></option>
                            <option value="Ponente"></option>
                            <option value="Egresado"></option>
                            <option value="Docente"></option>
                            <option value="Administrador"></option>
                            <option value="Otro" ></option>
                        </datalist>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddPerson}>Agregar</Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}