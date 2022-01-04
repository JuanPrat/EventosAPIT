import React from "react";
import '../styles/AdministrationMainContent.css'

export const CreatePersonPage = () => {

    const handleAddPerson = () => {
        
    }

    return (
        <div className="administration-main-content">
            <h1>Crear Persona</h1>
            <form autoComplete="on" className="administration-form">
                <input type="text" name="type-document" placeholder="Tipo documento" required></input>
                <input type="text" name="document" placeholder="numero documento" required></input>
                <input type="text" name="first-last-name" placeholder="Primer apellido" required></input>
                <input type="text" name="second-last-name" placeholder="Segundo apellido" required></input>
                <input type="text" name="first-name" placeholder="Primer nombre" required></input>
                <input type="text" name="second-name" placeholder="Segundo nombre" required></input>
                <input type="email" name="email" placeholder="Email" required></input>
                <input type="text" name="cellphone" placeholder="cellphone" required></input>
                <input type="text" list="institutions" placeholder="Instituciones" required></input>
                <input type="text" list="type-person" placeholder="Tipo usuario"></input>
                <datalist id="institutions" name="institution">
                    <option value="Politecnico Jaime Isaza Cadavid"></option>
                    <option value="Otro"></option>
                </datalist>
                <datalist id="type-person" name="type-person">
                    <option value="Estudiante"></option>
                    <option value="Ponente"></option>
                    <option value="Egresado"></option>
                    <option value="Docente"></option>
                    <option value="Administrador"></option>
                    <option value="Otro"></option>
                </datalist>
            </form>
            <button onClick={handleAddPerson}>Agregar</button>
            <table>

            </table>
        </div>
    )

}