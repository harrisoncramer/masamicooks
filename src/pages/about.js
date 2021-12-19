import React from 'react'

import Layout from '../components/layout'
import About from '../components/about'

const RecipePage = function (props) {
  return (
      <Layout location={props.location}>
        <About />
      </Layout>
  )
}

export default RecipePage
