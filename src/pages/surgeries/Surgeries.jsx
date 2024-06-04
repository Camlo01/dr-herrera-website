
// Sections
import IntroductionSection from './sections/introduction/Introduction.jsx'
import OurSurgeries from './sections/ourSurgeries/OurSurgeries.jsx';
import SurgeriesSection from './sections/surgeries/SurgeriesSection.jsx';
import ContactSection from './sections/contact/ContactSection.jsx';

function Surgeries() {
    return (
        <div className='surgeries-page'>
            <IntroductionSection />
            <OurSurgeries />
            <SurgeriesSection />
            <ContactSection />
        </div>
    );
}

export default Surgeries;