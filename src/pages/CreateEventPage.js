import React, { useState, useEffect } from "react";
import '../styles/AdministrationMainContent.css'
import { Table, Modal, Button } from 'react-bootstrap'
import { CreateEventModal } from "../components/stateless/modals/CreateEventModal";
const axios = require('axios');

export const CreateEventPage = () => {

    const [events, setEvents] = useState([{
        id: "1",
        descripcion: "tecno cafe",
        contacto: "recamancito",
        fecha: "12-15-2011",
        h_inicio: "12-15-2011",
        h_fin: "12-15-2011",
        tipo_evento: "Presencial",
        lugar: "P:40",
        url: "asd.com.co",
        estado: "Publicado"
    }])
    const [eventToEdit, setEventToEdit] = useState(null)
    const [showEventModal, setShowEventModal] = useState(false);

    const handleDelete = (event) => {
        const idEmpresa = event.target.id;
        axios.delete("https://ancient-plains-23826.herokuapp.com/emp-empresas/" + idEmpresa, { data: { idEmpresa } })
            .then(console.log("empresa " + idEmpresa + " eliminada"))
    }

    const handleEdit = (event) => {
        const eventToEdit = events.filter(eventDB => eventDB.id == event.target.id);
        setEventToEdit(eventToEdit)
    }

    const handleShow = () => {
        setShowEventModal(true);
        setEventToEdit(undefined)
    }

    let tableBody = () => {
        var body = []
        events.forEach(event => {
            body.push(<tr>
                <td>{event.id}</td>
                <td>{event.descripcion}</td>
                <td>{event.contacto}</td>
                <td>{event.fecha}</td>
                <td>{event.h_inicio}</td>
                <td>{event.h_fin}</td>
                <td>{event.tipo_evento}</td>
                <td>{event.lugar}</td>
                <td>{event.url}</td>
                <td>{event.estado}</td>
                <td><Button onClick={handleEdit} id={event.id}><i className="fa fa-pencil" aria-hidden="true" id={event.id}></i></Button></td>
                <td><Button onClick={handleDelete} id={event.id}><i className="fa fa-times" aria-hidden="true" id={event.id}></i></Button></td>
            </tr>)
        })
        return body;
    }


    return (
        <div className="administration-main-content">
            <h1>Eventos</h1>
            <Button variant="primary" onClick={handleShow}>
                Crear Empresa
            </Button>
            <CreateEventModal eventToEdit={eventToEdit} _show={showEventModal}></CreateEventModal>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Empresa/Institución</th>
                        <th>Speaker</th>
                        <th>fecha</th>
                        <th>hora inicio</th>
                        <th>hora fin</th>
                        <th>tipo de evento</th>
                        <th>Lugar</th>
                        <th>url</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {tableBody()}
                </tbody>
            </Table>
        </div>
    )

}