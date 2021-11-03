import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Container from './container'
import Tags from './tags.js'
import * as styles from './article-preview.module.css'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/recipe/${post.slug}`} className={styles.link}>
                <GatsbyImage alt="" image={post.mainImage.gatsbyImageData} />
                <h2 className={styles.title}>{post.title}</h2>
              </Link>
              <div>{post.summary}</div>
              <div className={styles.meta}>
                <small className="meta">{post.publishDate}</small>
                <Tags tags={post.tags} />
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
