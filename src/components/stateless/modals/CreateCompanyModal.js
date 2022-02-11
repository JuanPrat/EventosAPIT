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
    const [textoBoton, setTextoBoton] = useState("");
    const handleClose = () => changeShowCompanyModal(false);


    const obtenerInformacion = (e) => {
        guardarDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        debugger
        if (showClicked) {
            changeShowCompanyModal(true)
            debugger
            if(props.companyToEdit != undefined){
                guardarDatos({
                    nit: props.companyToEdit[0].nit,
                    social_reason: props.companyToEdit[0].razon_social,
                    country: props.companyToEdit[0].country,
                    departament: props.companyToEdit[0].departament,
                    municipality: props.companyToEdit[0].id_municipio,
                    address: props.companyToEdit[0].direccion,
                    telephone: props.companyToEdit[0].telefono,
                    status: props.companyToEdit[0].estado
                })
                setTextoBoton("Editar")
            }
            else {
                setTextoBoton("Crear")
            }
        }
        setShowClicked(true)
    }, [props._show, props.companyToEdit])

    return <>
        <Modal show={showCompanyModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Crear Empresa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form autoComplete="on" className="administration-form">
                    <input type="text" id="nit" name="nit" placeholder="NIT" required onChange={obtenerInformacion} value={datos.nit}></input>
                    <input type="text" id="social_reason" name="social_reason" placeholder="Razón social" required onChange={obtenerInformacion} value={datos.social_reason}></input>
                    <input type="text" id="country" name="country" list="countries" placeholder="País" required onChange={obtenerInformacion} value={datos.country}></input>
                    <input type="text" id="departament" name="departament" placeholder="Departamento" required onChange={obtenerInformacion} value={datos.departament}></input>
                    <input type="text" id="municipality" name="municipality" list="municipalities" placeholder="Municipio" required onChange={obtenerInformacion} value={datos.municipality}></input>
                    <input type="text" id="address" name="address" placeholder="Dirección" required onChange={obtenerInformacion} value={datos.address}></input>
                    <input type="text" id="telephone" name="telephone" placeholder="Telefono" required onChange={obtenerInformacion} value={datos.telephone}></input>
                    <input type="text" id="status" placeholder="Estado" list="status" name="status" required onChange={obtenerInformacion} value={datos.status}></input>
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
                    {textoBoton}
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}
