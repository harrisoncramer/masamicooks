import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Tags from '../components/tags'
import * as styles from './recipe.module.css'

class RecipeTemplate extends React.Component {
  render() {
    return <p>Blog Page</p>
  }
}

export default RecipeTemplate
