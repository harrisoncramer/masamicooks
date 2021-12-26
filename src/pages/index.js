import React from 'react'
import { graphql } from 'gatsby'

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

const RootIndex = function ({ location, data }) {
  const recipes = data.allContentfulRecipe.nodes
  return (
    <Layout location={location}>
      <div className="image-wrapper grid lg:gap-4 lg:grid-cols-3 md:gap-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 max-w-max m-auto">
        {recipes &&
          recipes.map((recipe, i) => {
            return (
              <div key={recipe.slug} className="image-wrapper relative group">
                <Link to={`/recipe/${recipe.slug}`}>
                  <GatsbyImage
                    className="md:hover:cursor-pointer transition md:group-hover:opacity-20 duration-300 drop-shadow-md w-full"
                    alt={recipe.title}
                    image={recipe.mainImage.gatsbyImageData}
                    title={recipe.title}
                  />
                  <div className="image-description top-1/3 left-0 right-0 absolute z-10 w-3/4 my-0 mx-auto text-xl text-center font-bold font-xl transition opacity-0 md:group-hover:opacity-100">
                    <p className="font-display text-center">{recipe.title}</p>
                  </div>
                </Link>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export default RootIndex

export const mainPageQuery = graphql`
  query RootPageQuery {
    allContentfulRecipe(sort: { fields: [date], order: ASC }) {
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
          gatsbyImageData(aspectRatio: 1)
        }
      }
    }
  }
`
