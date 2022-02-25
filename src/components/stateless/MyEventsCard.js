import React, { useEffect } from 'react';
import { Link } from '@reach/router'
import '../../styles/MyEventsCard.css'
import { Button } from 'react-bootstrap'
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../state/FirebaseConfig'

export const MyEventsCard = (datosEntrada) => {
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


        <div className="myevents-card">
            <div className='myevents-card-grid'>
                <img id="myevents-card-img" alt="imagen del evento" src="https://thumbs.dreamstime.com/z/calendario-de-eventos-concepto-para-el-evento-organizador-personal-vector-plano-116902701.jpg" />
                <div className='grid-center'>
                    <h4 className='title'>{eventTitle}</h4>
                    <Link to={`/eventPage/${eventImg}/${eventTitle}/${eventDescription}/${speaker}/${ubication}/${date}`}>
                        <Button className='button'>Ver Detalle</Button>
                    </Link>
                </div>

            </div>
        </div>

    )
}