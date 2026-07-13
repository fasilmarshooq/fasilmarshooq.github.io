/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({
  description,
  title,
  children,
  article = false,
  pathname = `/`,
  image,
  noIndex = false,
  appendSiteTitle = true,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            image
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const siteTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl?.replace(/\/$/, ``)
  const normalizedPathname = pathname.startsWith(`/`) ? pathname : `/${pathname}`
  const canonical = `${siteUrl}${normalizedPathname}`
  const resolvedImage = image || site.siteMetadata?.image || `${siteUrl}/F.png`
  const pageTitle =
    appendSiteTitle && title !== siteTitle ? `${title} | ${siteTitle}` : title
  const robots = noIndex ? `noindex, nofollow` : `index, follow`

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={resolvedImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={resolvedImage} />
      
      {/* Additional meta tags */}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      
      {children}
    </>
  )
}

export default Seo
