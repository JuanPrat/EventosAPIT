import React, { useEffect } from 'react';
import { Link } from '@reach/router'
import '../../styles/card-style.css'
import { Button } from 'react-bootstrap'
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../state/FirebaseConfig'

export const Card = (datosEntrada) => {
    const { eventTitle, eventDescription, eventImg, speaker, ubication, date } = datosEntrada;
    var imgRef = ref(storage, 'imagenes-eventos/' + eventImg + '.jpg')
        
    getDownloadURL(imgRef)
    .then((url) => {
        debugger
        const img = document.getElementById('card-img');
        debugger
        img.setAttribute('src', url);
    })
    .catch((error) => {
        // Handle any errors
    });

    return (
        <div className="card">
            <div>
                <h4 className='title'>{eventTitle}</h4>
                <img id="card-img" alt="imagen del evento" />
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