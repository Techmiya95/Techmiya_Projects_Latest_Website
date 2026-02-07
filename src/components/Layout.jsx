import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingSocial from './FloatingSocial';
import SEO from './common/SEO';
import Breadcrumbs from './common/Breadcrumbs';

function Layout() {
    return (
        <>
            <SEO />
            <Header />
            <main style={{ minHeight: '80vh', paddingTop: '100px' }}>
                <Breadcrumbs />
                <Outlet />
            </main>
            <Footer />
            <FloatingSocial />
        </>
    );
}

export default Layout;
