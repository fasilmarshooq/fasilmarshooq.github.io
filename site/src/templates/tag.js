import * as React from "react"
import { Link, graphql } from "gatsby"
import TagLayout from "../components/tag-layout"
import * as blogStyles from "../components/styles/blog.module.css"

const TagIndex = ({ data, pageContext }) => {
  const siteTitle = "Fasil Marshooq"
  const posts = data.allMdx.nodes
  const { tag } = pageContext

  if (posts.length === 0) {
    return (
      <TagLayout headerTitle={siteTitle} title={tag}>
        <p>No blog posts found.</p>
      </TagLayout>
    )
  }
  return (
    <TagLayout headerTitle={siteTitle} title={tag}>
      {posts.map(node => {
        const title = node.frontmatter.title || node.fields.slug
        const date = node.frontmatter.date
        return (
          <article className={blogStyles.article} key={node.fields.slug}>
            <h2 className={blogStyles.articleTitle}>
              <Link to={node.fields.slug} itemProp="url">
                {title}
              </Link>
            </h2>
            <small className={blogStyles.date}>{date}</small>
            <div className={blogStyles.tags}>
              {node.frontmatter.tags.map((tag, i) => (
                <Link key={i} to={`/tags/${tag}`} className={blogStyles.tag}>
                  {tag}
                </Link>
              ))}
            </div>
          </article>
        )
      })}
    </TagLayout>
  )
}

export default TagIndex

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
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
      }
    }
  }
`
