import { Link } from 'react-router-dom';

import './footer.css'

import logo from '/assets/icons/logo-cirugia-bariatrica.png'

function Footer() {

    return (
        <div className="footer">
            <img src={logo} alt="Logo Dr Herrera" />
            <hr />
            <div className='links-container'>
                <div className='links link-1'>
                    <h2>Accesos Directos</h2>
                    <ul>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/'}>Introducción</Link></li>
                        <li><Link to={'/'}>Cirugía Bariátrica</Link></li>
                        <li><Link to={'/'}>Redes Sociales</Link></li>
                    </ul>
                </div>
                <div className='links link-2'>
                    <h2>Redes Sociales</h2>
                    <ul>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/'}>TikTok</Link></li>
                        <li><Link to={'/'}>YouTube</Link></li>
                        <li><Link to={'/'}>Facebook</Link></li>
                    </ul>
                </div>
                <div className='links link-3'>
                    <h2>Cirugía Bariátrica</h2>
                    <ul>
                        <li><Link to={'/'}>¿Qué es?</Link></li>
                        <li><Link to={'/'}>¿Soy Candidato?</Link></li>
                        <li><Link to={'/'}>Calculadora IMC</Link></li>
                        <li><Link to={'/'}>Testimonios</Link></li>
                    </ul>
                </div>
                <div className='links link-4'>
                    <h2>Páginas</h2>
                    <ul>
                        <li><Link to={'/'}>Inicio</Link></li>
                        <li><Link to={'/'}>¿Quén Soy?</Link></li>
                        <li><Link to={'/'}>Cirugías</Link></li>
                        <li><Link to={'/'}>Testimonios</Link></li>
                        <li><Link to={'/'}>Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <hr />
            {/* <p>2024 © Dr Herrera Wilmar by Mavri | By SystemWork</p> */}
        </div>
    );
}

export default Footer;