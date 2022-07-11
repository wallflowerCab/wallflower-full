const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
      {
        allDatoCmsProject {
          edges {
            node {
              url
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsProject.edges.forEach(({ node }) => {
        createPage({
          path: `${node.url}`,
          component: path.resolve(`./src/templates/project.js`),
          context: {
            url: node.url,
          },
        })
      })

    })

}
