import * as React from "react"
import { Link, graphql, navigate, useStaticQuery } from "gatsby"
import * as blogStyles from "./styles/blog.module.css"

const PostListLayout = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
        nodes {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            description
          }
          fields {
            slug
          }
          body
          excerpt(pruneLength: 140)
        }
      }
    }
  `)
  const nodes = data?.allMdx?.nodes
  const estimateReadTime = body => {
    const wordCount = body?.trim().split(/\s+/).filter(Boolean).length || 0
    return `${Math.max(1, Math.ceil(wordCount / 220))} min read`
  }

  const handleCardClick = (event, url) => {
    if (event.target.closest("a")) return
    navigate(url)
  }

  const handleCardKeyDown = (event, url) => {
    if (event.target.closest("a")) return
    if (event.key !== "Enter" && event.key !== " ") return
    event.preventDefault()
    navigate(url)
  }

  return (
    <section className={blogStyles.articles}>
      {nodes.map(post => {
        const title = post.frontmatter.title || post.fields.slug
        const date = post.frontmatter.date
        const excerpt = post.frontmatter.description || post.excerpt
        return (
          <article
            aria-label={`Open ${title}`}
            className={blogStyles.article}
            data-card-url={post.fields.slug}
            data-clickable-card
            key={post.fields.slug}
            onClick={event => handleCardClick(event, post.fields.slug)}
            onKeyDown={event => handleCardKeyDown(event, post.fields.slug)}
            tabIndex={0}
          >
            <div className={blogStyles.articleMeta}>
              <small className={blogStyles.date}>{date}</small>
              <small>{estimateReadTime(post.body)}</small>
            </div>
            <h2 className={blogStyles.articleTitle}>
              <Link to={post.fields.slug} itemProp="url">
                {title}
              </Link>
            </h2>
            <p className={blogStyles.articleExcerpt}>{excerpt}</p>
            <div className={blogStyles.tags}>
              {post.frontmatter.tags.map((tag, i) => (
                <Link key={i} to={`/tags/${tag}`} className={blogStyles.tag}>
                  {tag}
                </Link>
              ))}
            </div>
            <Link className={blogStyles.readLink} to={post.fields.slug}>
              Read article
            </Link>
          </article>
        )
      })}
    </section>
  )
}

export default PostListLayout
