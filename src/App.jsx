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
      <main>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MoviesPage />} />
          <Route path="/tvshows" element={<TVShowsPage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
        <Footer />

      </main>

    </BrowserRouter>
  )
}

export default App
