import * as React from "react"
import { graphql } from "gatsby"
import * as postStyles from "../components/styles/post.module.css"
import PostLayout from "../components/post-layout"

import { MDXProvider } from "@mdx-js/react"
import { InlineCode, CodeBlock } from "../components/code-block"
import Comments from "../components/Comments/comments"

const components = {
  pre: CodeBlock,
  code: InlineCode,
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
        <Comments />
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
