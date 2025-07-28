import { useState, useEffect } from 'react'
import ContentCard from '../components/ContentCard'
import { API_ENDPOINTS, getAPIHeaders } from '../config/api'
import { useNavigate } from 'react-router-dom'

export default function TVShowsPage() {
    const [tvShows, setTVShows] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchTVShows = async () => {
            try {
                setLoading(true)
                const response = await fetch(API_ENDPOINTS.TOP_TV_SHOWS, {
                    method: 'GET',
                    headers: getAPIHeaders()
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch movies')
                }

                const data = await response.json()
                setTVShows(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchTVShows()

    }, [])
    const handleContentClick = (contentId) => {
        console.log('Clicked content ID:', contentId)
        navigate(`/details/${contentId}`)
    }
    return (
        <div>
            <h1>TV Shows</h1>
            {loading && <div>Loading TV shows...</div>}
            {error && <div>Error: {error}</div>}
            <div className='content-card-container'>
                {!loading && !error && tvShows.map((tvShow) => (
                    <ContentCard key={tvShow.id} content={tvShow}
                        seeDetail={() => handleContentClick(tvShow.id)}
                    />
                ))}

            </div>

        </div>
    )
}
