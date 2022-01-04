import React from "react";
import '../styles/AdministrationMainContent.css'

export const CreateInstitutionPage = () => {

    const handleAddInstitution = () => {
        
    }

    return (
        <div className="administration-main-content">
            <h1>Crear Institucion</h1>
            <form autoComplete="on" className="administration-form">
                <input type="text" name="type-document" placeholder="Tipo documento"></input>
                <input type="text" name="document" placeholder="numero documento"></input>
                <input type="text" name="first-last-name" placeholder="Primer apellido"></input>
                <input type="text" name="second-last-name" placeholder="Segundo apellido"></input>
                <input type="text" name="first-name" placeholder="Primer nombre"></input>
                <input type="text" name="second-name" placeholder="Segundo nombre"></input>
                <input type="email" name="email" placeholder="Email"></input>
                <input type="text" name="cellphone" placeholder="cellphone"></input>
                <input type="text" list="institutions" placeholder="Instituciones"></input>
                <datalist id="institutions" name="institution">
                    <option value="Politecnico Jaime Isaza Cadavid"></option>
                    <option value="other"></option>
                </datalist>
            </form>
            <button onClick={handleAddInstitution}>Agregar</button>
            <table>

            </table>
        </div>
    )

}