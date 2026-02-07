import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    canonical,
    image,
    type = 'website',
    author = 'Techmiya Projects'
}) => {
    const siteUrl = 'https://www.techmiyaprojects.com';
    const defaultTitle = 'Best Final Year Projects Center Bangalore | IEEE, AI, ML, IoT';
    const defaultDescription = 'Techmiya Projects is the best final year project center in Bangalore. Specialized in IEEE, AI, ML, IoT, and Engineering projects with full documentation and guidance.';
    const defaultKeywords = 'final year projects, IEEE projects, project center bangalore, AI projects for students, ML projects, IoT projects, engineering projects, Techmiya Projects';
    const defaultImage = `${siteUrl}/images/logo.png`;

    const fullTitle = title ? `${title} | Techmiya Projects` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const fullUrl = canonical ? canonical : siteUrl + (window.location.pathname === '/' ? '' : window.location.pathname);
    const metaImage = image || defaultImage;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name='description' content={metaDescription} />
            <meta name='keywords' content={metaKeywords} />
            <meta name='author' content={author} />
            <meta name='theme-color' content='#112c66' />
            <link rel='canonical' href={fullUrl} />
            <link rel='alternate' hreflang='en' href={fullUrl} />
            <html lang="en" />

            {/* Open Graph / Facebook */}
            <meta property='og:type' content={type} />
            <meta property='og:url' content={fullUrl} />
            <meta property='og:title' content={fullTitle} />
            <meta property='og:description' content={metaDescription} />
            <meta property='og:image' content={metaImage} />
            <meta property='og:site_name' content='Techmiya Projects' />

            {/* Twitter */}
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={fullUrl} />
            <meta property='twitter:title' content={fullTitle} />
            <meta property='twitter:description' content={metaDescription} />
            <meta property='twitter:image' content={metaImage} />

            {/* Security/SEO - Force HTTPS Meta (Optional, but good for some browsers) */}
            <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Helmet>
    );
};

export default SEO;
