import React from "react";

// Sections
import IntroductionSection from "./sections/introductionSection/IntroductionSection.jsx";
import ImcCalculatorSection from './sections/imcCalculatorSection/ImcCalculatorSection.jsx'
import SurgerySection from './sections/surgerySection/SurgerySection.jsx'
import TestimonySection from "./sections/testimonySection/TestimonySection.jsx";
import SocialSection from "./sections/socialSection/SocialSection.jsx";

function Home() {

    return (
        <>
            <IntroductionSection />
            <SurgerySection />
            <ImcCalculatorSection />
            <TestimonySection />
            <SocialSection />
        </>
    );
}

export default Home;