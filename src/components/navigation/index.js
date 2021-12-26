import React from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/hot-pot.png'
import insta from '../../assets/instagram.png'
// import youtube from '../../assets/yt.png'

const Navigation = () => (
  <nav
    role="navigation"
    aria-label="Main"
    className="flex justify-between nav px-4 md:px-4 lg:px-6 py-2 lg:py-3 fixed top-0 w-full h-24 z-20 text-app-theme bg-app-white border-app-theme border-b"
  >
    <div className="flex gap-2 lg:gap-4 justify-start items-center nav__right flex-grow basis-0">
      <Link to="/about" activeClassName="active">
        <h2 className="font-display text-xl lg:text-2xl">About</h2>
      </Link>
      <Link to="/recipe/" activeClassName="active">
        <h2 className="font-display text-xl lg:text-2xl">Recipes</h2>
      </Link>
      <Link to="/blog/" activeClassName="active">
        <h2 className="font-display text-xl lg:text-2xl">Blog</h2>
      </Link>
    </div>
    <div className="flex align-center justify-center">
      <Link className="flex justify-start items-center pl-2" to="/">
        <div className="object-scale-down h-8 w-8 lg:h-10 lg:w-10 ">
          <img src={logo} alt="Logo" />
        </div>
      </Link>
    </div>
    <div className="flex justify-end flex-grow basis-0 items-center">
      <img className="w-8 h-8" src={insta} alt="Instagram" />
    </div>
  </nav>
)

export default Navigation
