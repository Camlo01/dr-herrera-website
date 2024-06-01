import { Link } from "react-router-dom";

import './surgerySection.css'

import IMCIcon from '/assets/icons/IMC-icon.png'
import surgeryImage from '/assets/images/home/surgery.png'
import docMedicAttention from '/assets/images/home/doc-atencion-medica.png'

function SurgerySection() {

    return (
        <div className="surgery-section" id="cirugia-bariatrica">
            <section className="what-is">
                <h2>¿Qué es la Cirugía Bariátrica?</h2>
                <div className="what-is-container">
                    <div className="container">
                        <img src={surgeryImage} alt="Dr. Wilmar en cirugía" />
                        <div className="body">
                            <p className="introduction-text">La cirugía bariátrica actúa como un recurso que facilita la pérdida de peso de forma efectiva en individuos con obesidad.</p>
                            <div className="stepped-out">
                                <p>En esencia, la cirugía bariátrica implica intervenciones en el estómago o el sistema digestivo con el fin de inducir una sensación de saciedad más rápida o reducir la absorción de calorías de los alimentos.</p>
                                <div className="column">
                                    <p>Esto facilita que la persona pierda peso de forma más segura y sostenida.</p>
                                    <p>Yo defino la  cirugía  bariátrica como  un conjunto de procedimientos quirúrgicos que se realizan a personas con obesidad, dicha intervención se convierte en una gran herramienta efectiva y segura a corto y largo plazo, siempre y cuando exista un compromiso propio del paciente y un acompañamiento integral del equipo multidisciplinario para  generar un balance de hábitos saludables (dieta y actividad física), todo lo anterior con la finalidad de lograr y permanecer con un peso ideal y sin alteraciones nutricionales por el resto de la vida. </p>
                                </div>
                            </div>
                        </div>
                        <Link to={"/Cirugias"}>
                            <div className="button">Conocer Más </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="am-candidate" id="soy-candidato">
                <h2>¿Soy Candidato A La Cirugía?</h2>
                <div className="body">
                    <div className="body-1">
                        <p>Determinar si eres candidato para someterte a una cirugía bariátrica es una decisión importante que debe tomarse con el asesoramiento de un equipo médico especializado.</p>
                        <div className="card">
                            <img src={IMCIcon} alt="IMC icon" />
                            <h3>¡Calcula Tu IMC!</h3>
                        </div>
                    </div>

                    <div className="body-2">
                        <p>Generalmente, los candidatos ideales son aquellos que tienen un índice de masa corporal <b>(IMC)</b>  superior a 40 o un índice de masa corporal superior a 30 con condiciones de salud relacionadas con la obesidad, como diabetes tipo 2 o hipertensión arterial, y que no han logrado perder peso de manera efectiva con otros métodos como cambios en la dieta y ejercicio.</p>
                        <a href="/#calculadora-imc">
                            <button>Obtener IMC</button>
                        </a>
                    </div>
                </div>

                <div className="image">
                    <img src={docMedicAttention} alt="Doctor brindando oriéntación médica profesional" />
                    <p>Determina tu IMC por medio del test.</p>
                </div>
            </section>

        </div>
    );
}

export default SurgerySection;