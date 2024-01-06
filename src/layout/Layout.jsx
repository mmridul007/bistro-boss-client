
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/footer/Footer';
import Navbar from '../components/Home/navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;