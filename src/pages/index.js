import React from 'react'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const RootIndex = function ({ location, data }) {
  const recipes = data.allContentfulRecipe.nodes;
    return (
      <Layout location={location}>
        <div className="image-wrapper grid gap-2 grid-cols-4 p-2">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <div key={recipe.slug}>
                <Link to={`/recipe/${recipe.slug}`}>
                  <GatsbyImage
                    alt=""
                    image={recipe.mainImage.gatsbyImageData}
                  />
                </Link>
              </div>
            )
          })}
      </div>
      </Layout>
    )
};

export default RootIndex

export const mainPageQuery = graphql`
  query RootPageQuery {
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
