import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const recipes = get(this, 'props.data.allContentfulRecipe.nodes')
    const blogPosts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <ArticlePreview recipes={recipes} blogPosts={blogPosts} />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
          gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
          resize(height: 630, width: 1200) {
            src
          }
        }
      }
    }

    # sort: { fields: [date], order: DESC }
    allContentfulBlogPost {
      nodes {
        title
        slug
      }
    }
  }
`
