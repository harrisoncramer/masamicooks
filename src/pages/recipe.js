import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RecipePage extends React.Component {
  render() {
    const recipes = get(this, 'props.data.allContentfulRecipe.nodes')

    return (
      <Layout location={this.props.location}>
        <ArticlePreview recipes={recipes} />
      </Layout>
    )
  }
}

export default RecipePage

export const recipePageQuery = graphql`
  query RecipePageQuery {
    allContentfulRecipe(sort: { fields: [date], order: DESC }) {
      nodes {
        slug
        servings
        prepTime
        summary
        title
        date
        content {
          raw
        }
        mainImage {
          gatsbyImageData
        }
      }
    }
  }
`
