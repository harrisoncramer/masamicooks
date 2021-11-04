import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Container from '../container'
import Tags from '../tags'

import * as styles from './article-preview.module.css'

const ArticlePreview = ({ recipes, blogPosts }) => {
  if (!recipes && !blogPosts) return null
  if (!Array.isArray(recipes) || !Array.isArray(blogPosts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {recipes.map((recipe) => {
          return (
            <li key={recipe.slug}>
              <Link to={`/recipe/${recipe.slug}`}>
                <GatsbyImage alt="" image={recipe.mainImage.gatsbyImageData} />
                <h2>{recipe.title}</h2>
              </Link>
              <div>{recipe.summary}</div>
              <div>
                <small className="meta">{recipe.publishDate}</small>
                <Tags tags={recipe.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
