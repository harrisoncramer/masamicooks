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
        <h1 style={{ textAlign: 'center' }}>
          This site is still under construction!
        </h1>
      </Layout>
    )
  }
}

export default RootIndex
