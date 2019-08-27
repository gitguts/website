const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      graphCMSData {
        workshops {
          slug
          name
          description {
            html
          }
          materials
          prework
        }
      }
    }
  `).then(result => {
    result.data.graphCMSData.workshops.forEach(workshop => {
      createPage({
        path: `workshops/${workshop.slug}`,
        component: path.resolve(`./src/dynamic/workshop.js`),
        context: {
          workshop: workshop,
        },
      })
    })
  })
}
