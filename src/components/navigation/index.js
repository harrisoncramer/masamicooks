import React from 'react'
import { Link } from 'gatsby'
import logo from "../../assets/hot-pot.png"

import Search from '../search'

const Navigation = () => (
  <nav role="navigation" aria-label="Main" className="flex justify-between nav px-3 py-3">
    <div className="nav__left">
      <Link className="flex justify-start items-center pl-2" to="/" >
        <div className="object-scale-down h-10 w-10">
          <img src={logo} alt="Logo" className="si" />
        </div>
        <div className="mainTitle">
          <h1 className="font-display sm:text-xl md:text-2xl lg:text-3xl">MasamiCooks</h1>
        </div>
      </Link>
    </div>
    <div className="gap-4 justify-end items-center flex nav__right">
      <Search />
      <Link to="/" activeClassName="active">
        <h2 className="font-display sm:text-lg md:text-lg lg:text-xl">
          Home
        </h2>
      </Link>
      <Link to="/recipe/" activeClassName="active">
        <h2 className="font-display sm:text-lg md:text-lg lg:text-xl">
          Recipes
        </h2>
      </Link>
      <Link to="/blog/" activeClassName="active">
        <h2 className="font-display sm:text-lg md:text-lg lg:text-xl">
          Blog
        </h2>
      </Link>
    </div>
  </nav>
)

export default Navigation
