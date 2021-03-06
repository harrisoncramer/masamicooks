import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../assets/hot-pot.png'
import insta from '../../assets/insta.svg'

const Navigation = ({ location }) => {
  const [isDropped, setIsDropped] = useState(false)

  const { pathname } = location
  const handleDropdown = (e) => {
    setIsDropped(!isDropped)
  }

  return (
    <nav
      role="navigation"
      aria-label="Main"
      className="flex justify-between items-center nav px-4 md:px-4 lg:px-6 py-2 lg:py-3 fixed top-0 w-full h-24 z-20 text-app-theme bg-app-header border-app-theme"
    >
      <div className="absolute top-6 bg-app-header flex flex-col items-start justify-start flex-grow basis-0 md:top-0 md:flex-row md:relative md:items-center">
        <button className="md:hidden" onClick={handleDropdown}>
          <svg fill="#d00000" viewBox="0 -25 100 80" width="40" height="40">
            <rect width="50" height="10"></rect>
            <rect y="20" width="50" height="10"></rect>
            <rect y="40" width="50" height="10"></rect>
          </svg>
        </button>
        <div
          className={'overflow-hidden transition-height duration-25 '.concat(
            !isDropped
              ? 'h-0 md:h-auto md:flex'
              : 'h-32 border-app-theme border'
          )}
        >
          <Link to="/about" activeClassName="active">
            <h2
              className={
                pathname.includes('about')
                  ? 'px-4 pt-2 font-display text-2xl underline'
                  : 'px-4 pt-2 font-display text-2xl'
              }
            >
              About
            </h2>
          </Link>
          <Link to="/recipe/" activeClassName="active">
            <h2
              className={
                pathname.endsWith('recipe/')
                  ? 'px-4 pt-2 font-display text-2xl underline'
                  : 'px-4 pt-2 font-display text-2xl'
              }
            >
              Recipes
            </h2>
          </Link>
          <Link to="/blog/" activeClassName="active">
            <h2
              className={
                pathname.includes('blog')
                  ? 'px-4 py-2 font-display text-2xl underline'
                  : 'px-4 py-2 font-display text-2xl'
              }
            >
              Blog
            </h2>
          </Link>
        </div>
      </div>
      <div className="flex align-center justify-end flex-grow md:flex-grow-0">
        <Link className="flex justify-start items-center" to="/">
          <div className="object-scale-down h-8 w-8 lg:h-10 lg:w-10 ">
            <img src={logo} />
          </div>
        </Link>
      </div>
      <div className="flex justify-end flex-grow basis-0 items-center">
        <svg className="w-6">
          <a
            href="https://instagram.com/masamicooks"
            className="flex-grow basis-0 flex justify-end"
          >
            <image width={25} y={62} xlinkHref={insta} alt="Instagram" />
          </a>
        </svg>
      </div>
    </nav>
  )
}

export default Navigation
