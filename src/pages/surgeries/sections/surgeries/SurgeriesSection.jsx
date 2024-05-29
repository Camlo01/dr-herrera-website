import './surgeriesSection.css'

import logo from '/assets/logos/logo-dr-herrera-cirujano-bariatrico-by-mavri.png'

import firstImage1 from '/assets/images/surgeries/image-surgery-1.png'
import firstImage2 from '/assets/images/surgeries/image-surgery-2.png'
import firstImage3 from '/assets/images/surgeries/image-surgery-3.png'

import gastricSleeveImage1 from '/assets/images/surgeries/gastric-sleeve-image-1.png'
import gastricSleeveImage2 from '/assets/images/surgeries/gastric-sleeve-image-2.png'
import gastricSleeveImage3 from '/assets/images/surgeries/gastric-sleeve-image-3.png'

function SurgeriesSection() {
    return (
        <section className='surgeries-section'>

            <img src={logo} alt="Logo Dr. Wilmar Herrera" className='logo' />
            <picture>
                <source srcSet={firstImage3} media="(min-width: 1280px)" />
                <source srcSet={firstImage2} media="(min-width: 745px) and (max-width: 1279px)" />
                <source srcSet={firstImage1} media="(max-width: 744px)" />
                <img src={firstImage1} alt="Dr. Wilmar Herrera" className='first-image' />
            </picture>

            <div className='content-section'>
                <p>Sección de Cirugías Bariatricas :</p>
                <ul>
                    <li>¿Qué es la cirugía bariátrica?</li>
                    <li>¿Porqué se realiza?</li>
                    <li>Manga Gástrica </li>
                    <li>Bypass Gástrico </li>
                    <li>BAGUA (bypass gástrico de única <br /> anastomosis – mini bypass) </li>
                    <li>Revisión Bariátrica </li>
                    <li>Cirugía Metabólica </li>
                </ul>
            </div>

            <div className='what-is-section surgery-section'>
                <h2>¿Qué es la cirugía bariátrica?</h2>
                <p>Según ACOCIB (asociacion colombiana de obesidad y cirugia bariatrica), la cirugia bariatrica es: </p>
                <q>“La palabra Bariátrica procede del griego BAROS que significa peso y IATRICS que significa tratamiento. La Cirugía Bariátrica se define como el conjunto de procedimientos quirúrgicos diseñados con la intención de perder peso y mejorar las enfermedades asociadas. Dichos procedimientos quirúrgicos se han enfocado en modificar anatómicamente el tracto digestivo para producir restricción a nivel del estómago y disminución de la absorción a nivel del intestino delgado, lo que conlleva a cambios entero-hormonales con afección en diferentes órganos blancos y en el hipotálamo.” </q>
                <p>Yo defino la  cirugía  bariátrica como  un conjunto de procedimientos quirúrgicos que se realizan a personas con obesidad, dicha intervención se convierte en una gran herramienta efectiva y segura a corto y largo plazo, siempre y cuando exista un compromiso propio del paciente y un acompañamiento integral del equipo multidisciplinario para  generar un balance de hábitos saludables (dieta y actividad física), todo lo anterior con la finalidad de lograr y permanecer con un peso ideal y sin alteraciones nutricionales por el resto de la vida. </p>
            </div>

            <div className='img-fixed' aria-hidden="true">
                {/* Empty div */}
            </div>

            <div className='why-is-done-section surgery-section'>
                <h3>¿Porqué se realiza?</h3>
                <p>Para ayudarte a perder el exceso de peso y reducir el riesgo de que se presenten problemas de salud relacionados con el peso que podrían poner en riesgo tu vida, como los siguientes:</p>
                <ul>
                    <li>Enfermedad por reflujo gastroesofágico</li>
                    <li>Cardiopatía</li>
                    <li>Presión arterial alta</li>
                    <li>Colesterol alto</li>
                    <li>Apnea obstructiva del sueño</li>
                    <li>Diabetes tipo 2</li>
                    <li>Accidente cerebrovascular</li>
                    <li>Cáncer</li>
                    <li>Infertilidad</li>
                </ul>
            </div>

            <div className='manga-gastrica-section surgery-section'>
                <h3>Manga Gástrica</h3>
                <picture>
                    <source srcSet={gastricSleeveImage3} media="(min-width: 1280px)" />
                    <source srcSet={gastricSleeveImage2} media="(min-width: 744px) and (max-width: 1279px)" />
                    <source srcSet={gastricSleeveImage1} media="(max-width: 743px)" />
                    <img src={gastricSleeveImage1} alt="Dr. Wilmar Herrera" className='' />
                </picture>
                <p>La manga gástrica,  o gastrectomía vertical, es la cirugia bariátrica mas realizada a nivel mundial. Se trata de extirpar entre un 70-80% de manera vertical el estómago, reduciendo el tamaño del estómago, limitando la cantidad de alimentos consumidos y disminuyendo la producción de la hormona del hambre, la Grelina. Este método, técnicamente menos demandante que el bypass gástrico, promueve una pérdida de peso significativa y puede mejorar las condiciones médicas asociadas con la obesidad. </p>

                <div className='video-container'>
                    <video controls >
                        <source src={`/assets/videos/surgeries/Manga-gastrica.mov`} type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <h4>Manga Gástrica</h4>
                </div>

                <div className='indications'>
                    <h4>Indicaciones</h4>
                    <p>Cual grado de obesidad, ideal en obesidad Grado I (IMC 30-34.9) y II (IMC 35-39.9)</p>
                </div>
            </div>


            <div className='bypass-gastrico-section surgery-section'>
                <h3>Bypass Gástrico</h3>
                <p>El bypass gástrico, también denominado "bypass gástrico en Y de Roux", es un tipo de cirugía para bajar de peso que consiste en crear una pequeña bolsa desde el estómago y conectar la bolsa recién creada directamente con el intestino delgado. Después del baipás gástrico, los alimentos ingeridos entrarán en esta pequeña bolsa del estómago y, a continuación, directamente en el intestino delgado, sin pasar por la mayor parte del estómago y la primera sección del intestino delgado. El baipás gástrico es uno de los tipos de cirugía bariátrica que se realizan con más frecuencia.</p>

                <div className='videos-container'>
                    <div className='video-container'>
                        <video controls >
                            <source src={`/assets/videos/surgeries/Bypass-grastrico.mov`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <h4>Bypass Gástrico</h4>
                    </div>

                    <div className='video-container'>
                        <video controls >
                            <source src={`/assets/videos/surgeries/Mini-bypass-gastrico.mov`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                        <h4>Mini Bypass Gástrico</h4>
                    </div>
                </div>

                <div className='indications'>
                    <h4>Indicaciones</h4>
                    <p>{`Obesidad con IMC >40, o >35 con comorbilidades asociadas como Diabetes Mellitus, hipertensión arterial o apnea del sueño.  En algunos casos, puedes reunir los requisitos de ciertos tipos de cirugía de pérdida de peso si tu índice de masa corporal es de 30 a 34 y tienes problemas de salud graves relacionados con el peso.`}</p>
                </div>
            </div>

            <div className='cirugia-revision surgery-section'>
                <h3>Cirugía de Revisión</h3>
                <p>La cirugía de revisión bariátrica corrige o mejora los resultados de cirugías bariátricas previas.</p>
            </div>

            <div className='cirugia-revision surgery-section'>
                <h3>Cirugía Metabólica</h3>
                <p>La cirugía metabolica, también conocida como cirugía de la diabetes tipo 2, ofrece una solución innovadora para tratar la diabetes en pacientes con obesidad. Algunos procedimientos bariátricos, como el bypass gastrico y la manga gástrica, han demostrado efectos beneficiosos en la regulación del azúcar en la sangre y la sensibilidad a la insulina, reduciendo asi el riesgo de complicaciones asociadas con la enfermedad. </p>
            </div>

        </section>
    );
}

export default SurgeriesSection;