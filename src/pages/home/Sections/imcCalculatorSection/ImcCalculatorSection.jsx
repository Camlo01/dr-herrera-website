import { useState } from 'react';

import CalculatorWidget from '../../components/calculatorWidget/CalculatorWidget.jsx'
import ImcCalculator from '../../components/ImcCalculator/ImcCalculator.jsx'
import ImcResult from '../../components/imcResult/ImcResult.jsx';

import '../imcCalculatorSection/imcCalculatorSection.css'

function ImcCalculatorSection() {

    const [imcResult, setImcResult] = useState(0)

    return (
        <div className='imcCalculator-section' id='calculadora-imc'>

            <div className='body'>
                <h2>Calculadora IMC</h2>
                <h3>¿Qué es ?</h3>
                <p>Una calculadora de índice de masa corporal (IMC) es una herramienta que utiliza tus medidas de peso y altura para calcular un número que indica tu nivel relativo de grasa corporal.</p>
            </div>

            <div className='cards-container'
                style={{ display: 'flex', height: "fit-content" }}>
                <CalculatorWidget />
                <ImcCalculator setImcResult={setImcResult} />
                <ImcResult imcResult={imcResult} />
            </div>
        </div>
    );
}

export default ImcCalculatorSection;