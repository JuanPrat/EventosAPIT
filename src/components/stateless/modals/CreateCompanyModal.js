import React, { useState, useEffect } from "react";
import { Modal, Button } from 'react-bootstrap'
const axios = require('axios');


export const CompanyModal = (props) => {

    const handleAddCompany = () => {
        const company = {
            id: 4,
            nit: datos.nit,
            razon_social: datos.social_reason,
            id_municipio: parseInt(datos.municipality),
            direccion: datos.address,
            telefono: datos.telephone,
            estado: parseInt(datos.status),
            id_operario_creacion: 0,
            id_operario_modificacion: 0,
            f_creacion: "string",
            f_modificacion: "string"
        }
        debugger
        axios.post('https://ancient-plains-23826.herokuapp.com/emp-empresas', company);
        handleClose()
    }

    const [datos, guardarDatos] = useState([{
        nit: '',
        company: '',
        social_reason: '',
        country: '',
        departament: '',
        municipality: '',
        address: '',
        telephone: '',
        status: ''
    }]);
    const [showClicked, setShowClicked] = useState(false);
    const [showCompanyModal, changeShowCompanyModal] = useState(false);
    const handleClose = () => changeShowCompanyModal(false);
    

    const obtenerInformacion = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        if(showClicked){
            debugger
            changeShowCompanyModal(true)
        }
        setShowClicked(true)
    }, [props._show])



    return <>
        
        <Modal show={showCompanyModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Empresa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="on" className="administration-form">
                    <input type="text" name="nit" placeholder="NIT" required onChange={obtenerInformacion}></input>
                    <input type="text" name="social_reason" placeholder="Razón social" required onChange={obtenerInformacion}></input>
                    <input type="text" name="country" list="countries" placeholder="País" required onChange={obtenerInformacion}></input>
                    <input type="text" name="departament" placeholder="Departamento" required onChange={obtenerInformacion}></input>
                    <input type="text" name="municipality" list="municipalities" placeholder="Municipio" required onChange={obtenerInformacion}></input>
                    <input type="text" name="address" placeholder="Dirección" required onChange={obtenerInformacion}></input>
                    <input type="text" name="telephone" placeholder="Telefono" required onChange={obtenerInformacion}></input>
                    <input type="text" placeholder="Estado" list="status" name="status" required onChange={obtenerInformacion}></input>
                    <datalist id="countries" name="country">
                        <option value="Colombia"></option>
                        <option value="otro"></option>
                    </datalist>
                    <datalist id="municipalities" name="municipality">
                        <option value="10">Antioquia</option>
                        <option value="otro"></option>
                    </datalist>
                    <datalist id="status" name="status-list">
                        <option value="1">Activo</option>
                        <option value="0">Inactivo</option>
                    </datalist>
                </form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={handleAddCompany}>
                    Crear
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}