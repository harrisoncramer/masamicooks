import React, { useState } from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Search from "../components/search"

const RecipePage = function(props) {
  const [filter, setFilter] = useState(null);
  return (
    <Layout location={props.location}>
      <Search filter={filter} setFilter={setFilter} />
      <ArticlePreview recipes={props.data.allContentfulRecipe.nodes} filter={filter}/>
    </Layout>
  )
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
