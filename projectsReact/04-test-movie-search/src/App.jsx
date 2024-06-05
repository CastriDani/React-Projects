import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useSearch } from './hooks/useSearch.js'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'


function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies( search, sort ) 

  const debounceGetMovies = useCallback(
      debounce(search => {
      console.log('debounce', search)
      getMovies(search)
    }, 500)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies(search)
  }
  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }
  return (
    <div className='page'>
      <header>
        <h1>Movie Search</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} name='query' type='text' placeholder='Avengers, The Matrix...' />
          <label>A - Z</label>
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
          {loading ? <span className="loader"></span> : <Movies movies={movies} />} 
      </main>
    </div>
  )
}

export default App
