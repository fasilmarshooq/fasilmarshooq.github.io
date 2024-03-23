import * as React from "react"

// import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <div>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
