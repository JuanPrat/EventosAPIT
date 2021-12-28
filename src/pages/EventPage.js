import React, { useEffect } from 'react';
import '../styles/EventPage.css'

export const EventPage = (data) => {
    const { eventImg, eventTitle, eventDescription, speaker, ubication, date } = data
    return (
        <div >
            <div className='event'>
                <section className='event-img'>
                    <img src={eventImg}></img>
                </section>
                <section className='event-info'>
                    <div class='main-description'>
                        <p>{eventTitle}</p>
                        <p>{eventDescription}</p>
                    </div>
                    <div className='speaker'>
                        <img></img>
                        <p>{speaker}</p>
                    </div>
                    <p></p>
                    <p>{ubication}</p>
                    <p>{date}</p>
                </section>

            </div>
            <button>Inscribirme !</button>
        </div>
    )
}