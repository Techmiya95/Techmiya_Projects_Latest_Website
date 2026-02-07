import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingSocial from './FloatingSocial';
import SEO from './common/SEO';

function Layout() {
    return (
        <>
            <SEO />
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
