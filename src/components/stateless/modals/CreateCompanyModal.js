import React, { useState } from "react";
import { Table, Modal, Button } from 'react-bootstrap'



export const CompanyModal = () => {

    const handleAddCompany = () => {

    }

    const [showPeopleModal, changeShowPeopleModal] = useState(false);
    const handleClose = () => changeShowPeopleModal(false);
    const handleShow = () => changeShowPeopleModal(true);
    return <>
        <Button variant="primary" onClick={handleShow}>
            Crear Empresa
        </Button>
        <Modal show={showPeopleModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Persona</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="on" className="administration-form">
                    <input type="text" name="nit" placeholder="NIT" required></input>
                    <input type="text" name="company" placeholder="nombre" required></input>
                    <input type="text" name="social-reason" placeholder="Razón social" required></input>
                    <input type="text" name="country" list="countries" placeholder="País" required></input>
                    <input type="text" name="departament" placeholder="Departamento" required></input>
                    <input type="text" name="Municipality" list="municipalities" placeholder="Municipio" required></input>
                    <input type="text" name="Address" placeholder="Dirección" required></input>
                    <input type="text" name="telephone" placeholder="Telefono" required></input>
                    <input type="text" placeholder="Estado" list="status" required></input>
                    <datalist id="countries" name="country">
                        <option value="Colombia"></option>
                        <option value="otro"></option>
                    </datalist>
                    <datalist id="municipalities" name="municipality">
                        <option value="Antioquia"></option>
                        <option value="otro"></option>
                    </datalist>
                    <datalist id="status" name="status-list">
                        <option value="Activo"></option>
                        <option value="Inactivo"></option>
                    </datalist>


                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button onClick={handleAddCompany}>Agregar</Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
