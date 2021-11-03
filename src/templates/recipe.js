import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags.js'
import * as styles from './recipe.module.css'

class RecipeTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulRecipe')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    const bodyHtml = documentToReactComponents(JSON.parse(post.content.raw))

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.summary}
          image={`http:${post.mainImage.resize.src}`}
        />
        <div className={styles.container}>
          <span className={styles.meta}></span>
          <div className={styles.article}>
            <div className={styles.recipeInfo}>
              <h1>{post.title}</h1>
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="ingredients">
              <h2>Ingredients</h2>
              <ul>
                {post.ingredients.map((ingredient) => (
                  <li>{ingredient}</li>
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
            {post.cookTime && (
              <div className="cookTime">Cook Time: {post.cookTime}</div>
            )}
            {post.prepTime && (
              <div className="cookTime">Prep Time: {post.prepTime}</div>
            )}
            {post.servings && (
              <div className="servings">Servings: {post.servings}</div>
            )}
            <div className="content">{bodyHtml}</div>
            <Tags tags={post.categories} />
            {(previous || next) && (
              <nav>
                <ul className={styles.articleNavigation}>
                  {previous && (
                    <li>
                      <Link to={`/recipe/${previous.slug}`} rel="prev">
                        ← {previous.title}
                      </Link>
                    </li>
                  )}
                  {next && (
                    <li>
                      <Link to={`/recipe/${next.slug}`} rel="next">
                        {next.title} →
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            )}
          </div>
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
