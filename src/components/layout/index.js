import React from 'react'

import Seo from '../seo'
import Navigation from '../navigation'
import Footer from '../footer'
import './layout.css'

const Template = function ({ children }) {
  return (
    <>
      <Navigation />
      <div className="content-container">
        <Seo />
        <main className="mt-16 lg:mt-20 mx-4">{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Template
