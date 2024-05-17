import React from "react";

// Sections
import IntroductionTestimony from "./sections/Introduction/IntroductionTestimony";
import RealCases from "./sections/realCases/RealCases";
import Invitation from "./sections/invitation/Invitation";

function Testimony() {
    return (
        <section>
            <IntroductionTestimony />
            <RealCases />
            <Invitation />
        </section>
    );
}

export default Testimony;