import React, { useState, useEffect } from "react";
import '../styles/AdministrationMainContent.css'
import { Table, Modal, Button } from 'react-bootstrap'
import { CompanyModal } from "../components/stateless/modals/CreateCompanyModal";
const axios = require('axios');

export const CreateCompanyPage = () => {

  const [companies, setCompanies] = useState([])
  const [showCompanyModal, changeShowCompanyModal] = useState(false);

  const handleShow = () => changeShowCompanyModal(true);
  

  const handleAddCompany = () => {

  }

  let tableBody = () => {
    var body = []
    companies.forEach(company => {
      body.push(<tr>
        <td>{company.id}</td>
        <td>{company.nit}</td>
        <td>{company.razon_social}</td>
        <td>{company.direccion}</td>
        <td>{company.telefono}</td>
      </tr>)
    })
    return body;
  }

  useEffect(() => {
    axios.get('https://ancient-plains-23826.herokuapp.com/emp-empresas')
      .then((response) => {
        setCompanies(response.data)
      })
      
  })

  return (
    <div className="administration-main-content">
      <h1>Empresas</h1>
      <Button variant="primary" onClick={handleShow}>
            Crear Empresa
        </Button>
      <CompanyModal _show={showCompanyModal}></CompanyModal>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>NIT</th>
            <th>Razón Social</th>
            <th>Direccion</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {tableBody()}
        </tbody>
      </Table>

    </div>
  )

}