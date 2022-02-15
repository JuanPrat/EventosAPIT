import React, { useState } from 'react';
import '../styles/EventPage.css'
import { Button } from 'react-bootstrap'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from '../components/state/FirebaseConfig'
import { SubscribeEventModal } from '../components/stateless/modals/SubscribeEventModal';

export const EventPage = (data) => {


    const { eventImg, eventTitle, eventDescription, speaker, ubication, date } = data

    const storage = getStorage(app)
    const imgRef = ref(storage, 'imagenes-eventos/' + eventImg + '.jpg')
    const [showModal, changeShowModal] = useState(false);

    const handleSubscribe = ()=> {
        changeShowModal(!showModal)
    }

    getDownloadURL(imgRef)
        .then((url) => {
            debugger
            const img = document.getElementById('event-img-id');
            img.setAttribute('src', url);
        })
        .catch((error) => {
            // Handle any errors
        });

    return (
        <div >
            <SubscribeEventModal _show={showModal}></SubscribeEventModal>
            <div className='event'>
                <section className='event-img'>
                    <img id="event-img-id" ></img>
                </section>
                <section className='event-info'>
                    <div className='main-description'>
                        <h1>{eventTitle}</h1>
                        <h6>{eventDescription}</h6>
                    </div>
                    <div className='speaker'>
                        <img className='speaker-img'></img>
                        <h1 className='event-page-label'>Ponente:</h1> <h1>{speaker}</h1>
                    </div>
                    <div><h1 className='event-page-label'>Lugar</h1><h1> {ubication}</h1></div>
                    <div><h1 className='event-page-label'>Fecha</h1><h1> {date}</h1></div>
                </section>
                <div className="subscribe-button-container">
                    <Button className="subscribe-button" variant="success" onClick={handleSubscribe}>Inscribirme !</Button>
                </div>
            </div>
        
        </div>
    )
}