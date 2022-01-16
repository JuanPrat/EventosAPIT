import React, { useEffect } from 'react';
import {Link} from '@reach/router'
import '../../styles/card-style.css'
import { Button } from 'react-bootstrap'

export const Card = (datosEntrada) => {
    const { eventTitle, eventDescription, eventImg, speaker, ubication, date } = datosEntrada;
    return (
        <div className="card">
            <div>
                <h4 className='title'>{eventTitle}</h4>
                <img src={eventImg} alt="imagen del evento" />
                <p>{eventDescription}</p>
            </div>
            <div>
                <Link to={`/eventPage/${eventImg}/${eventTitle}/${eventDescription}/${speaker}/${ubication}/${date}`}>
                    <Button className='button'>Ver Detalle</Button>
                </Link>
            </div>
        </div>
    )
}