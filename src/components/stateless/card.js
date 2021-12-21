import React, { useEffect } from 'react';
import '../../styles/card-style.css'


const Card = (datosEntrada) => {
    debugger
    const {title, description, img} = datosEntrada;
    debugger
    return (
        <div className="card">
            <div>
                <p>{title}</p>
                <img src={img} alt="imagen del evento"/>
                <p>{description}</p>
            </div>
            <div>
                <button>Inscribirme</button>
            </div>
        </div>
    )
}

export default Card;