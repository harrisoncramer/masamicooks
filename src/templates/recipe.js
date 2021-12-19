import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/tags'

import './recipe.css'

class RecipeTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulRecipe')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    const bodyHtml = documentToReactComponents(JSON.parse(post.content.raw))
    const introHtml = post.introduction
      ? documentToReactComponents(JSON.parse(post.introduction.raw))
      : null

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.summary}
          image={`http:${post.mainImage.resize.src}`}
        />
        <div className="article max-w-7xl m-auto p-2">
          <div className="recipeInfo mb-2">
            <h1 className="font-display text-3xl">{post.title}</h1>
            <time dateTime={post.date} className="font-sans block mb-2">
              {post.date}
            </time>
            <Tags tags={post.categories} />
          </div>
          <div className="meta-container mb-4 md:flex gap-4">
            <GatsbyImage
              className="md:hover:cursor-pointer transition group-hover:opacity-50 duration-300 drop-shadow-md w-full mb-4"
              alt={post.title}
              image={post.mainImage.gatsbyImageData}
              title={post.title}
            />
            {introHtml && <div className="introduction">{introHtml}</div>}
          </div>
          <div className="ingredients mb-4">
            <h2 className="font-display text-3xl mb-2">Ingredients</h2>
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
              <h2>Optional Ingredients</h2>
              <ul>
                {post.optionalIngredients.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="content">
            <h2 className="font-display text-3xl">Instructions</h2>
            <section className="instructions">{bodyHtml}</section>
          </div>
          {(previous || next) && (
            <nav className="grid grid-cols-2">
              {previous && (
                <div className="justify-start flex">
                  <Link to={`/recipe/${previous.slug}`} rel="prev">
                    <small className="leading-none">← {previous.title}</small>
                  </Link>
                </div>
              )}
              {next && (
                <div className="flex justify-end">
                  <Link to={`/recipe/${next.slug}`} rel="next">
                    <small>{next.title} →</small>
                  </Link>
                </div>
              )}
            </nav>
          )}
        </div>
      </Layout>
    )
  }
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
// <div className="">
// {post.cookTime && (
//   <div className="cookTime">Cook Time: {post.cookTime}</div>
// )}
// {post.prepTime && (
//   <div className="cookTime">Prep Time: {post.prepTime}</div>
// )}
// {post.servings && (
//   <div className="servings">Servings: {post.servings}</div>
// )}
// </div>
