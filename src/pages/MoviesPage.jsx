import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ContentCard from '../components/ContentCard'
import { API_ENDPOINTS, getAPIHeaders } from '../config/api'
export default function MoviesPage() {
    const navigate = useNavigate()
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                const response = await fetch(API_ENDPOINTS.TOP_MOVIES, {
                    method: 'GET',
                    headers: getAPIHeaders()
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

    const handleContentClick = (contentId) => {
        console.log('Clicked content ID:', contentId)
        navigate(`/details/${contentId}`)
    }

    return (
        <div className="movies-page">
            <h1>Movies</h1>
            {loading && <div>Loading movies...</div>}
            {error && (
                <div className="error-container">
                    <div className="error-icon">⚠️</div>
                    <h2>Unable to Load Movies</h2>
                    <p>Error: {error}</p>
                    <button onClick={() => window.location.reload()}>
                        🔄 Try Again
                    </button>
                </div>
            )}
            <div className='content-card-container'>
                {!loading && !error && movies.map((movie) => (
                    <ContentCard
                        key={movie.id}
                        content={movie}
                        seeDetail={() => handleContentClick(movie.id)}
                    />
                ))}
            </div>
        </div>
    )
}
