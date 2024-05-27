import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from "react-router-dom";

import NavegationBar from '../NavegationBar/NavegationBar'
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

export default function Layout() {

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const yOffset = -35; // Ajuste del margen superior de 100px
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <>
            <NavegationBar />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
            <WhatsAppButton />
            <Footer />
        </>
    );
}