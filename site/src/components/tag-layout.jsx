import * as React from "react"
import "./styles/common.css"
import * as blogStyles from "./styles/blog.module.css"
import BackLink from "./common/BackLink"

const TagLayout = ({ headerTitle, title, children }) => {
  return (
    <main>
      <BackLink />
      <h2>Tag: {title}</h2>
      <section className={blogStyles.articles}>{children}</section>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  )
}

export default TagLayout
