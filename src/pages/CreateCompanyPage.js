import React from "react";
import '../styles/AdministrationMainContent.css'


export const CreateCompanyPage = () => {

    const handleAddPerson = () => {

    }

    const data = [
        {
            nit: "123",
            nombre: "Sofka",
            razon: "Technologies",
            pais: "Colombia",
            departamento: "Antioquia",
            municipio: "Medellín",
            direccion: "calle 101 # 45a33",
            telefono: "3113805738",
            estado: "Activa"
        }
    ]

    const columns = [
        {
            Header: 'Nit',
            accessor: 'nit'
        },
        {
            Header: 'Nombre',
            accessor: 'nombre'
        },
        {
            Header: 'País',
            accessor: 'pais'
        },
        {
            Header: 'Departamento',
            accessor: 'departamento'
        },
        {
            Header: 'Municipio',
            accessor: 'municipio'
        },
        {
            Header: 'Estado',
            accessor: 'estado'
        },

    ]

    return (
        <div className="administration-main-content">
            <h1>Crear Empresa</h1>
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
            <button onClick={handleAddPerson}>Agregar</button>
            
    
            
        </div>
    )

}