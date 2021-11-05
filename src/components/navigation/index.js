import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import Search from '../search'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <span className={styles.logo} />
      <span className={styles.navigationItem}>masamicooks</span>
    </Link>
    <div className={styles.containerRight}>
      <Search />
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/recipe/" activeClassName="active">
            Recipes
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navigation
