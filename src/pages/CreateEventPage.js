import React, { useState } from "react";
import '../styles/AdministrationMainContent.css'
import { Table, Modal, Button } from 'react-bootstrap'
import { CreateEventModal } from "../components/stateless/modals/CreateEventModal";


export const CreateEventPage = () => {



    return (
        <div className="administration-main-content">
            <h1>Eventos</h1>
            <CreateEventModal></CreateEventModal>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )

}