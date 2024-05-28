import { Link } from 'react-router-dom';

import './seeMore.css'

function SeeMore() {
    return (
        <section className='see-more-section'>

            <div className='body'>
                <button><Link to={'/Cirugias'}>Conocer Más</Link></button>
                <h2>Conoce más sobre la cirugía bariátrica</h2>
            </div>
        </section >
    );
}

export default SeeMore;