import { Link } from 'react-router-dom';

import './testimonySection.css'

// testimony images

import testimonyImage11 from '/assets/images/testimony/testimonio-1-1.jpeg'
import testimonyImage12 from '/assets/images/testimony/testimonio-1-2.jpeg'
import testimonyImage21 from '/assets/images/testimony/testimonio-2-1.jpeg'
import testimonyImage22 from '/assets/images/testimony/testimonio-2-2.jpeg'
import testimonyImage31 from '/assets/images/testimony/testimonio-3-1.jpeg'
import testimonyImage32 from '/assets/images/testimony/testimonio-3-2.jpeg'



function TestimonySection() {
    return (
        <section className="testimony-section" id='testimonios'>
            <h2>Testimonios</h2>
            <p>Observa los increíbles resultados de nuestros pacientes</p>
            <div className='container'>
                <div className='transformations'>
                    <h3>Transformaciones inspiradoras</h3>

                    <div className='card-container'>

                        <div className='card'>
                            <div className='before'>
                                <img src={testimonyImage11} alt="Paciente antes de la cirugía bariátrica" />
                                <div className='text'>
                                    <p>Antes</p>
                                </div>
                            </div>
                            <div className='after'>
                                <img src={testimonyImage12} alt="Paciente después de la cirugía bariátrica" />
                                <div className='text'>
                                    <p>Después</p>
                                </div>
                            </div>
                            <div className='card-cover'>
                                <Link to={'/Testimonios'}>Ver Completo</Link>
                            </div>
                        </div>

                        <div className='card' id='second-card' >
                            <div className='before'>
                                <img src={testimonyImage21} alt="Paciente antes de la cirugía bariátrica" />
                                <div className='text'>
                                    <p>Antes</p>
                                </div>
                            </div>
                            <div className='after'>
                                <img src={testimonyImage22} alt="Paciente después de la cirugía bariátrica" />
                                <div className='text'>
                                    <p>Después</p>
                                </div>
                            </div>
                            <div className='card-cover'>
                                <Link to={'/Testimonios'}>Ver Completo</Link>
                            </div>
                        </div>

                        <div className='card' id='third-card'>
                            <div className='before'>
                                <img src={testimonyImage31} alt="Paciente antes de la cirugía bariátrica" />
                                <div className='text'>
                                    <p>Antes</p>
                                </div>
                            </div>
                            <div className='after'>
                                <img src={testimonyImage32} alt="Paciente después de la cirugía bariátrica" />
                                <div className='text'>
                                    <p>Después</p>
                                </div>
                            </div>
                            <div className='card-cover'>
                                <Link to={'/Testimonios'}>Ver Completo</Link>
                            </div>
                        </div>


                    </div>

                </div>
                <div className='stories'>
                    <h3>Tu Historia Puede Ser la Próxima</h3>
                    <div className='body'>
                        <p>Descubre cómo la cirugía bariátrica ha cambiado las vidas de nuestros pacientes. Desde la recuperación de la salud hasta la renovación de la confianza en sí mismos, estas historias son testimonios de la efectividad y el impacto positivo de nuestros procedimientos:</p>
                        <p>Desde pérdidas de peso significativas hasta mejoras en la salud y la calidad de vida, cada historia es un testimonio poderoso de lo que es posible lograr con el apoyo adecuado.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonySection;