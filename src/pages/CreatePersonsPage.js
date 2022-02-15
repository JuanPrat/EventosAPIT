import React, { useState } from "react";
import '../styles/AdministrationMainContent.css'
import { Modal, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { CreatePersonModal } from "../components/stateless/modals/CreatePersonModal";

export const CreatePersonPage = () => {

    const [showModal, setShowModal] = useState(false)
    const [personToEdit, setPersonToEdit] = useState({})

    const handleShow = () => {
        setPersonToEdit(undefined)
        setShowModal(!showModal);
    }

    const handleDelete = (event) => {

    }

    const handleEdit = () => {
        const person = {
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
        }
        debugger
        setPersonToEdit(person)
    }

    return (


        <div className="administration-main-content">
            <h1>Personas</h1>
            <Button variant="primary" onClick={handleShow}>
                Crear Persona
            </Button>
            <CreatePersonModal _show={showModal} personToEdit={personToEdit}></CreatePersonModal>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Doc. identidad</th>
                        <th>Email</th>
                        <th>celular</th>
                        <th>Institucion/Empresa</th>
                        <th>Tipo Usuario</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Juan Jose</td>
                        <td>Garcia Sosa</td>
                        <td>CC12143534</td>
                        <td>juanj_garcia82151@elpoli.edu.co</td>
                        <td>5325356238</td>
                        <td>Politecnico JIC</td>
                        <td>Admin</td>
                        <td><Button onClick={handleEdit}><i className="fa fa-pencil" aria-hidden="true" ></i></Button></td>
                        <td><Button ><i className="fa fa-times" aria-hidden="true"></i></Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Santiago</td>
                        <td>Henao</td>
                        <td>CC43534</td>
                        <td>santiago_henao82151@elpoli.edu.co</td>
                        <td>5325356238</td>
                        <td>Politecnico JIC</td>
                        <td>Admin</td>
                        <td><Button onClick={handleEdit}><i className="fa fa-pencil" aria-hidden="true" ></i></Button></td>
                        <td><Button ><i className="fa fa-times" aria-hidden="true" ></i></Button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nelson</td>
                        <td>Mandela</td>
                        <td>CC3456456534</td>
                        <td>nelson_mandela82151@elpoli.edu.co</td>
                        <td>5325356238</td>
                        <td>Politecnico JIC</td>
                        <td>Admin</td>
                        <td><Button onClick={handleEdit}><i className="fa fa-pencil" aria-hidden="true" ></i></Button></td>
                        <td><Button ><i className="fa fa-times" aria-hidden="true" ></i></Button></td>
                    </tr>

                </tbody>
            </Table>
        </div>
    )

}