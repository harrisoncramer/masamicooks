import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RecipeIndex extends React.Component {
  render() {
    const recipes = get(this, 'props.data.allContentfulRecipe.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Recipes" />
        <h1>Recipes</h1>
        <ArticlePreview posts={recipes} />
      </Layout>
    )
  }
}

export default RecipeIndex

export const pageQuery = graphql`
  query RecipeIndexQuery {
    allContentfulRecipe(sort: { fields: [date], order: DESC }) {
      nodes {
        title
        slug
        date(formatString: "MMMM Do, YYYY")
        categories
        mainImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
      }
    }
  }
`
