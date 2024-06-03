import React, { useEffect, useState } from 'react';
import './instagramProfile.css';

function InstagramProfile() {
    const [widthViewPort, setWidthViewPort] = useState(window.innerWidth);
    const [widthiFrame, setWithiFrame] = useState(310);
    const [heightiFrame, setHeightiFrame] = useState(435);

    useEffect(() => {
        const handleResize = () => {
            setWidthViewPort(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        // Instagram small component
        if (widthViewPort <= 744) {
            setWithiFrame(310);
            setHeightiFrame(435);
        }
        // Instagram medium component
        if (widthViewPort > 744 && widthViewPort < 1280) {
            setWithiFrame(480);
            setHeightiFrame(530);
        }

        // Instagram big component
        if (widthViewPort >= 1280) {
            setWithiFrame(540);
            setHeightiFrame(630);
        }
    }, [widthViewPort]);

    const igProfile = `doc.herrerabariatrico`;
    const InstagramURL = `https://www.instagram.com/${igProfile}/embed`;

    return (
        <div className='instagram-iframe-container'>
            <iframe
                title='Instagram profile'
                src={InstagramURL}
                width={widthiFrame}
                height={heightiFrame}
                scrolling="no" allowTransparency="true"></iframe>
        </div>
    );
}

export default InstagramProfile;
