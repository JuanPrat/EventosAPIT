import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import '../styles/ProfilePage.css'

export const ProfilePage = (props) => {

    const [editar, setEditar] = useState(true);

    const handleEditar = () =>{
        setEditar(false)
        document.getElementById("profile-button-guardar").style.display = "block"
        document.getElementById("profile-button-editar").style.display = "none"
    }

    const handleGuardar = () =>{
        setEditar(true)
        document.getElementById("profile-button-editar").style.display = "block"
        document.getElementById("profile-button-guardar").style.display = "none"
    }

    return (
        <div className="profile-container">
            <h2>Mi Perfil</h2>
            <form className="form-profile" >
                <div className="flex-profile-container">
                    <img src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png" />
                    <label><b>Nombre</b></label>
                    <input value="nombre" disabled={editar}></input>
                    <label><b>Segundo Nombre</b></label>
                    <input value="segundo nombre" disabled={editar}></input>
                    <label><b>Apellido</b></label>
                    <input value="primer apellido" disabled={editar}></input>
                    <label><b>Segundo Apellido</b></label>
                    <input value="segundo apellido" disabled={editar}></input>
                    <label><b>Email</b></label>
                    <input value="email" disabled={editar}></input>
                    <label><b>Celular</b></label>
                    <input value="celular" disabled={editar}></input>
                    <label><b>Empresa/Institución</b></label>
                    <input value="empresa/institucion" disabled={editar}></input>
                    <Button id="profile-button-editar" onClick={handleEditar}>Editar</Button>
                    <Button id="profile-button-guardar" onClick={handleGuardar}>Guardar</Button>
                </div>
            </form>
        </div>
    )

}