import { Suspense } from 'react'
import { Outlet } from "react-router-dom";

import NavegationBar from '../NavegationBar/NavegationBar'
import Loading from '../Loading/Loading';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

export default function Layout() {

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