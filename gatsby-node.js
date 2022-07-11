const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsTest {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsTest.edges.map(({ node: work }) => {
        createPage({
          path: `/${work.slug}`,
          component: path.resolve(`./src/templates/test.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })
}
