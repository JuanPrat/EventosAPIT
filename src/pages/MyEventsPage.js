import React from 'react';
import { MyEventsCard } from '../components/stateless/MyEventsCard';
import '../styles/MyEventsPage.css'

export const MyEventsPage = (props) => {
    return (
            <div className="myevents-container">
                <h2>Mis Eventos</h2>
                <div className="flex-container">
                    <MyEventsCard eventTitle={'Tecno Café'}
                    eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas."
                    eventImg="1"
                    speaker="Hernando Recaman Chaux"
                    ubication="P40-604"
                    date="12-04-2022">
                    </MyEventsCard>

                    <MyEventsCard eventTitle={'EnRedArte'}
                    eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas."
                    eventImg="1"
                    speaker="Monica Rojas"
                    ubication="P40-604"
                    date="12-04-2022">
                    </MyEventsCard>

                    <MyEventsCard eventTitle={'Maratón de programación'}
                    eventDescription="Lorem ipsum dolor sit amet consectetur adipiscing elit eu justo, platea dictum ornare fringilla pretium urna scelerisque quam, posuere magna sem parturient nibh penatibus rutrum egestas."
                    eventImg="1"
                    speaker="Iván Posada"
                    ubication="P40-604"
                    date="12-04-2022">
                    </MyEventsCard>
                </div>
            </div>
    )

}