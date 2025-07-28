import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import MoviesPage from './pages/MoviesPage'
import TVShowsPage from './pages/TVShowsPage'
import DetailsPage from './pages/DetailsPage'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<MoviesPage />} />
            <Route path="/tvshows" element={<TVShowsPage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
          </Routes>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  )
}

export default App
