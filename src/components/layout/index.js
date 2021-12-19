import React from 'react'

import Seo from '../seo'
import Navigation from '../navigation'
import Footer from '../footer'
import "./layout.css"

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Navigation />
        <div className="content-container">
        <Seo />
        <main className="mt-10 md:mt-10 lg:mt-20">{children}</main>
        <Footer />
        </div>
      </>
    )
  }
}

export default Template
