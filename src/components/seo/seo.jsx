import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, article }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);

    const {
        defaultTitle,
        titleTemplate,
        defaultDescription,
        siteUrl,
        twitterUsername,
    } = site.siteMetadata;

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname}`,
    };

    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            {/* <meta name="image" content={seo.image} /> */}

            {seo.url && <meta property="og:url" content={seo.url} />}

            {(article ? true : null) && <meta property="og:type" content="article" />}

            {seo.title && <meta property="og:title" content={seo.title} />}

            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}

            <meta name="twitter:card" content="summary_large_image" />

            {twitterUsername && (
                <meta name="twitter:creator" content={twitterUsername} />
            )}

            {seo.title && <meta name="twitter:title" content={seo.title} />}

            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}

            {seo.image && <meta name="twitter:image" content={seo.image} />}

            <script src="https://kit.fontawesome.com/44207887b0.js" crossorigin="anonymous"></script>

            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0" nonce="0TOUz86t"></script>

            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        </Helmet>
    );
};

export default SEO;

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    article: PropTypes.bool,
};

SEO.defaultProps = {
    title: null,
    description: null,
    article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        twitterUsername
      }
    }
  }
`;