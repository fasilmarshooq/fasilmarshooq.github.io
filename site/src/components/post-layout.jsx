import * as React from "react"
import { Link } from "gatsby"
import * as postStyles from "./styles/post.module.css"
import BackLink from "./common/BackLink"

const PostLayout = ({
  headerTitle,
  title,
  description,
  date,
  tags,
  children,
}) => {
  return (
    <main>
      <BackLink />
      <section className={postStyles.article}>
        <div className={postStyles.articleHeader}>
          <h1 className={postStyles.articleTitle}>{title}</h1>
          <p className={postStyles.articleDescription}>{description}</p>
          <div className={postStyles.articleMeta}>
            <small className={postStyles.date}>{date}</small>
            <small>Technical note</small>
          </div>
          <div className={postStyles.tags}>
            {tags?.map((tag, i) => (
              <Link key={i} to={`/tags/${tag}`} className={postStyles.tag}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
        {children}
      </section>
      <footer className={postStyles.articleFooter}>
        <Link to="/">Home</Link>
        <span>&copy; {new Date().getFullYear()} Fasil Marshooq</span>
      </footer>
    </main>
  )
}

export default PostLayout
