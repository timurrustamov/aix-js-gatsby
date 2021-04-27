import React, { FunctionComponent } from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';
import { useLocation } from '@reach/router';
import urlJoin from 'url-join';

interface SeoQueryResponse {
  site: {
    siteMetadata: {
      siteUrl: string;
    };
  };
  file: {
    publicURL: string;
  };
}

const SEO_QUERY = graphql`
  query SeoQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    file(relativePath: { eq: "icon.png" }) {
      publicURL
    }
  }
`;

interface SeoProps {
  title: string;
  description: string;
}

const Seo: FunctionComponent<SeoProps> = (props) => {
  const { title, description } = props;

  const { site, file } = useStaticQuery<SeoQueryResponse>(SEO_QUERY);
  const { pathname } = useLocation();

  const url = urlJoin(site.siteMetadata.siteUrl, pathname);
  const imageSrc = urlJoin(site.siteMetadata.siteUrl, file.publicURL);

  return (
    <Helmet>
      <html lang="fr" />

      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageSrc} />
    </Helmet>
  );
};

export default Seo;
