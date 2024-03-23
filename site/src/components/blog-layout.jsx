import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as blogStyles from "./styles/blog.module.css"
import * as postStyles from "./styles/post.module.css"
// import "gatsby-prismjs-dracula"
import Seo from "./seo"

const PostListLayout = () => {
  const data = useStaticQuery(graphql`
    query GetAllPosts {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          fields {
            slug
          }
          body
        }
      }
    }
  `)
  const nodes = data?.allMdx?.nodes
  return (
    <section className={blogStyles.articles}>
      {nodes.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const date = post.frontmatter.date
        return (
          <article className={blogStyles.article} key={post.fields.slug}>
            <h2 className={blogStyles.articleTitle}>
              <Link to={post.fields.slug} itemProp="url">
                {title}
              </Link>
            </h2>
            <small className={blogStyles.date}>{date}</small>
            <div className={blogStyles.tags}>
              {post.frontmatter.tags.map((tag, i) => (
                <Link key={i} to={`tags/${tag}`} className={blogStyles.tag}>
                  {tag}
                </Link>
              ))}
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default PostListLayout
