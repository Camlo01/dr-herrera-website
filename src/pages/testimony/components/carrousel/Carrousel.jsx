import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './carrousel.css'

function Carrousel() {
    const settings = {
        className: "",
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        
        autoplay: true,  
        autoplaySpeed: 3000
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="card">
                    <img src="" alt="Photography" />
                    <div>
                        <h3> <b>Peso Perdido:</b> -20 KG </h3>
                        <hr />
                        <p>"La cirugía bariátrica cambió mi vida por completo. Después de años de luchar con mi peso, finalmente he encontrado una solución que funciona. Me siento más saludable, más feliz y más segura de mí misma. <b> ¡Gracias al equipo de cirugía bariátrica por su increíble apoyo!"</b></p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="Photography" />
                    <div>
                        <h3> <b>Peso Perdido:</b> -20 KG </h3>
                        <hr />
                        <p>"La cirugía bariátrica cambió mi vida por completo. Después de años de luchar con mi peso, finalmente he encontrado una solución que funciona. Me siento más saludable, más feliz y más segura de mí misma. <b> ¡Gracias al equipo de cirugía bariátrica por su increíble apoyo!"</b></p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="Photography" />
                    <div>
                        <h3> <b>Peso Perdido:</b> -20 KG </h3>
                        <hr />
                        <p>"La cirugía bariátrica cambió mi vida por completo. Después de años de luchar con mi peso, finalmente he encontrado una solución que funciona. Me siento más saludable, más feliz y más segura de mí misma. <b> ¡Gracias al equipo de cirugía bariátrica por su increíble apoyo!"</b></p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Carrousel;