import * as React from "react"
import { Link } from "gatsby"
import "./styles/common.css"
import * as blogStyles from "./styles/blog.module.css"
import Seo from "./seo"

const TagLayout = ({ headerTitle, title, children }) => {
  return (
    <main>
      <Seo title={`Tag: ${title}`} />
      <header>
        <Link className={blogStyles.siteTitle} to="/">
          {headerTitle}
        </Link>
      </header>
      <h2>Tag: {title}</h2>
      <section className={blogStyles.articles}>{children}</section>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  )
}

export default TagLayout
