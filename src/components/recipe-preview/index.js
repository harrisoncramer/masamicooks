import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const RecipeMetadata = function ({ recipe }) {
  return (
    <div className="recipe-metadata p-2">
      <p className="font-display text-app-black text-xl decoration-app-theme underline">
        {recipe.title}
      </p>
    </div>
  )
}
const RecipePreview = ({ recipes }) => {
  return (
    <div className="grid gap-6 gap-y-8 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-w-max m-auto">
      {recipes &&
        recipes.map((recipe) => {
          return (
            <div key={recipe.slug} className="image-wrapper relative group">
              <Link to={`/recipe/${recipe.slug}`}>
                <GatsbyImage
                  className="md:hover:cursor-pointer transition md:group-hover:opacity-50 duration-300 w-full"
                  alt={recipe.title}
                  image={recipe.mainImage.gatsbyImageData}
                  title={recipe.title}
                />
                <RecipeMetadata recipe={recipe} />
              </Link>
            </div>
          )
        })}
    </div>
  )
}

export default RecipePreview
