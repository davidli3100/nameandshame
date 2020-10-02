import React from "react";
import { Helmet } from "react-helmet";

const SEO = () => (
    <Helmet>
        <title>Name and Shame</title>
        <meta
            name="description"
            content="Anonymously report and browse incidents of workplace discrimination and toxicity"
        />
        {/* Open Graph Protocol */}
        <meta property="og:title" content="Name and Shame" />
        <meta
            property="og:description"
            content="Anonymously report and browse incidents of workplace discrimination and toxicity"
        />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta property="twitter:title" content="Name and Shame" />
        <meta
            property="twitter:description"
            content="Anonymously report and browse incidents of workplace discrimination and toxicity"
        />
    </Helmet>
);

export default SEO;
