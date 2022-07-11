const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
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
      result.data.allDatoCmsProject.edges.map(({ node: work }) => {
        createPage({
          path: `/${work.url}`,
          component: path.resolve(`./src/templates/project.js`),
          context: {
            url: work.url,
          },
        })
      })
      resolve()
    })
  })
}
