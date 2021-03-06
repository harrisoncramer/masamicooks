import React from 'react'

import Seo from '../seo'
import Navigation from '../navigation'
import Footer from '../footer'
import './layout.css'

const Template = function ({ children, location }) {
  return (
    <>
      <Navigation location={location} />
      <div className="content-container">
        <Seo />
        <main className="my-32 lg:mt-32 mx-4">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Template
