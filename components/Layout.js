import Navbar from './Navbar'
import Resume from './Resume';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Layout = ({ children }) => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease',
        })
    }, [])
    return (
        <div className="content">
            <Navbar />
            {children}
            <Resume />
        </div>
    );
}

export default Layout;