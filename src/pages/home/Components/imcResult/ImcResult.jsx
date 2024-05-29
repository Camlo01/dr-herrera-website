import Measurer from "./Measurer";

import './imcResult.css'

function ImcResult({ imcResult }) {

    return (
        <div className="imc-result" id="imc-result">
            <h3>Tu resultado de IMC</h3>
            <div className="measure-container">
                <Measurer imc={imcResult} />
            </div>
            <h4>IMC: {(imcResult > 100) ? '+100' : imcResult}</h4>
            <div className="result">
                <p>{diagnostic(imcResult)}</p>
            </div>
            <div className="diagnostic">
                <hr />
                <p> {comentary(imcResult)}</p>
            </div>
        </div>
    );
}

export default ImcResult;

function diagnostic(imc) {

    if (imc == 0) {
        return `_`
    }

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

    if (imc == 0) {
        return `- Aquí aparecerá el resultado de tu nivel de índice de masa corporal... `
    }

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

