import DrWilmar from '/assets/images/home/doctor-wilmar-herrera-bariatrico.png'
import logoDrHerrera from '/assets/logos/logo-dr-herrera-cirujano-bariatrico-by-mavri.png'
import blueVector from '/assets/images/home/blue-vector.png'
import drWilmarVector from '/assets/images/home/dr-wilmar-vector.png'

import './introductionSection.css'

function IntroductionSection() {
    return (
        <>
            <section className='introductionHome-section' id='inicio'>
                <h2>Tienes una vida, <br />¡Ahora juntos la <br />haremos <br />mejor!</h2>
                <img src={DrWilmar} alt="Doctor Wilmar Herrera Bariátrico" />
                <div className='name-card'>
                    <h1>Cirugía Bariátrica</h1>
                    <h3>Dr. Wilmar Herrera</h3>
                    <a href="/#calculadora-imc">
                        <button>Calcula Tu IMC</button>
                    </a>
                </div>
            </section>
            <section className='who-i-am-section' id='introduccion'>
                <img src={logoDrHerrera} alt="Logo Dr, Herrera Cirujano Bariátrico by Mavri" />
                <div className='who-i-am-container'>
                    <div className='photo'>
                        <img src={blueVector} alt="Vector photo" />
                        <img src={drWilmarVector} alt="Dr. Wilmar Herrera" />
                    </div>
                    <div className='body'>
                        <h2> <b> Doctor Wilmar Herrera </b>  <br /> Cirujano Bariátrico</h2>
                        <p>Inicia el cambio que tanto buscas en tu vida, cuida tu salud a través de la cirugía bariátrica y adquiere hábitos positivos que te ayuden a mejorar tu estilo de vida.</p>
                        <p>Conoce más acerca de la cirugía bariátrica.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default IntroductionSection;