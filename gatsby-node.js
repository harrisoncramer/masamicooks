const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for recipe
  const recipeTemplate = path.resolve('./src/templates/recipe.js')
  const blogTemplate = path.resolve('./src/templates/blog.js')

  const result = await graphql(
    `
      {
        allContentfulRecipe {
          nodes {
            title
            slug
          }
        }
        allContentfulBlog {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const recipes = result.data.allContentfulRecipe.nodes
  const blogs = result.data.allContentfulBlog.nodes

  // Create recipe pages
  // But only if there's at least one recipe in Contentful
  // The `context` is available in the template as a prop and as a variable in GraphQL

  if (recipes.length > 0) {
    recipes.forEach((recipe, index) => {
      const previousRecipeSlug = index === 0 ? null : recipes[index - 1].slug
      const nextRecipeSlug =
        index === recipes.length - 1 ? null : recipes[index + 1].slug

      createPage({
        path: `/recipe/${recipe.slug}/`,
        component: recipeTemplate,
        context: {
          slug: recipe.slug,
          previousRecipeSlug,
          nextRecipeSlug,
        },
      })
    })
  }

  if (blogs.length > 0) {
    blogs.forEach((blog, index) => {
      const previousBlogSlug = index === 0 ? null : blog[index - 1].slug
      const nextBlogSlug =
        index === blogs.length - 1 ? null : blog[index + 1].slug

      createPage({
        path: `/blog/${blog.slug}/`,
        component: blogTemplate,
        context: {
          slug: blog.slug,
          previousBlogSlug,
          nextBlogSlug,
        },
      })
    })
  }
}
