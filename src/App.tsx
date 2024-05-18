// import { useState, useEffect } from 'react'
// import Loader from './common/Loader';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Platforms from './components/Platforms';
import Solutions from './pages/Services';
import Cta from './components/CTA';
import Clients from './pages/Clients';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Careers from './pages/Careers';





function App() {

    // const [loading, setLoading] = useState<boolean>(true);
    // useEffect(() => {
    //     setTimeout(() => setLoading(false), 1000);
    // }, []);
    // return loading ? (
    //   <Loader/>
    // ) : (
    return (
        <>
            <Navbar/>
            <Home/>
            <Platforms/>
            <Solutions/>
            <Cta/>
            <Clients/>
            <About/>
            <Contact/>
            <Careers/>
            <Footer/>
        </>
    )
}

export default App
