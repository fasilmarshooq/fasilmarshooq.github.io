const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const mdxPages = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve(`./src/templates/blog-post.js`)

  mdxPages.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.fields.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
    })
  })

  const tags = await graphql(`
    query {
      allMdx {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  console.log("-----------------", tags.data.allMdx.group)
  tags.data.allMdx.group.forEach(({ fieldValue }) => {
    createPage({
      path: `/tags/${fieldValue}/`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        tag: fieldValue,
      },
    })
  })
}
