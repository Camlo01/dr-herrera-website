import { useState } from 'react';
import '../ImcCalculator/imcCalculator.css'

import personIcon from '/assets/icons/imc-calculator/person.svg'
import weightMachine from '/assets/icons/imc-calculator/weight-machine.svg'

function ImcCalculator() {

    const [heightType, setheightType] = useState("CM");
    const [weightType, setWeightType] = useState('KG');

    const [heightValue, setheightValue] = useState('')
    const [weightValue, setWeightValue] = useState('')


    const [isMetricSystem, setIsMetricSystem] = useState(true);

    const handleSwitch = () => {
        if (isMetricSystem) {
            setIsMetricSystem(false)
            setheightType('FT')
            setWeightType('LB')
        } else {
            setIsMetricSystem(true)
            setheightType('CM')
            setWeightType('KG')
        }

        setheightValue('')
        setWeightValue('')
    }

    const handleCalculateButton = () => {

        if (isMetricSystem) {
            const imc = calculate_imc_metric(weightValue, heightValue)
            alert(`Tu altura es de ${heightValue}  ${heightType} y tu peso es de ${weightValue} ${weightType} \n
        IMC: ${evaluationIMC(imc)}`)
        } else {
            const imc = calculate_imc_anglo(weightValue, heightValue)
            alert(`Tu altura es de ${heightValue} ${heightType} y tu peso es de ${weightValue} ${weightType} \n
            IMC: ${evaluationIMC(imc)}`)
        }
    }

    return (
        <div className="imc-calculator" id="calculadora-imc">

            <h2>Calculadora IMC</h2>
            <div className='buttons'>
                <button onClick={handleSwitch} disabled={isMetricSystem ? true : false}>Sistema Métrico</button>
                <button onClick={handleSwitch} disabled={isMetricSystem ? false : true}>Sistema Anglosajón</button>
            </div>

            <div className='inputs'>

                <div>
                    <img src={personIcon} alt="" className='person' />
                    <input id='height' type="text"
                        placeholder='Altura'
                        value={heightValue}
                        onChange={(e) => { setheightValue(e.target.value) }} />
                    <label htmlFor="height">{heightType}</label>
                </div>

                <div>
                    <img src={weightMachine} alt="" className='weight-machine' />
                    <input id='weight' type="text"
                        placeholder='Peso'
                        value={weightValue}
                        onChange={(e) => { setWeightValue(e.target.value) }} />
                    <label htmlFor="weight">{weightType}</label>
                </div>
            </div>

            <button className='calcular' onClick={handleCalculateButton}>CALCULAR</button>
        </div>
    );
}

export default ImcCalculator;

function calculate_imc_metric(weight, height) {
    const heightInMeters = height / 100
    const imc = weight / (heightInMeters ** 2)
    return imc.toFixed(1)
}

function calculate_imc_anglo(weightInLb, heightInFt) {
    const weightInKg = weightInLb * 0.453592;
    const heightInMeters = heightInFt * 0.3048;
    const imc = weightInKg / (heightInMeters ** 2);
    return imc.toFixed(1);
}

function evaluationIMC(imc) {
    if (imc < 18.5) {
        return `${imc} Tu peso es bajo`;
    }
    if (imc >= 18.5 && imc <= 24.9) {
        return `${imc} Tu peso es normal`;
    }
    if (imc >= 25 && imc <= 29.9) {
        return `${imc} Tienes sobrepeso`;
    }
    if (imc >= 30 && imc <= 34.9) {
        return `${imc} Tienes obesidad grado I`;
    }
    if (imc >= 35 && imc <= 39.9) {
        return `${imc} Tienes obesidad grado II`;
    }
    if (imc >= 40) {
        return `${imc} Tienes obesidad grado III (mórbida)`;
    }
}
