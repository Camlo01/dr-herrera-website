
import logo from '/assets/logos/logo-dr-herrera-cirujano-bariatrico-by-mavri.png'
import imageDoc1 from '/assets/images/about/doctor-1.png'
import imageDoc2 from '/assets/images/about/doctor-2.png'
import imageDoc3 from '/assets/images/about/doctor-3.png'

import './aboutDoctor.css'

function AboutDoctorSection() {
    return (
        <div>
            <div className='logo-contianer'>
                <img src={logo} alt="Logo Dr. Herrera" />
            </div>

            <section className='about-doctor-section'>
                <div className='title'>
                    <h2>Doctor Wilmar Herrera</h2>
                    <h3>Cirujano Bariátrico</h3>
                </div>

                <div className='container-body'>
                    <h3>¿Quién Soy?</h3>
                    <p>Soy Wilmar Herrera, Colombiano, soy Doctor, tengo especialidad médica en cirugía general, cirugía laparoscópica avanzada y en Cirugía Bariátrica. Me complace mucho que estes visitando mi página. Mi objetivo es ofrecerte una atención integral y personalizada para ayudarte a alcanzar tus objetivos de salud y bienestar. </p>
                    <p>Aprovecho para decirte que cuentas con mi apoyo, para compartirles todo mi conocimiento y asesoramiento profesional referente a la cirugía bariátrica. </p>

                    <div className='image'>
                        <picture>
                            <source srcSet={imageDoc3} media="(min-width: 1281px)" />
                            <source srcSet={imageDoc2} media="(min-width: 745px) and (max-width: 1280px)" />
                            <source srcSet={imageDoc1} media="(max-width: 744px)" />
                            <img src={imageDoc1} alt="Dr. Wilmar Herrera" />
                        </picture>
                    </div>

                    <p>Con años de experiencia en el campo de la cirugía bariátrica y un enfoque centrado en el paciente, estoy comprometido a proporcionarte las herramientas y el apoyo necesario para lograr un estilo de vida saludable. Recuerda ¡tienes una vida, ahora juntos la haremos mejor! </p>
                </div>

            </section>

        </div>
    );
}

export default AboutDoctorSection;