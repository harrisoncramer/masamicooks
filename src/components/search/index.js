import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { debounce } from 'lodash'
import * as styles from './search.module.css'

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

  return (
    <div className={styles.search}>
      <input
        id="search"
        type="text"
        value={query}
        placeholder={'Search...'}
        onChange={handleChange}
      ></input>
      <ResultList results={results} query={query} />
    </div>
  )
}

const ResultList = ({ results, query }) => {
  if (results.length > 0 && query.length > 2) {
    return (
      <ul className={styles.searchList}>
        {results.map((node, i) => {
          const type = node.__typename === "ContentfulBlog" ? 'blog' : 'recipe';
          return (
            <li key={i}>
              <Link to={`/${type}/${node.slug}`}>
                <h4>{node.title}</h4>
              </Link>
            </li>
          )
        })}
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
