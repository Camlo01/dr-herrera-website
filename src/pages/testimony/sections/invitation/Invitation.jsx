
import { Link } from 'react-router-dom';

import './invitation.css'

function Invitation() {
    return (
        <div className='testimony-invitation'>
            <p>Únete a nuestra comunidad en línea y descubre cómo la cirugía bariátrica puede marcar la diferencia en tu vida y en la de otros. </p>

            <div className='divider'>
                <p>¡Te esperamos en nuestras redes sociales para seguir inspirándonos mutuamente en  <b> nuestro viaje hacia una vida más saludable y plena!</b></p>
            </div>

            <Link to={'/Contacto'}> <button>Contactar</button> </Link>
        </div>
    );
}

export default Invitation;