import Measurer from "./Measurer";

import './imcResult.css'

function ImcResult() {

    const imcResult = `24.2`

    return (
        <div className="imc-result" id="#id-result">
            <h3>Tu resultado de IMC</h3>
            <div className="measure-container">
                <Measurer />
            </div>
            <h4>IMC: {imcResult}</h4>
            <div className="result">
                <p>{diagnostic(imcResult)}</p>
            </div>
            <div className="diagnostic">
                <p>{comentary(imcResult)}</p>
            </div>
        </div>
    );
}

export default ImcResult;

function diagnostic(imc) {

    if (imc < 18.5) {
        return `Peso Bajo`
    }

    if (imc >= 18.5 && imc < 25) {
        return `Peso Normal`
    }

    if (imc >= 25 && imc < 30) {
        return `Sobrepeso`
    }

    if (imc >= 30 && imc < 35) {
        return `Obesidad 1`
    }

    if (imc >= 35 && imc < 40) {
        return `Obesidad 2`
    }

    if (imc >= 40) {
        return `Obesidad 3`
    }

}

function comentary(imc) {

    if (imc < 18.5) {
        return `Tu IMC es bajo. Considera consultar a un profesional de la salud para asesoramiento sobre nutrición y bienestar.`
    }

    if (imc >= 18.5 && imc < 25) {
        return `Tu IMC es normal. Buen trabajo, sigue cuidándote para mantener tu bienestar`
    }

    if (imc >= 25 && imc < 30) {
        return `Tu IMC indica que tienes sobrepeso. Considera adoptar hábitos saludables y realizar actividad física regularmente.`
    }

    if (imc >= 30 && imc < 35) {
        return `Tu IMC indica obesidad clase 1. Es importante tomar medidas para mejorar tu salud.`
    }

    if (imc >= 35 && imc < 40) {
        return `Tu IMC sugiere obesidad severa. Consulta a un profesional de la salud para recibir orientación y apoyo`
    }

    if (imc >= 40) {
        return `Tienes obesidad extrema. La intervención médica puede ser necesaria para mejorar tu salud.`
    }

}