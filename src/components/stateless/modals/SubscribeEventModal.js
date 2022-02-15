import React, { useEffect, useState } from "react";
import { Table, Modal, Button } from 'react-bootstrap'
import { CompanyModal } from './CreateCompanyModal'
import '../../../App.css'
const axios = require('axios');

export const SubscribeEventModal = (props) => {

    
    const [datos, setDatos] = useState([{
        typeDocument: "CC",
        document: "123124324",
        firstLastName: "García",
        secondLastName: "Sosa",
        firstName: "Juan",
        secondName: "José",
        email: "juanprat96@gmail.com",
        cellphone: "3123123342",
        institutions: "Sofka Technologies",
        typePerson: "Ponente"
    }])
    const [showClicked, setShowClicked] = useState(false);
    const [showSubscribeModal, setShowSubscribeModal] = useState(false);
    const handleClose = () => {
        setShowSubscribeModal(false);
    }

    useEffect(() => {
        if (showClicked) {
            setShowSubscribeModal(true)
        }
        setShowClicked(true);
    }, [props._show])



    const handleSubscribe = () => {
        setShowSubscribeModal(false)
    }

    return (
        <>
            <Modal show={showSubscribeModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Formulario de Inscripción</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form autoComplete="on" className="administration-form">
                        <input placeholder="tipo identificacion"></input>
                        <input placeholder="primer nombre"></input>
                        <input placeholder="segundo nombre"></input>
                        <input placeholder="primer apellido"></input>
                        <input placeholder="segundo apellido"></input>
                        <input placeholder="email"></input>
                        <input placeholder="celular"></input>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleSubscribe}>Enviar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}