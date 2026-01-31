import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingSocial from './FloatingSocial';

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            <FloatingSocial />
        </>
    );
}

export default Layout;
