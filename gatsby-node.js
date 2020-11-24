const path = require("path")
const fs = require("fs-extra")
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, "/CNAME"),
    path.join(__dirname, "/public/CNAME")
  )
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  // console.log(`👏Node created of type "${node.internal.type}"`)
  if (node.internal.type === "MarkdownRemark") {
    // const fileNode = getNode(node.parent)
    // console.log("👏", fileNode.relativePath)
    const slug = createFilePath({ node, getNode, basePath: "markdowns" })
    actions.createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/components/page-structures/journal-layout.js`
      ),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}
