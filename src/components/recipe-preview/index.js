import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Tags from '../tags'

const RecipeMetadata = function ({ recipe }) {
  console.log(recipe);
  return (
    <div className="recipe-metadata p-2">
      <p className="font-display text-xl">{recipe.title}</p>
      <small className="meta">{recipe.summary}</small>
      <Tags tags={recipe.tags} />
    </div>
  )
}
const ArticlePreview = ({ recipes }) => {
  return (
      <div className="grid lg:gap-4 lg:grid-cols-4 md:gap-3 md:grid-cols-3 sm:grid-cols-2 gap-2 max-w-max m-auto">
        {recipes &&
          recipes.map((recipe) => {
            return (
              <div key={recipe.slug} className="image-wrapper relative group">
                <Link to={`/recipe/${recipe.slug}`}>
                  <GatsbyImage
                    className="md:hover:cursor-pointer transition group-hover:opacity-50 duration-300 w-full"
                    alt={recipe.title}
                    image={recipe.mainImage.gatsbyImageData}
                    title={recipe.title}
                  />
                  <RecipeMetadata recipe={recipe}/>
                </Link>
              </div>
            )
          })}
      </div>
  )
}

export default ArticlePreview
