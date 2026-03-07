import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav aria-label="breadcrumb" className="breadcrumb-container">
            <div className="breadcrumb-inner">
                <ol className="breadcrumb-list">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const displayName = value
                            .split('-')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ');

                        return last ? (
                            <li key={to} className="breadcrumb-item active" aria-current="page">
                                {displayName}
                            </li>
                        ) : (
                            <li key={to} className="breadcrumb-item">
                                <Link to={to}>{displayName}</Link>
                            </li>
                        );
                    })}
                </ol>
            </div>
            <style dangerouslySetInnerHTML={{
                __html: `
                .breadcrumb-container {
                    padding: 8px 0 4px;
                    background: transparent;
                    position: relative;
                    z-index: 10;
                }
                .breadcrumb-inner {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .breadcrumb-list {
                    display: flex;
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    gap: 6px;
                    flex-wrap: wrap;
                    align-items: center;
                }
                .breadcrumb-item {
                    display: flex;
                    align-items: center;
                    font-size: 0.85rem;
                    color: #64748b;
                }
                .breadcrumb-item a {
                    color: #112c66;
                    text-decoration: none;
                    transition: color 0.2s;
                    font-weight: 500;
                }
                .breadcrumb-item a:hover {
                    color: #00d4ff;
                }
                .breadcrumb-item + .breadcrumb-item::before {
                    content: "/";
                    margin-right: 6px;
                    color: #cbd5e1;
                }
                .breadcrumb-item.active {
                    color: #94a3b8;
                    font-weight: 500;
                }
                @media (max-width: 768px) {
                    .breadcrumb-container {
                        padding: 6px 0 2px;
                    }
                    .breadcrumb-inner {
                        padding: 0 15px;
                    }
                    .breadcrumb-item {
                        font-size: 0.78rem;
                    }
                }
            `}} />
        </nav>
    );
};

export default Breadcrumbs;
