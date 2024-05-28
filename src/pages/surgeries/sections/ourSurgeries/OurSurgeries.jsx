import './ourSurgeries.css'

import imageDoc1 from '/assets/images/surgeries/doctor-1.png'
import imageDoc2 from '/assets/images/surgeries/doctor-2.png'
import imageDoc3 from '/assets/images/surgeries/doctor-3.png'

import stomachIcon from '/assets/icons/stomach.svg'

function OurSurgeries() {
    return (
        <section className='our-surgeries-section'>

            <div className='title'>
                <h2>Nuestras Cirugías</h2>
                <p>Descubre las opciones de cirugía bariátrica que el Dr. Herrera tiene para ofrecerte con el fin de ayudarte en tu viaje hacia una vida más saludable. </p>
                <p>Con el estudio del equipo multidisciplinario escogeremos la cirugía que mas se ajuste a tus necesidades tanto preferencias como físicas. </p>
            </div>

            <div className='blue-card'>

                <div className='container'>
                    <h2> Tienes una <b className='orange'> vida</b>,<br /> <b> ¡Ahora juntos la haremos mejor!</b></h2>
                    <picture>
                        <source srcSet={imageDoc3} media="(min-width: 1281px)" />
                        <source srcSet={imageDoc2} media="(min-width: 745px) and (max-width: 1280px)" />
                        <source srcSet={imageDoc1} media="(max-width: 744px)" />
                        <img src={imageDoc1} alt="Dr. Wilmar Herrera" />
                    </picture>
                    <div className='card'>
                        <img src={stomachIcon} alt="icono" />
                        <hr />
                        <div className='name'>
                            <h3>Cirujano Bariátrico</h3>
                            <h4>Dr. Wilmar Herrera</h4>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default OurSurgeries;