import { Link } from 'react-router-dom';

import './footer.css'

import logo from '/assets/logos/logo-cirugia-bariatrica.png'

function Footer() {

    const InstagramURL = 'https://www.instagram.com/doc.herrerabariatrico';
    const FacebookURL = 'https://www.facebook.com/profile.php?id=100086302820455';
    const TikTokURL = 'https://www.tiktok.com/@docherrerabariatrico';

    return (
        <div className="footer">
            <img src={logo} alt="Logo Dr Herrera" />
            <hr />
            <div className='links-container'>
                <div className='links link-1'>
                    <h2>Accesos Directos</h2>
                    <ul>
                        <li><Link to={'/#inicio'}>Inicio</Link></li>
                        <li><Link to={'/#introduccion'}>Introducción</Link></li>
                        <li><Link to={'/#cirugia-bariatrica'}>Cirugía Bariátrica</Link></li>
                        <li><Link to={'/#redes-sociales'}>Redes Sociales</Link></li>
                    </ul>
                </div>
                <div className='links link-2'>
                    <h2>Redes Sociales</h2>
                    <ul>
                        <li><Link to={'/Contacto'}>Inicio</Link></li>
                        <li><Link to={InstagramURL} target='_blank'>Instagram</Link></li>
                        <li><Link to={FacebookURL} target='_blank'>Facebook</Link></li>
                        <li><Link to={TikTokURL} target='_blank'>TikTok</Link></li>
                    </ul>
                </div>
                <div className='links link-3'>
                    <h2>Cirugía Bariátrica</h2>
                    <ul>
                        <li><Link to={'/#cirugia-bariatrica'}>¿Qué es?</Link></li>
                        <li><Link to={'/#soy-candidato'}>¿Soy Candidato?</Link></li>
                        <li><Link to={'/#calculadora-imc'}>Calculadora IMC</Link></li>
                        <li><Link to={'/#testimonios'}>Testimonios</Link></li>
                    </ul>
                </div>
                <div className='links link-4'>
                    <h2>Páginas</h2>
                    <ul>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/Quien-soy'}>¿Quén Soy?</Link></li>
                        <li><Link to={'/Cirugias'}>Cirugías</Link></li>
                        <li><Link to={'/Testimonios'}>Testimonios</Link></li>
                        <li><Link to={'/Contacto'}>Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            {/* <p>2024 © Dr Herrera Wilmar by Mavri | By SystemWork</p> */}
        </div>
    );
}

export default Footer;