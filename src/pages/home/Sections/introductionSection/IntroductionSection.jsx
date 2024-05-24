
import './introductionSection.css'

import DrWilmar from '/assets/images/home/doctor-wilmar-herrera-bariatrico.png'

function IntroductionSection() {
    return (
        <section className='introductionHome-section'>
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
    );
}

export default IntroductionSection;