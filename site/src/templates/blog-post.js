import * as React from "react"
import { graphql } from "gatsby"
import * as postStyles from "../components/styles/post.module.css"
import PostLayout from "../components/post-layout"

import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/code-block"

// import { propTypes } from "gatsby-plugin-image/dist/src/components/gatsby-image.server"

const shortcodes = {} // Provide common components here
const components = {
  pre: CodeBlock,
}

const BlogPostTemplate = ({ data, location, children }) => {
  const post = data.mdx
  const siteTitle = "Fasil Marshooq"
  return (
    <PostLayout
      location={location}
      headerTitle={siteTitle}
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
      date={post.frontmatter.date}
      tags={post.frontmatter.tags}
    >
      <div
        className={postStyles.content}
        id="md-content"
        itemProp="articleBody"
      >
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </PostLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query GetPost($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
