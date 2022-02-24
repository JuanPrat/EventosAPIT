import React from 'react';
import { MyEventsCard } from '../components/stateless/MyEventsCard';
import '../styles/MyEventsPage.css'

export const MyEventsPage = (props) => {
    return (
            <div className="myevents-container">
                <h2>Mis Eventos</h2>
                <div className="flex-container">
                    <MyEventsCard>
                    </MyEventsCard>

                    <MyEventsCard>
                    </MyEventsCard>

                    <MyEventsCard>
                    </MyEventsCard>
                </div>
            </div>
    )

}