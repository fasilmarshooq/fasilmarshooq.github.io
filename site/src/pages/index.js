import * as React from "react"

import Seo from "../components/seo"
import { HomeLayout } from "../components/HomeLayout/home-layout"

const IndexPage = () => <HomeLayout />

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fasil Marshooq",
  alternateName: "fasilmarshooq",
  url: "https://fasilmarshooq.github.io/",
  image: "https://fasilmarshooq.github.io/F.png",
  jobTitle: "Software Engineer",
  sameAs: [
    "https://github.com/fasilmarshooq",
    "https://www.linkedin.com/in/fasilmarshooq/",
    "https://twitter.com/fasilmarshooq",
  ],
}

export const Head = () => (
  <Seo
    title="Fasil Marshooq (@fasilmarshooq) - Software Engineer"
    description="Fasil Marshooq (@fasilmarshooq) is a software engineer writing about software engineering, distributed systems, AI, and developer tools."
    pathname="/"
    appendSiteTitle={false}
  >
    <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
  </Seo>
)

export default IndexPage
