import React from 'react'
import { Link } from 'gatsby'

import Search from '../search'

const Navigation = () => (
  <nav role="navigation" aria-label="Main">
    <Link to="/" >
      <span />
      <span>masamicooks</span>
    </Link>
    <div>
      <Search />
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li>
          <Link to="/recipe/" activeClassName="active">
            Recipes
          </Link>
        </li>
        <li>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation
