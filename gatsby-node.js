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
    // console.log(result.data.graphCMSData.workshops.length)
    result.data.graphCMSData.workshops.forEach(workshop => {
      createPage({
        path: `workshops/${workshop.slug}`,
        component: path.resolve(`./src/pages/workshop.js`),
        context: {
          workshop,
        },
      })

      // console.log(workshop.slug)
    })
  })
}
