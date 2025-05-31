import Footer from '../components/main/Footer';
import Navbar from '../components/main/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <main>
            <Navbar/>
            <div className='min-h-screen'>
                <Outlet/>
            </div>
            <Footer/>
        </main>
    );
};

export default MainLayout;