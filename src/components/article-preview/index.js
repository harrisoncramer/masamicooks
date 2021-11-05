import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Container from '../container'
import Tags from '../tags'

import * as styles from './article-preview.module.css'

const ArticlePreview = ({ recipes, blogPosts }) => {
  return (
    <Container>
      <ul className={styles.articleList}>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <li key={recipe.slug}>
                <Link to={`/recipe/${recipe.slug}`}>
                  <GatsbyImage
                    alt=""
                    image={recipe.mainImage.gatsbyImageData}
                  />
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
        {blogPosts &&
          blogPosts.map((blogPost) => {
            console.log(blogPost)
            return (
              <li key={blogPost.slug}>
                <Link to={`/blog/${blogPost.slug}`}>
                  <GatsbyImage
                    alt=""
                    image={blogPost.mainImage.gatsbyImageData}
                  />
                  <h2>{blogPost.title}</h2>
                </Link>
                <div>{blogPost.summary}</div>
                <div>
                  <small className="meta">{blogPost.publishDate}</small>
                  <Tags tags={blogPost.tags} />
                </div>
              </li>
            )
          })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
