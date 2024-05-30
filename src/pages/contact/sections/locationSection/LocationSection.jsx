import Map from '../../components/map/Map';

import './locationSection.css'

import logoPrimavera from '/assets/icons/logo-primavera-urbana.png'

function LocationSection() {
    return (
        <div className="location-section">

            <section className="cc-location">
                <p>Estamos Ubicados en el Centro Comercial <br /> <b>Primavera Urbana</b></p>
                <img src={logoPrimavera} alt="Logo primavera" />
            </section>

            <section className='map'>

                <div className='container'>
                    <div className='title'>
                        <h2>Ubicación</h2>
                        <p>Usa el mapa de Google para ver cómo puedes llegar</p>
                    </div>

                    <div className='map-container'>
                        <Map />
                        <div className='body-container'>
                            <div className='body'>
                                <h3>Primavera Urbana</h3>
                                <p>- Consultorio 614 -</p>

                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default LocationSection;