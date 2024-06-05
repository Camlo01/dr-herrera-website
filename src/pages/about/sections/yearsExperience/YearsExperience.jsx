
import './yearsExperience.css'

import imageDoc1 from '/assets/images/about/doctor-experience-1.png'
import imageDoc2 from '/assets/images/about/doctor-experience-2.png'
import imageDoc3 from '/assets/images/about/doctor-experience-3.png'

function YearsExperience() {
    return (
        <section className="years-experience-section">
            <h2>Años de Experiencia</h2>
            <div className='container'>
                <picture>
                    <source srcSet={imageDoc3} media="(min-width: 1281px)" />
                    <source srcSet={imageDoc2} media="(min-width: 745px) and (max-width: 1280px)" />
                    <source srcSet={imageDoc1} media="(max-width: 744px)" />
                    <img src={imageDoc1} alt="Dr Wilmar Herrera" />
                </picture>
                <p>Desde el año 2014 hice parte del grupo de cirugía bariátrica, con el fin de reunir todos los requisitos, en donde se contemplan cantidad de cirugías realizadas, logrando así poder ingresar como miembro activo a la asociación colombiana de obesidad y cirugía bariátrica (ACOCIB). Mi experiencia probada en cirugía bariátrica garantiza la aplicación de procedimientos seguros y efectivos para abordar la obesidad y sus complicaciones con profesionalismo y calidad. Estoy aquí para ofrecerte intervenciones quirúrgicas de última generación, así como el apoyo y la orientación necesaria en tu camino hacia una vida más saludable y plena.</p>
            </div>
            <hr />

        </section>
    );
}

export default YearsExperience; 