import React from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/hot-pot.png'
import insta from '../../assets/instagram.png'
// import youtube from '../../assets/yt.png'

const Navigation = () => (
  <nav
    role="navigation"
    aria-label="Main"
    className="flex justify-between nav px-3 md:px-2 py-2 lg:px-5 lg:py-3 fixed top-0 bg-app-white w-full h-18 drop-shadow z-20"
  >
    <div className="flex gap-2 lg:gap-4 justify-start items-center nav__right flex-grow basis-0">
      <Link to="/about" activeClassName="active">
        <h2 className="font-display sm:text-lg md:text-lg lg:text-xl">About</h2>
      </Link>
      <Link to="/recipe/" activeClassName="active">
        <h2 className="font-display sm:text-lg md:text-lg lg:text-xl">
          Recipes
        </h2>
      </Link>
      <Link to="/blog/" activeClassName="active">
        <h2 className="font-display sm:text-lg md:text-lg lg:text-xl">Blog</h2>
      </Link>
    </div>
    <div>
      <Link className="flex justify-start items-center pl-2" to="/">
        <div className="object-scale-down h-8 w-8 lg:h-10 lg:w-10 mr-2">
          <img src={logo} alt="Logo" />
        </div>
        <div className="mainTitle">
          <h1 className="font-display text-3xl lg:text-4xl">MasamiCooks</h1>
        </div>
      </Link>
    </div>
    <div className="flex align-center justify-end flex-grow basis-0">
      <a href="https://instagram.com/masamicooks">
        <img className="w-8 h-8" src={insta} alt="Instagram" />
      </a>
    </div>
  </nav>
)

export default Navigation
