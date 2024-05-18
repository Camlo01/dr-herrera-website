import { useState } from 'react';

import CalculatorWidget from '../Components/calculatorWidget/CalculatorWidget.jsx'
import ImcCalculator from './../Components/ImcCalculator/ImcCalculator.jsx'
import ImcResult from '../Components/imcResult/ImcResult';

function ImcCalculatorSection() {

    const [imcResult, setImcResult] = useState(0)

    return (
        <div className='ImcCalculator-section'>
            <CalculatorWidget />
            <ImcCalculator setImcResult={setImcResult} />
            <ImcResult imcResult={imcResult} />
        </div>
    );
}

export default ImcCalculatorSection;