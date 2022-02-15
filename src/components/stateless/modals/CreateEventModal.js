import React, { useState, useEffect } from "react";
import { Table, Modal, Button } from 'react-bootstrap'
const axios = require('axios');

export const CreateEventModal = (props) => {

    const [datos, guardarDatos] = useState([{
        eventName: "eventName",
        company_name: "companyName",
        speaker: "speaker",
        description: "description",
        fecha: "fecha",
        hourBegin: "hourBegin",
        hourFinish: "hourFinish",
        typeEvent: "typeEvent",
        place: "place",
        url: "url",
        image: "image",
        state: "state"
    }]);

    const [showClicked, setShowClicked] = useState(false);
    const [showEventModal, changeShowEventModal] = useState(false);
    const [textoBoton, setTextoBoton] = useState("");
    const handleClose = () => {
        changeShowEventModal(false);
        guardarDatos({})
    }
    const handleShow = () => changeShowEventModal(true);

    const handleAddEvent = () => {
        debugger
        const event = {
            eventName: datos.eventName,
            speaker: datos.speaker,
            companyName: datos.companyName,
            description: datos.description,
            fecha: datos.fecha,
            h_inicio: datos.hourBegin,
            h_fin: datos.hourFinish,
            type_event: datos.typeEvent,
            place: datos.place,
            url: datos.url,
            image: datos.image,
            state: datos.state,
        }
        axios.post('http://localhost:3001/env-eventos', event);
        handleClose()
    }

    const obtenerInformacion = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        debugger
        if (showClicked) {
            changeShowEventModal(true)
            if (props.eventToEdit != undefined) {
                debugger
                guardarDatos({
                    eventName: props.eventToEdit[0].name,
                    speaker: props.eventToEdit[0].contacto,
                    companyName: props.eventToEdit[0].companyName,
                    description: props.eventToEdit[0].descripcion,
                    fecha: props.eventToEdit[0].fecha,
                    hourBegin: props.eventToEdit[0].h_inicio,
                    hourFinish: props.eventToEdit[0].h_fin,
                    typeEvent: props.eventToEdit[0].tipo_evento,
                    place: props.eventToEdit[0].lugar,
                    url: props.eventToEdit[0].url,
                    image: props.eventToEdit[0].image,
                    state: props.eventToEdit[0].estado,
                })
                setTextoBoton("Editar")
            }
            else {
                setTextoBoton("Crear")
            }
        }
        setShowClicked(true)
    }, [props._show, props.eventToEdit])
    return (
        <>
            <Modal show={showEventModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{textoBoton} Evento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form autoComplete="on" className="administration-form">
                    <input type="text" name="eventName" placeholder="NombreEvento" required onChange={obtenerInformacion} value={datos.eventName}></input>
                        <input type="text" name="companyName" placeholder="Empresa/Institución" list="companies" required onChange={obtenerInformacion} value={datos.companyName} ></input>
                        <input type="text" name="speaker" placeholder="Ponente" required onChange={obtenerInformacion} value={datos.speaker}></input>
                        <textarea type="text" name="description" placeholder="Descripcion" required onChange={obtenerInformacion} value={datos.description}></textarea>
                        <input type="date" name="fecha" placeholder="Fecha" required onChange={obtenerInformacion} value={datos.fecha}></input>
                        <input type="time" name="hourBegin" placeholder="Hora inicio" required onChange={obtenerInformacion} value={datos.hourBegin}></input>
                        <input type="time" name="hourFinish" placeholder="Hora fin" required onChange={obtenerInformacion} value={datos.hourFinish}></input>
                        <input type="text" name="typeEvent" placeholder="Tipo Evento" list="type-events" required onChange={obtenerInformacion} value={datos.typeEvent}></input>
                        <input type="text" name="place" placeholder="Lugar" required onChange={obtenerInformacion} value={datos.place}></input>
                        <input type="text" name="url" placeholder="Url" onChange={obtenerInformacion} value={datos.url}></input>
                        <input type="file" name="image" placeholder="Imagen" onChange={obtenerInformacion} value={datos.image}></input>
                        <input type="text" name="state" placeholder="Estado" list="state" onChange={obtenerInformacion} value={datos.state}></input>
                        <br></br>
                        <h3>Cargar Vitacoras</h3>
                        <input type="file" name="vitacoras"></input>
                        <datalist id="companies" name="company">
                            <option value="Sofka Technologies"></option>
                            <option value="Otra"></option>
                        </datalist>
                        <datalist id="type-events" name="company">
                            <option value="Presencial"></option>
                            <option value="Virtual"></option>
                        </datalist>
                        <datalist id="state" name="state">
                            <option value="Borrador"></option>
                            <option value="Publicado"></option>
                            <option value="Finalizado"></option>
                        </datalist>
                        
                    </form>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleAddEvent}>{textoBoton}</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}