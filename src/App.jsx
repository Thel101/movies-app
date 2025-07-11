import './App.css'
import { React, useState, useEffect } from 'react'
import Header from './components/Header'
import MovieCard from './components/MovieCard'

function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://imdb236.p.rapidapi.com/api/imdb/top250-movies', {
          method: 'GET',
          headers: {
            'x-rapidapi-host': 'imdb236.p.rapidapi.com',
            'x-rapidapi-key': '64e27cd86dmsh685df851c9979dcp193a0fjsnef1879fb4f9f'
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }

        const data = await response.json()
        setMovies(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [])
  if (loading) return <div>Loading movies...</div>
  if (error) return <div>Error: {error}</div>
  return (
    <main>
      <Header />
      <div>
        <span>Show All movies</span>
      </div>
      <div className='movie-card-container'>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </main>
  )
}

export default App
