import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { debounce } from 'lodash'
import * as styles from './search.module.css'

/* Create debounced function to only call once. */
const debouncedSearch = debounce(performSearch, 300)

function performSearch(recipes, query, setResults) {
  const results = recipes
    .map((recipe) => {
      return { ...recipe, content: Object.values(recipe).join('\n') }
    })
    .filter((recipe) => recipe.content.includes(query))

  setResults(results)
}

const Search = (props) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const data = useStaticQuery(graphql`
    query SearchQuery {
      allContentfulRecipe(sort: { fields: [date], order: DESC }) {
        nodes {
          slug
          servings
          ingredients
          summary
          title
        }
      }
    }
  `)

  // Combine fields and filter by search term
  function handleChange(e) {
    setQuery(e.target.value)
    debouncedSearch(data.allContentfulRecipe.nodes, query, setResults)
  }

  return (
    <div className={styles.search}>
      <input type="text" value={query} onChange={handleChange}></input>
      <ResultList results={results} query={query} />
    </div>
  )
}

const ResultList = ({ results, query }) => {
  if (results.length > 0 && query.length > 2) {
    return (
      <ul className={styles.searchList}>
        {results.map((node, i) => (
          <li key={i}>
            <Link to={`/recipe/${node.slug}`}>
              <h4>{node.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    )
  } else if (query.length > 2) {
    return (
      <ul className={styles.searchList}>
        <li>
          <h4>No results for {query}</h4>
        </li>
      </ul>
    )
  } else if (query.length > 0) return <></>
  else return <span></span>
}

export default Search
