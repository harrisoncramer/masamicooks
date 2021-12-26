import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/tags'

import './recipe.css'

const RecipeTemplate = function (props) {
  const post = props.data.contentfulRecipe
  const { previous, next } = props.data
  const bodyHtml = documentToReactComponents(JSON.parse(post.content.raw))
  const introHtml = post.introduction
    ? documentToReactComponents(JSON.parse(post.introduction.raw))
    : null
  return (
    <Layout location={props.location}>
      <Seo title={post.title} description={post.summary} />
      <div className="recipeInfo flex flex-col items-center w-full my-6 lg:my-12 text-center mt-24 lg:mt-32 px-4">
        <h1 className="font-display text-app-theme text-4xl lg:text-5xl mb-4">
          {post.title}
        </h1>
        <time dateTime={post.date} className="font-sans block mb-2">
          <small>{post.date}</small>
        </time>
        <Tags tags={post.categories} />
      </div>
      <div className="article max-w-5xl m-auto p-2">
        <div className="meta-container mb-4 md:flex gap-4 m-auto">
          <GatsbyImage
            className="md:hover:cursor-pointer transition group-hover:opacity-50 duration-300 drop-shadow-md w-full mb-4"
            alt={post.title}
            image={post.mainImage.gatsbyImageData}
            title={post.title}
          />
        </div>
        {introHtml && (
          <div className="introduction mb-6 md:mb-12">{introHtml}</div>
        )}
        <div className="md:grid grid-cols-12 gap-4">
          <div className="ingredients mb-6 md:mb-4 col-span-4">
            <h2 className="font-display text-3xl mb-2 text-app-theme">
              Ingredients
            </h2>
            <ul>
              {post.ingredients.map((ingredient, i) => (
                <li key={i} className="list-disc ml-4">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
          {post.optionalIngredients && (
            <div className="optional-ingredients">
              <h2 className="font-display text-3xl mb-2 text-app-theme">
                Optional Ingredients
              </h2>
              <ul>
                {post.optionalIngredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="content col-span-8">
            <h2 className="font-display text-3xl mb-2 md:mb-2 text-app-theme">
              Instructions
            </h2>
            <section className="instructions">{bodyHtml}</section>
          </div>
        </div>
        {(previous || next) && (
          <div className="mt-12">
            <nav className="grid grid-cols-2">
              {previous && (
                <div className="justify-start flex text-app-theme text-sm">
                  <Link to={`/recipe/${previous.slug}`} rel="prev">
                    ←{' '}
                    <span className="underline hover:opacity-70">
                      {previous.title}
                    </span>
                  </Link>
                </div>
              )}
              {next && (
                <div className="flex justify-end text-app-theme text-sm text-right">
                  <Link to={`/recipe/${next.slug}`} rel="next">
                    <span className="underline hover:opacity-70">
                      {next.title}
                    </span>{' '}
                    →
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default RecipeTemplate

export const pageQuery = graphql`
  query RecipeBySlug(
    $slug: String!
    $previousRecipeSlug: String
    $nextRecipeSlug: String
  ) {
    contentfulRecipe(slug: { eq: $slug }) {
      slug
      title
      date(formatString: "MMMM Do, YYYY")
      mainImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      optionalIngredients
      introduction {
        raw
      }
      cookTime
      prepTime
      servings
      content {
        raw
      }
      ingredients
      categories
    }
    previous: contentfulRecipe(slug: { eq: $previousRecipeSlug }) {
      slug
      title
    }
    next: contentfulRecipe(slug: { eq: $nextRecipeSlug }) {
      slug
      title
    }
  }
`
