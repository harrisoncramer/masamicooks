import React from 'react'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const RootIndex = function ({ location, data }) {
  const recipes = data.allContentfulRecipe.nodes;
    return (
      <Layout location={location}>
        <div className="image-wrapper grid lg:gap-4 lg:grid-cols-4 md:gap-3 md:grid-cols-3 sm:grid-cols-2 gap-2 p-2 max-w-max m-auto">
        {recipes &&
          recipes.map((recipe, i) => {
            return (
              <div key={recipe.slug}>
                <div><p></p></div>
                <Link to={`/recipe/${recipe.slug}`} class="image-wrapper" >
                  <GatsbyImage
                    class="hover:cursor-pointer transition hover:scale-105 duration-300 motion-reduce:transition-none motion-reduce:transform-none"
                    alt={recipe.title}
                    image={recipe.mainImage.gatsbyImageData}
                    title={recipe.title}
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
