import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RecipePage extends React.Component {
  render() {
    const blogs = get(this, 'props.data.allContentfulBlog.nodes')

    return (
      <Layout location={this.props.location}>
        <ArticlePreview blogPosts={blogs} />
      </Layout>
    )
  }
}

export default RecipePage

export const recipePageQuery = graphql`
  query BlogPageQuery {
    allContentfulBlog(sort: { fields: [date], order: DESC }) {
      nodes {
        slug
        title
        date
        summary
        content {
          raw
        }
        mainImage {
          gatsbyImageData
        }
      }
    }
  }
`
