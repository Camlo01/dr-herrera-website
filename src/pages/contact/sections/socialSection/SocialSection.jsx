
import { Link } from "react-router-dom";

import './socialSection.css'

// Social Icons
import Instagram from '/assets/icons/social-media/Instagram.svg'
import Facebook from '/assets/icons/social-media/Facebook.svg'
import TikTok from '/assets/icons/social-media/TikTok.svg'

// Contact info icons
import MailIcon from '/assets/icons/contact/mail.svg'
import PhoneIcon from '/assets/icons/contact/phone.svg'
import PinIcon from '/assets/icons/contact/pin.svg'
import WorldIcon from '/assets/icons/contact/world.svg'

import WsIcon from '/assets/icons/contact/whatsapp-icon.svg'

function SocialSection() {

    // Icons urls
    const InstagramURL = 'https://www.instagram.com/doc.herrerabariatrico';
    const FacebookURL = 'https://www.facebook.com/profile.php?id=100086302820455';
    const TikTokURL = 'https://www.tiktok.com/@docherrerabariatrico';

    // Contact items
    const mailHref = `mailto:docherrerawilmar@gmail.com`
    const phoeHref = `tel:+57(315)534-8437`
    const locationHref = `https://maps.app.goo.gl/uwCggiLdh2MW3gqV8`
    const websiteHref = `https://www.docherrerabariatrico.com/`

    // WHatsApp Elements
    const phoneNumber = `573155348437`
    const hiMessage = `¡Buen día doc! Me gustaría conocer más acerca de... `
    const completeURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${hiMessage}`

    return (
        <div className="social-section">
            <section className="social">
                <h2>Síguenos en Nuestras Redes Sociales</h2>
                <p>Explora testimonios reales y seguimiento postoperatorio. Únete a nuestras redes sociales para seguir historias de transformación y bienestar.</p>

                <div className="networks">
                    <h3>Síguenos en:</h3>
                    <ul>
                        <li>
                            <Link to={InstagramURL} target="_blank" >Instagram: @doc.herrerabariatrico</Link>
                        </li>
                        <li>
                            <Link to={FacebookURL} target="_blank">Facebook: Dr Herrera cirujano</Link>
                        </li>
                        <li>
                            <Link to={TikTokURL} target="_blank">TikTok: docherrerabariatrico</Link>
                        </li>
                    </ul>
                    <div className="items">
                        <Link to={InstagramURL} target="_blank"><img src={Instagram} alt="Instagram icon" /></Link>
                        <Link to={FacebookURL} target="_blank"><img src={Facebook} alt="Facebook icon" /></Link>
                        <Link to={TikTokURL} target="_blank"><img src={TikTok} alt="TikTok icon" /></Link>
                    </div>

                </div>

            </section>

            <section className="info">
                <h2>Información de Contacto</h2>
                <div className="container">
                    <div>
                        <p>Agenda una cita para tu valoración médica, no dudes en llamarnos o escribinos.</p>
                        <ul>
                            <li>
                                <img src={MailIcon} alt="Mail icon" />
                                <a id="mail" href={mailHref} target="_blank">docherrerawilmar@gmail.com</a>
                            </li>
                            <li>
                                <img src={PhoneIcon} alt="Phone icon" />
                                <a href={phoeHref} target="_blank">+57 (315) 534 8437</a>
                            </li>
                            <li>
                                <img src={PinIcon} alt="Location icon" />
                                <a href={locationHref} target="_blank">Calle 15 # 40-01 - Primavera Urbana <br /> Consultorio 614 </a>
                            </li>
                            <li>
                                <img src={WorldIcon} alt="World icon" />
                                <a href={websiteHref} target="_blank">www.docherrerabariatrico.com</a>
                            </li>
                        </ul>
                    </div>

                    <div className="ws">
                        <p>Escríbenos diréctamente a nuestro <b>WhatsApp.</b> </p>
                        <a href={completeURL} target="_blank">
                            <img src={WsIcon} alt="WhatsApp icon" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SocialSection;