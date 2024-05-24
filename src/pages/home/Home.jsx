import React from "react";

import IntroductionSection from "./sections/introductionSection/IntroductionSection.jsx";
import ImcCalculatorSection from './sections/imcCalculatorSection/ImcCalculatorSection.jsx'

/**
 * Page content
 * 
 * 1. Introduction
 * 2. SurgerySection
 * 3. CandidateSection
 * 4. TestimonySection
 * 5. SocialSection 
 * 
 * @returns Component 
 */
function Home() {

    return (
        <>
            <div>
                <IntroductionSection />
                <ImcCalculatorSection />
            </div>
        </>
    );
}

export default Home;