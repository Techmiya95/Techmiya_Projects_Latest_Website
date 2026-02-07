import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, image, type = 'website' }) => {
    const siteUrl = 'https://www.techmiyaprojects.com';
    const defaultTitle = 'Best Final Year Projects Center Near Me | Techmiya Projects';
    const defaultDescription = 'Techmiya Projects is the best final year project center in Bangalore. Premium project training for IEEE, AI, ML, IoT, and engineering projects with placement support.';
    const defaultImage = `${siteUrl}/images/logo.png`;

    const fullTitle = title ? `${title} | Techmiya Projects` : defaultTitle;
    const fullUrl = canonical ? canonical : siteUrl + window.location.pathname;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name='description' content={description || defaultDescription} />
            <meta name='keywords' content={keywords} />
            <link rel='canonical' href={fullUrl} />
            <link rel='alternate' hreflang='en' href={fullUrl} />
            <html lang="en" />

            {/* Open Graph / Facebook */}
            <meta property='og:type' content={type} />
            <meta property='og:url' content={fullUrl} />
            <meta property='og:title' content={fullTitle} />
            <meta property='og:description' content={description || defaultDescription} />
            <meta property='og:image' content={image || defaultImage} />

            {/* Twitter */}
            <meta property='twitter:card' content='summary_large_image' />
            <meta property='twitter:url' content={fullUrl} />
            <meta property='twitter:title' content={fullTitle} />
            <meta property='twitter:description' content={description || defaultDescription} />
            <meta property='twitter:image' content={image || defaultImage} />
        </Helmet>
    );
};

export default SEO;
