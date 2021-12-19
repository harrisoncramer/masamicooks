import React, { useState, useEffect, useRef } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { debounce } from 'lodash'

/* Create debounced function to only call once. */
const debouncedSearch = debounce(performSearch, 300)

function performSearch(recipes, blogPosts, query, setResults) {
  const results = [...recipes, ...blogPosts]
    .map((item) => {
      return { ...item, content: Object.values(item).join('\n') }
    })
    .filter((item) => {
      return item.content.includes(query)
    })

  setResults(results)
}

const Search = (props) => {
  const searchRef = useRef(null)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const data = useStaticQuery(graphql`
    query SearchQuery {
      allContentfulRecipe {
        nodes {
          __typename
          slug
          ingredients
          summary
          title
        }
      }
      allContentfulBlog {
        nodes {
          __typename
          slug
          title
          summary
        }
      }
    }
  `)

  // Combine fields and filter by search term
  function handleChange(e) {
    setQuery(e.target.value)
    debouncedSearch(
      data.allContentfulRecipe.nodes,
      data.allContentfulBlog.nodes,
      query,
      setResults
    )
  }

  const pageClickEvent = (e) => {
    if (searchRef && searchRef.current === null) return
    if (!searchRef.current.contains(e.target)) {
      setQuery('')
    }
  }

  useEffect(() => {
    // If the item is active (ie open) then listen for clicks
    window.addEventListener('click', pageClickEvent)
    // Clean up
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [])

  return (
    <div className="search-field my-4">
      <input
        ref={searchRef}
        className="search-field my-1 flex border-2 p-2 rounded width border-app-gray"
        id="search"
        type="text"
        value={query}
        placeholder={'Search...'}
        onChange={handleChange}
      />
      {query.length > 2 && <ResultList results={results} query={query} />}
    </div>
  )
}

const ResultList = ({ results, query }) => {
  return (
    <ul className="search-results absolute z-10 bg-app-white drop-shadow rounded-b-lg rounded-tr-lg mt-1 max-h-80 overflow-scroll">
      {results.length > 0 ? (
        results.map((node, i) => {
          const type = node.__typename === 'ContentfulBlog' ? 'blog' : 'recipe'
          return (
            <Link to={`/${type}/${node.slug}`} key={i}>
              <li
                className="search-results__item py-3 px-4 hover:bg-app-gray border border-app-gray"
              >
                <h4>{node.title}</h4>
              </li>
            </Link>
          )
        })
      ) : (
        <li className="search-results__item py-1 px-4">
          <h4>No results.</h4>
        </li>
      )}
    </ul>
  )
}

export default Search
