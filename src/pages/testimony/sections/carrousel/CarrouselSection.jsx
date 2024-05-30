import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './carrouselSection.css';

import image1 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-1.jpeg'
import image2 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-2.jpeg'
import image3 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-3.jpeg'
import image4 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-4.jpeg'
import image5 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-5.jpeg'
import image6 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-6.jpeg'
import image7 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-7.jpeg'
import image8 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-8.jpeg'
import image9 from '/assets/images/testimony/whatsapp/WhatsApp-Mensaje-9.jpeg'

const imageData = [
    { id: 1, src: image1, alt: "Surgery Image 1" },
    { id: 2, src: image2, alt: "Surgery Image 2" },
    { id: 3, src: image3, alt: "Surgery Image 3" },
    { id: 4, src: image4, alt: "Surgery Image 4" },
    { id: 5, src: image5, alt: "Surgery Image 5" },
    { id: 6, src: image6, alt: "Surgery Image 6" },
    { id: 7, src: image7, alt: "Surgery Image 6" },
    { id: 8, src: image8, alt: "Surgery Image 6" },
    { id: 9, src: image9, alt: "Surgery Image 6" },
];

function CarrouselSection() {
    var settings = {
        lazyLoad: false,
        dots: true,
        infinite: true,
        speed: 500,
        variableWidth: true,
        slidesToShow: 4,
        initialSlide: 0,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1120,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 810,
                settings: {
                    variableWidth: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],

    };

    return (
        <>
            <section className="carrousel-section">
                <h2>Mensajes de Nuestros Pacientes</h2>
                <div className="slider-container">
                    <Slider {...settings}>
                        {imageData.map(item => (
                            <div key={item.id} className="carrousel-item">
                                <img src={item.src} alt={item.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

export default CarrouselSection;