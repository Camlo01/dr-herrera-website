import React from "react";

// Sections
import IntroductionTestimony from "./sections/Introduction/IntroductionTestimony";
import RealCases from "./sections/realCases/RealCases";
import CarrouselSection from "./sections/carrousel/CarrouselSection";
import Invitation from "./sections/invitation/Invitation";

function Testimony() {
    return (
        <section>
            <IntroductionTestimony />
            <RealCases />
            <CarrouselSection />
            <Invitation />
        </section>
    );
}

export default Testimony;