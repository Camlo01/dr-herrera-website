import React, { useEffect, useState } from 'react';

import './calculatorWidget.css'

import IMCIcon from '/assets/icons/IMC-icon.png'

function CalculatorWidget() {

    const [isClosed, setIsClosed] = useState(false);
    const [btnActiom, setBtnAction] = useState('')

    const textBehaviorAction = () => {
        setBtnAction((window.innerWidth >= 744) ? "Realizar test" : "Calcula tu índice de masa corporal")
    }

    useEffect(() => {
        textBehaviorAction()
        addEventListener("resize", textBehaviorAction);
    }, [])

    const handleClose = () => {
        setIsClosed(true);
    };

    const handleMouseEnter = () => {
        setIsClosed(false);
    };

    const handleTakeTest = () => {
        setIsClosed(true);
    }

    return (

        <div className={`calculator-widget ${isClosed ? 'closed' : ''}`}
            onMouseEnter={handleMouseEnter}
        >
            <button type='button' onClick={handleClose}>X</button>
            <img src={IMCIcon} alt="Indicator icon" />
            <h2>Calcula tu IMC</h2>
            <p>Determina con ayuda de nuestra calculadora si estás dentro de tu peso ideal (índice de masa corporal)</p>
            <h3 onClick={handleTakeTest}>
                {/* href for set the id of the section with the imc calculator */}
                <a href="/#calculadora">{btnActiom}</a>
            </h3>
        </div>

    );
}

export default CalculatorWidget;