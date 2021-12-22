import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BlogPreview from '../components/blog-preview'

const BlogPage = function (props) {
  const blogs = props.data.allContentfulBlog.nodes
  return (
    <Layout location={props.location}>
      <BlogPreview blogPosts={blogs} />
    </Layout>
  )
}

export default BlogPage

export const recipePageQuery = graphql`
  query BlogPageQuery {
    allContentfulBlog(sort: { fields: [date], order: ASC }) {
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
