
import Carrousel from '../../components/carrousel/Carrousel'

import './realCases.css'

function RealCases() {
    return (
        <div className="testimony-cases">
            <section className="blue-container">
                <h2>Casos Reales</h2>
                <div className='carrousel-container'>
                    <Carrousel />
                </div>
            </section>
            <section className='histories'>
                <h2>Historias de <br /> Cambio y Esperanza</h2>
                <div className='body'>
                    <p>Estos son solo algunos ejemplos de cómo la cirugía bariátrica ha cambiado vidas. Si estás luchando con tu peso y has intentado otras opciones sin éxito, considera hablar con un especialista en cirugía bariátrica para explorar si esta opción es adecuada para ti. No esperes más para tomar el control de tu salud y tu bienestar. ¡El primer paso hacia una vida más saludable comienza hoy!</p>
                    <p> <b> ¿Quieres ver más ejemplos de cómo la cirugía bariátrica ha transformado vidas? </b> Síguenos en nuestras redes sociales para obtener acceso exclusivo a más testimonios, seguimiento de pacientes y casos de éxito. </p>
                </div>
            </section>

        </div>
    );
}

export default RealCases;