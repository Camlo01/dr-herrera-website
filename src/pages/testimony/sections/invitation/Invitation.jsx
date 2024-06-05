
import { Link } from 'react-router-dom';

import './invitation.css'

function Invitation() {
    return (
        <div className='testimony-invitation'>
            <p>Únete a nuestra comunidad en línea y descubre cómo la cirugía bariátrica puede marcar la diferencia en tu vida y en la de otros. </p>

            <div className='divider'>
                <p>Te esperamos en nuestras redes sociales. <b>Tienes una vida ¡Ahora juntos la haremos mejor!</b></p>
            </div>

            <Link to={'/Contacto'}> <button>Contactar</button> </Link>
        </div>
    );
}

export default Invitation;