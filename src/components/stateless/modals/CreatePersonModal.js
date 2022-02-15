import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from 'react-bootstrap'
import { CompanyModal } from './CreateCompanyModal'
import '../../../App.css'
const axios = require('axios');

export const CreatePersonModal = (props) => {

    const [showPeopleModal, changeShowPeopleModal] = useState(false);
    const [showCompanyModal, changeShowCompanyModal] = useState(false);
    const [showClicked, setShowClicked] = useState(false);
    const [textoBoton, setTextoBoton] = useState("");
    const [datos, setDatos] = useState([{
        typeDocument: "",
        document: "",
        firstLastName: "",
        secondLastName: "",
        firstName: "",
        secondName: "",
        email: "",
        cellphone: "",
        institutions: "",
        typePerson: ""
    }])
    const handleClose = () => {
        setDatos({})
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
        if (showClicked) {
            changeShowPeopleModal(true)
            
            if (props.personToEdit !== undefined) {
                setDatos({
                    "typeDocument": props.personToEdit.typeDocument,
                    "document": props.personToEdit.document,
                    "firstLastName": props.personToEdit.firstLastName,
                    "secondLastName": props.personToEdit.secondLastName,
                    "firstName": props.personToEdit.firstName,
                    "secondName": props.personToEdit.secondName,
                    "email": props.personToEdit.email,
                    "cellphone": props.personToEdit.cellphone,
                    "institutions": props.personToEdit.institutions,
                    "typePerson": props.personToEdit.typePerson
                })
                setTextoBoton("Editar")
            }
            else {
                setDatos({})
                setTextoBoton("Crear")
            }
        }
        setShowClicked(true)
    }, [props._show, props.personToEdit])

    return (
        <>
            <CompanyModal _show={showCompanyModal}></CompanyModal>
            <Modal show={showPeopleModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{textoBoton} Persona</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form autoComplete="on" className="administration-form">
                        <input type="text" name="typeDocument" placeholder="Tipo documento" required value={datos.typeDocument}></input>
                        <input type="text" name="document" placeholder="numero documento" required value={datos.document}></input>
                        <input type="text" name="firstLastName" placeholder="Primer apellido" required value={datos.firstLastName}></input>
                        <input type="text" name="secondLastName" placeholder="Segundo apellido" required value={datos.secondLastName}></input>
                        <input type="text" name="firstName" placeholder="Primer nombre" required value={datos.firstName}></input>
                        <input type="text" name="secondName" placeholder="Segundo nombre" required value={datos.secondName}></input>
                        <input type="email" name="email" placeholder="Email" required value={datos.email}></input>
                        <input type="text" name="cellphone" placeholder="cellphone" required value={datos.cellphone}></input>
                        <input type="text" list="institutions" placeholder="Empresa/Institucion" name="institutions-input" value={datos.institutions} required onChange={event => handleOtherClick(event)}></input>
                        <input type="text" list="typePerson" placeholder="Tipo usuario" value={datos.typePerson}></input>
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
                    <Button variant="primary" onClick={handleAddPerson}>{textoBoton}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}