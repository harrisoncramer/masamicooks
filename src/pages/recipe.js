import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import RecipePreview from '../components/recipe-preview'
import Search from '../components/search'

const RecipePage = function (props) {
  const [filter, setFilter] = useState(null)
  return (
    <Layout location={props.location}>
      <Search filter={filter} setFilter={setFilter} />
      <RecipePreview
        recipes={props.data.allContentfulRecipe.nodes}
        filter={filter}
      />
    </Layout>
  )
}

export default RecipePage

export const recipePageQuery = graphql`
  query RecipePageQuery {
    allContentfulRecipe(sort: { fields: [date], order: ASC }) {
      nodes {
        slug
        servings
        prepTime
        summary
        title
        date
        categories
        content {
          raw
        }
        mainImage {
          gatsbyImageData(aspectRatio: 1)
        }
      }
    }
  }
`
