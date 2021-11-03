import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const recipes = get(this, 'props.data.allContentfulRecipe.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    return (
      <Layout location={this.props.location}>
        <ArticlePreview posts={recipes} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulRecipe(sort: { fields: [date], order: DESC }) {
      nodes {
        slug
        servings
        prepTime
        optionalIngredients
        summary
        title
        date
        content {
          raw
        }
        mainImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
        }
      }
    }
  }
`
