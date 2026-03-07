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
            <main className="main-content" style={{ minHeight: '80vh' }}>
                <Outlet />
            </main>
            <Footer />
            <FloatingSocial />
            <style dangerouslySetInnerHTML={{
                __html: `
                .main-content {
                    padding-top: 170px;
                }
                @media (max-width: 992px) {
                    .main-content {
                        padding-top: 130px;
                    }
                }
                @media (max-width: 768px) {
                    .main-content {
                        padding-top: 85px;
                    }
                }
                @media (max-width: 480px) {
                    .main-content {
                        padding-top: 80px;
                    }
                }
            `}} />
        </>
    );
}

export default Layout;
