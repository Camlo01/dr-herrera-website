import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function NotFonudComponent() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div
            style={{
                height: '100vh',
                background: "rgb(24, 77, 152)",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1 style={{
                color: "white",
                fontFamily: 'Nunito',
                fontSize: '3.8rem',
                height: 'fit-content',
                width: 'fit-content',
                margin: 0
            }}>404 - No Encontrado</h1>
        </div>
    );
}

export default NotFonudComponent;