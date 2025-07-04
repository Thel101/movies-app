import './App.css'
import React from 'react'
import Header from './components/Header'
import MovieCard from './components/MovieCard'
import dummyData from './dummydata.json'
function App() {

  return (
    <main>
      <Header />
      <div className='movie-card-container'>
        {dummyData.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </main>
  )
}

export default App
