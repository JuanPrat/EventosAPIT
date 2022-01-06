import React, { useState } from "react";
import { Table, Modal, Button } from 'react-bootstrap'

export const CreatePersonModal = () => {

    const [showPeopleModal, changeShowPeopleModal] = useState(false);
    const handleClose = () => changeShowPeopleModal(false);
    const handleShow = () => changeShowPeopleModal(true);

    const handleOtherClick = (event) => {
        if (event.target.vale === 'Otro') {

        }
    }

    const handleAddPerson = () => {

    }

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Crear Persona
        </Button>
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
                        <input type="text" list="institutions" placeholder="Instituciones" required onChange={event => handleOtherClick(event)}></input>
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