import React from "react";
import '../styles/AdministrationMainContent.css'

export const CreateEventPage = () => {

    const handleAddEvent = () => {
        
    }

    return (
        <div className="administration-main-content">
            <h1>Crear Evento</h1>
            <form autoComplete="on" className="administration-form">
                <input type="text" name="company-name" placeholder="Nombre" list="companies" required></input>
                <input type="text" name="speaker" placeholder="Ponente" required></input>
                <textarea type="text" name="description" placeholder="Descripcion" required></textarea>
                <input type="date" name="fecha" placeholder="Fecha" required></input>
                <input type="time" name="hour-begin" placeholder="Hora inicio" required></input>
                <input type="time" name="hour-finish" placeholder="Hora fin" required></input>
                <input type="text" name="type-event" placeholder="Tipo Evento" list="type-events" required></input>
                <input type="text" name="place" placeholder="Lugar" required></input>
                <input type="text" name="url" placeholder="Url"></input>
                <input type="file" name="image" placeholder="Imagen"></input>
                <input type="text" name="state" placeholder="Estado" list="state"></input>
                
                <datalist id="companies" name="company">
                    <option value="Sofka Technologies"></option>
                    <option value="Otra"></option>
                </datalist>
                <datalist id="type-events" name="company">
                    <option value="Presencial"></option>
                    <option value="Virtual"></option>
                </datalist>
                <datalist id="state" name="state">
                    <option value="Borrador"></option>
                    <option value="Publicado"></option>
                    <option value="Finalizado"></option>
                </datalist>
            </form>
            <button onClick={handleAddEvent}>Agregar</button>
            <table>

            </table>
        </div>
    )

}