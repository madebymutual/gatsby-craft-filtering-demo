const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            craft {
              entries(section: "newsIndex") {
                ... on craft_newsIndex_newsIndex_Entry {
                  id
                }
              }
              categories(group: "newsCategories") {
                ... on craft_newsCategories_Category {
                  id
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.craft.entries.forEach(entry => {
          createPage({
            path: `/news/`,
            component: path.resolve("./src/templates/news.js"),
          })
          resolve()
        })

        result.data.craft.categories.forEach(category => {
          createPage({
            path: `/news/${category.slug}/`,
            component: path.resolve("./src/templates/news.js"),
            context: {
              slug: category.slug,
            },
          })
          resolve()
        })
      })
    )
  })
}
