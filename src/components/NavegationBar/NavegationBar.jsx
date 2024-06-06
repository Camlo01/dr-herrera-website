import { useEffect, useState } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import './navegationBar.css'

function NavegationBar() {

    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation()

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        setDocumentTitle(location)
        initGA()
    }, [location])

    return (
        <nav className="navbar">
            <div className="container">
                <div className="icono-izquierdo">
                    <img src="" alt="Bussines Icon" className="icono" />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to={'/'} onClick={toggleMenu}>Inicio</Link></li>
                    <li><Link to={'/Cirugias'} onClick={toggleMenu}>Cirugías</Link></li>
                    <li><Link to={'/Testimonios'} onClick={toggleMenu}>Testimonios</Link></li>
                    <li><Link to={'/Quien-Soy'} onClick={toggleMenu}>Quien Soy</Link></li>
                    <li><Link to={'/Contacto'} onClick={toggleMenu}>Contacto</Link></li>
                </ul>
            </div>

        </nav>
    );
}

export default NavegationBar;

/**
 * Method to set the document title accodinr to the url
 * @param {useLocation instance} location 
 */
function setDocumentTitle(location) {

    const restOfTitle = " | Dr. Wilmar Herrera"

    if (location.pathname === '/') {
        return document.title = 'Inicio' + restOfTitle
    }
    if (location.pathname === '/Quien-Soy') {
        return document.title = 'Quién Soy' + restOfTitle
    }

    if (location.pathname === '/Cirugias') {
        return document.title = 'Cirugías' + restOfTitle
    }

    if (location.pathname === '/Testimonios') {
        return document.title = 'Testimonios' + restOfTitle
    }

    if (location.pathname === '/Contacto') {
        return document.title = 'Contacto' + restOfTitle
    }

    document.title = 'No encontrado' + restOfTitle
}

export const initGA = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-3W2V4BW58N`;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-3W2V4BW58N');
    };
  };
