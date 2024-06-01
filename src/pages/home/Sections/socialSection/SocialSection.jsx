import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import './socialSection.css'

import InstagramProfile from "../../../../components/InstagramProfile/InstagramProfile";

// Social Icons
import Instagram from '/assets/icons/social-media/Instagram.svg'
import Facebook from '/assets/icons/social-media/Facebook.svg'
import TikTok from '/assets/icons/social-media/TikTok.svg'

import IgProfileMini from '/assets/icons/social-media/ig-profile-mini.png'

function SocialSection() {

    const InstagramURL = 'https://www.instagram.com/doc.herrerabariatrico';
    const FacebookURL = 'https://www.facebook.com/profile.php?id=100086302820455';
    const TikTokURL = 'https://www.tiktok.com/@docherrerabariatrico';

    return (
        <div className="social-media-section" id="redes-sociales">
            <section className="social-media">
                <h2>Redes Sociales</h2>
                <p className="text">Síguenos en nuestras redes sociales para ver los cambios y progresos de nuestros pacientes.</p>
                <div className="body-container">
                    <div className="body">
                        <h3>Síguenos en:</h3>
                        <ul>
                            <li>
                                <Link>Instagram: @doc.herrerabariatrico</Link>
                            </li>
                            <li>
                                <Link>Facebook: Dr Herrera cirujano</Link>
                            </li>
                            <li>
                                <Link>TikTok: docherrerabariatrico</Link>
                            </li>
                        </ul>
                        <div className="networks">
                            <Link to={InstagramURL} target="_blank"><img src={Instagram} alt="Instagram icon" /></Link>
                            <Link to={FacebookURL} target="_blank"><img src={Facebook} alt="Facebook icon" /></Link>
                            <Link to={TikTokURL} target="_blank"><img src={TikTok} alt="TikTok icon" /></Link>
                        </div>
                    </div>
                    <p>No te pierdas nuestras actualizaciones diarias, eventos especiales y contenido exclusivo. <b> ¡Estamos aquí para brindarle información útil y apoyo en su viaje hacia una vida más saludable! </b></p>
                </div>
                <div className="notes">
                    <p>¿Tienes alguna pregunta o preocupación? No dudes en enviarnos un <b> mensaje directo </b> a través de cualquiera de nuestras plataformas. <b> ¡Estamos aquí para ayudarte!</b></p>
                </div>
            </section>

            <section className="instagram">
                <h2>¡Síguenos en Instagram!</h2>
                <p>Compartimos la actualización del progreso de nuestros pacientes después de su cirugía</p>

                <IgComponent />

                <div className="contact">
                    <p>Si deseas más información, no dudes en contactarnos</p>
                    <Link to="/Contacto">
                        <button>Contactar</button>
                    </Link>
                </div>

            </section>


        </div>
    );
}

export default SocialSection;

function IgComponent() {

    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 744);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 744);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const InstagramURL = 'https://www.instagram.com/doc.herrerabariatrico';


    return (
        <>
            {isSmallScreen ? (
                <div className="instagram-mini">
                    <Link to={InstagramURL} target="_blank">
                        <img src={IgProfileMini} alt="Instagram profile" />
                    </Link>
                </div>
            ) : (
                <div className="instagram-profile-container">
                    <InstagramProfile />
                </div>
            )
            }
        </>
    );
}