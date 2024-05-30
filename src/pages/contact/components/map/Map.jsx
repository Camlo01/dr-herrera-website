import React, { useEffect, useState } from 'react';
import './Map.css';

function Map() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getDimensions = () => {
        if (width >= 1280) return { width: 1182, height: 370 };
        if (width >= 744) return { width: 487, height: 285 };
        return { width: 361, height: 270 };
    };

    const { width: iframeWidth, height: iframeHeight } = getDimensions();

    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.4337544063224!2d-73.64303212408238!3d4.134752195839025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e0f77b0150f%3A0x115198da71f909b0!2sPrimavera%20Urbana%20Centro%20Comercial!5e0!3m2!1ses!2sco!4v1717019773048!5m2!1ses!2sco"
            title="Google Maps"
            width={iframeWidth}
            height={iframeHeight}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
}

export default Map;
