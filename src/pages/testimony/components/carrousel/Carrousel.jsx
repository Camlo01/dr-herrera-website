import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carrousel.css';

function Carrousel() {
    const settings = {
        className: "",
        lazyLoad: false,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        beforeChange: () => {
            const videos = document.querySelectorAll("video");
            videos.forEach(video => {
                video.pause();
            });
        }
    };

    const widthVideo = '253px'
    const heightVideo = '450px'

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {/* First Case */}
                <div className="card">
                    <div className="content-container">
                        <video height={heightVideo} width={widthVideo} controls >
                            <source src={`./assets/videos/testimony/Testimonio-video-1.mp4`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <div>
                        <h3><b>Peso Perdido:</b> -48 KG</h3>
                        <hr />
                        <p>En esta oportunidad esta paciente nos cuenta su experiencia después de un año...</p>
                    </div>
                </div>

                {/* Second Case */}
                <div className="card">
                    <div className="content-container">
                        <video height={heightVideo} width={widthVideo} controls >
                            <source src={`./assets/videos/testimony/Testimonio-video-2.mp4`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <div>
                        <h3><b>Peso Perdido:</b> -30 KG</h3>
                        <hr />
                        <p>Juan David después de 9 meses nos cuenta que inicio su procedo debido a...</p>
                    </div>
                </div>

                {/* Third Case */}
                <div className="card">
                    <div className="content-container">
                        <video height={heightVideo} width={widthVideo} controls >
                            <source src={`./assets/videos/testimony/Testimonio-video-3.mp4`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <div>
                        <h3><b>Peso Perdido:</b> -33 KG</h3>
                        <hr />
                        <p>Conoce el caso de nuestro paciente que pesando 127 kilos, apenas 3 meses después de su cirugía logró bajar 33 kilos...</p>
                    </div>
                </div>

                {/* Fourth Case */}
                <div className="card">
                    <div className="content-container">
                        <video height={heightVideo} width={widthVideo} controls>
                            <source src={`./assets/videos/testimony/Testimonio-video-4.mp4`} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                    <div>
                        <h3><b>Peso Perdido:</b> -30 KG</h3>
                        <hr />
                        <p>Conoce la historia de nuestro paciente Juan David que en segundo slide nos cuenta cómo ha sido su experiencia y el porqué decidió operarse</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Carrousel;
