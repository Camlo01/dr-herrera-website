import React from "react";

// Sections
import AboutDoctorSection from "./sections/aboutDoctor/AboutDoctor";
import YearsExperience from "./sections/yearsExperience/YearsExperience";
import SeeMore from "./sections/seeMore/SeeMore";

function About() {
    return (
        <>
            <AboutDoctorSection />
            <YearsExperience />
            <SeeMore />
        </>
    );
}

export default About;