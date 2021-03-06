import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import ogImage from "../../images/contact/me.jpg"

const SEO = ({ title, description, article }) => {
    const { pathname } = useLocation();
    const { site } = useStaticQuery(query);
    const {
        siteTitle,
        titleTemplate,
        siteDescription,
        siteUrl,
        twitterUsername,
    } = site.siteMetadata;
    const seo = {
        title: title || siteTitle,
        description: description || siteDescription,
        url: `${siteUrl}${pathname}`,
        twitterUsername: twitterUsername
    };
    return (
        <Helmet title={seo.title} titleTemplate={titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={ogImage} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && <meta property="og:type" content="article" />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && <meta property="og:description" content={seo.description} />}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && <meta name="twitter:creator" content={twitterUsername} />}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && <meta name="twitter:description" content={seo.description} />}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v9.0" nonce="0TOUz86t"></script>
            <script src="https://kit.fontawesome.com/44207887b0.js" crossorigin="anonymous"></script>
            <meta property="og:image" content={`https://saadbaigg.github.io/portfolio/${ogImage}`} />
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
        siteTitle: title
        titleTemplate
        siteDescription: description
        siteUrl: siteUrl
        twitterUsername
      }
    }
  }
`;