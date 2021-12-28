import React, { useEffect } from 'react';
import {Link} from '@reach/router'
import '../../styles/card-style.css'

export const Card = (datosEntrada) => {
    const { eventTitle, eventDescription, eventImg, speaker, ubication, date } = datosEntrada;
    return (
        <div className="card">
            <div>
                <p>{eventTitle}</p>
                <img src={eventImg} alt="imagen del evento" />
                <p>{eventDescription}</p>
            </div>
            <div>
                <Link to={`/eventPage/${eventImg}/${eventTitle}/${eventDescription}/${speaker}/${ubication}/${date}`}>
                    <button>Ver Detalle</button>
                </Link>
            </div>
        </div>
    )
}