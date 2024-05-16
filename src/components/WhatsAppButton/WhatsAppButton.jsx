
import './WhatsAppButton.css'

import WSICon from '/assets/icons/whatsapp-icon.png';

function WhatsAppButton() {
    return (
        <a target='_blank' href="https://api.whatsapp.com/send?phone=573155348437&text=Buen%20día¡%20Estoy%20interesado%20en%20sus%20servicios.%20Doctor%20%7C%20Herrera%20%7C%20Cirugía%20%7C%20Bariátrica%20%7C%20Obesidad%20%7C%20Bogotá%20%7C%20Villavicencio%20" className="ws-btn">
            <img src={WSICon} alt="WhatsApp icon" />
        </a>
    );
}

export default WhatsAppButton;