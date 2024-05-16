
import './WhatsAppButton.css'

import WSICon from '/assets/icons/whatsapp-icon.png';

function WhatsAppButton() {

    const phoneNumber = `573155348437`
    const hiMessage = `¡Buen día doc! Me gustaría conocer más acerca de... `

    const completeURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${hiMessage}`

    return (
        <a target='_blank' href={completeURL} className="ws-btn" >
            <img src={WSICon} alt="WhatsApp icon" />
        </a >
    );
}

export default WhatsAppButton;