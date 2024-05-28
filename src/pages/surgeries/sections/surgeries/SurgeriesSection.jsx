import './surgeriesSection.css'

import logo from '/assets/logos/logo-dr-herrera-cirujano-bariatrico-by-mavri.png'

import firstImage1 from '/assets/images/surgeries/image-surgery-1.png'
import firstImage2 from '/assets/images/surgeries/image-surgery-2.png'
import firstImage3 from '/assets/images/surgeries/image-surgery-3.png'

function SurgeriesSection() {
    return (
        <section className='surgeries-section'>

            <img src={logo} alt="Logo Dr. Wilmar Herrera" className='logo' />
            <picture>
                <source srcSet={firstImage3} media="(min-width: 1280px)" />
                <source srcSet={firstImage2} media="(min-width: 745px) and (max-width: 1279px)" />
                <source srcSet={firstImage1} media="(max-width: 744px)" />
                <img src={firstImage1} alt="Dr. Wilmar Herrera" className='first-image' />
            </picture>

        </section>
    );
}

export default SurgeriesSection;