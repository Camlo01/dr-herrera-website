import React, { lazy } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom'
import Layout from './components/Layout/Layout'

// Pages
const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Surgeries = lazy(() => import('./pages/surgeries/Surgeries'))
const Testimony = lazy(() => import('./pages/testimony/Testimony'))
const Conatct = lazy(() => import('./pages/contact/Contact'))
const NotFonud = lazy(() => import('./components/NotFound/NotFound'))

function App() {

    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/Quien-Soy' element={<About />} />
                        <Route path='/Cirugias' element={<Surgeries />} />
                        <Route path='/Testimonios' element={<Testimony />} />
                        <Route path='/Contacto' element={<Conatct />} />
                        <Route path='*' element={<NotFonud />}></Route>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;