import React from 'react';
import './../../styles/Footer.css'

export const Footer = () => {
    return (
        <>
            <div className='footer-container'>
                <section className='footer-contact-info'>
                    <h5><b>Sede Medellín</b></h5>
                    <h6>Carrera 48 No. 7 – 151 | El Poblado | PBX: (+57 4) 444 76 54 - (+57 4) 319 79 00 | NIT: 890980136-6</h6>
                    <h5><b>Centro Regional Urabá</b></h5>
                    <h6>Calle 41 50a-324 | Tel: (+57 4) 561 51 78</h6>
                    <h5><b>Centro de Laboratorios, Prácticas y Experimentación</b></h5>
                    <h6>Carrera  58 No. 27 B – 125 Bello | Tel: (+57 4) 452 09 99</h6>
                </section>
                <section className='footer-social-media'>
                    <a className="facebook" id="social-media-icon" target="blank" href="https://www.facebook.com/polijic/"><i class="fa fa-facebook-square fa-3x" aria-hidden="true" ></i></a>
                    <a className="twitter" id="social-media-icon" target="blank" href="https://twitter.com/politecnicoJIC"><i class="fa fa-twitter-square fa-3x" aria-hidden="true"></i></a>
                    <a className="instagram" id="social-media-icon" target="blank" href="https://www.instagram.com/politecnicojic/?hl=es-la"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></a>
                    <a className="youtube" id="social-media-icon" target="blank" href="https://www.youtube.com/channel/UCLSaxR0qrhvgCg2SUVW84FQ/videos"><i class="fa fa-youtube fa-3x" aria-hidden="true"></i></a>
                </section>
            </div>
            <div className="regards">
                <section ><h6><b>Hecho con 💝 por el equipo #1</b></h6></section>
            </div>

        </>

    );
}