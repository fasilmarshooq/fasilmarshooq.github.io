/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children, article, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = "https://fasilmarshooq.github.io"
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={`${siteUrl}/F.png`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      
      {/* Additional meta tags */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap-index.xml" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="https://fasilmarshooq.github.io/sitemap-index.xml" />
      
      {children}
    </>
  )
}

export default Seo
