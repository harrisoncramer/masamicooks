import React from 'react'

import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import "./layout.css"

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="content-container">
        <Seo />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </div>
    )
  }
}

export default Template
