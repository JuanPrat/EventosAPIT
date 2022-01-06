import React, { useState } from "react";
import '../styles/AdministrationMainContent.css'
import { Modal, Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap'
import { CreatePersonModal } from "../components/stateless/modals/CreatePersonModal";

export const CreatePersonPage = () => {


    return (


        <div className="administration-main-content">
            <h1>Personas</h1>
            <CreatePersonModal></CreatePersonModal>
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