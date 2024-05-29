import { Link } from "react-router-dom";

import './contactSection.css'

function ContactSection() {
    return (
        <div className="contact-section">
            <div className="divider-section">
                <p>Conoce que cirugía se adecúa más a tus necesidades por medio de una <b> valoración médica. </b></p>
            </div>
            <div className="contact-button">
                <h2>Agenda Tu Cita</h2>
                <Link to='/Contacto'>
                    <button>
                        Contacto
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ContactSection;