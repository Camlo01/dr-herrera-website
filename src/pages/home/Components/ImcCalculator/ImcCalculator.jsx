import { useState } from 'react';
import './imcCalculator.css'

// Icons
import personIcon from '/assets/icons/imc-calculator/person.svg'
import weightMachine from '/assets/icons/imc-calculator/weight-machine.svg'

function ImcCalculator({ setImcResult }) {

    const [heightValue, setHeightValue] = useState('')
    const [weightValue, setWeightValue] = useState('')

    const [isMetricSystem, setIsMetricSystem] = useState(true);

    const handleSwitch = () => {
        (isMetricSystem) ? setIsMetricSystem(false) : setIsMetricSystem(true);

        setHeightValue('')
        setWeightValue('')
    }

    const handleCalculateButton = () => {
        let imc = 0;
        setTimeout(() => {
            if (isMetricSystem) {
                imc = calculate_imc_metric(weightValue, heightValue)
                setImcResult(imc)
            } else {
                imc = calculate_imc_anglo(weightValue, heightValue)
                setImcResult(imc)
            }
        }, 450);
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
                        onChange={(e) => { setHeightValue(e.target.value) }} />
                    <label htmlFor="height">{(isMetricSystem) ? "CM" : 'FT'}</label>
                </div>
                <div>
                    <img src={weightMachine} alt="" className='weight-machine' />
                    <input id='weight' type="text"
                        placeholder='Peso'
                        value={weightValue}
                        onChange={(e) => { setWeightValue(e.target.value) }} />
                    <label htmlFor="weight">{(isMetricSystem) ? "KG" : 'LB'}</label>
                </div>
            </div>
            <a href="/#imc-result">
                <button className='calcular' onClick={handleCalculateButton}>CALCULAR</button>
            </a>
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