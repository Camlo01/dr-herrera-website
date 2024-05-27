import { Link } from 'react-router-dom';

import './testimonySection.css'

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
                                <img src="" alt="" />
                                <div className='text'>
                                    <p>Antes</p>
                                </div>
                            </div>
                            <div className='after'>
                                <img src="" alt="" />
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
                                <img src="" alt="" />
                                <div className='text'>
                                    <p>Antes</p>
                                </div>
                            </div>
                            <div className='after'>
                                <img src="" alt="" />
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
                                <img src="" alt="" />
                                <div className='text'>
                                    <p>Antes</p>
                                </div>
                            </div>
                            <div className='after'>
                                <img src="" alt="" />
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
                    <h3>Su Historia Puede Ser la Próxima</h3>
                    <div className='body'>
                        <p>Descubra cómo la cirugía bariátrica ha cambiado las vidas de nuestros pacientes. Desde la recuperación de la salud hasta la renovación de la confianza en sí mismos, estas historias son testimonios de la efectividad y el impacto positivo de nuestros procedimientos:</p>
                        <p>Desde pérdidas de peso significativas hasta mejoras en la salud y la calidad de vida, cada historia es un testimonio poderoso de lo que es posible lograr con el apoyo adecuado.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TestimonySection;