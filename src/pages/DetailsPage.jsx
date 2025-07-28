import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { API_ENDPOINTS, getAPIHeaders } from '../config/api'

export default function DetailsPage() {
    const { id } = useParams() // Get the ID from the URL
    const navigate = useNavigate()
    const [details, setDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                setLoading(true)

                // Check if data exists in localStorage
                const cachedData = localStorage.getItem(`movie-details-${id}`)
                if (cachedData) {
                    const { data, timestamp } = JSON.parse(cachedData)
                    const now = Date.now()
                    const cacheExpiry = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

                    // Use cached data if it's less than 24 hours old
                    if (now - timestamp < cacheExpiry) {
                        setDetails(data)
                        setLoading(false)
                        return
                    }
                }

                // Fetch fresh data if no cache or cache expired
                const response = await fetch(API_ENDPOINTS.DETAILS(id), {
                    method: 'GET',
                    headers: getAPIHeaders()
                })

                if (!response.ok) {
                    throw new Error('Failed to fetch details')
                }

                const data = await response.json()
                setDetails(data)

                // Cache the data with timestamp
                localStorage.setItem(`movie-details-${id}`, JSON.stringify({
                    data,
                    timestamp: Date.now()
                }))

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        if (id) {
            fetchDetails()
        }
    }, [id])

    if (loading) return <div>Loading details...</div>
    if (error) return <div>Error: {error}</div>
    if (!details) return <div>No details found</div>

    return (

        <div className='details-page' style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', top: '20px', left: '20px' }} className="back-button" onClick={() => navigate(-1)}>
                ← Back
            </span>

            <div className="details-content" style={{ padding: '20px' }}>
                <div className="details-image">
                    <img style={{ maxWidth: '40%', height: '40em' }} src={details.primaryImage} alt={details.primaryTitle} />
                </div>

                <div className="details-info">
                    <h1>{details.primaryTitle}</h1>
                    <p className="description">{details.description}</p>
                    <div className="details-meta">
                        <p><strong>Release Date:</strong> {details.releaseDate}</p>
                        <p><strong>Rating:</strong> {details.contentRating}</p>
                        <p><strong>Genre:</strong> {details.genres && details.genres.join(', ')}</p>
                        <p><strong>Director:</strong> {details.directors && details.directors.map((director) => director.fullName).join(', ')}</p>
                        <p><strong>Writers:</strong> {details.writers && details.writers.map((writer) => writer.fullName).join(', ')}</p>
                        <p><strong>Casts:</strong> {details.cast && details.cast.slice(0, 10).map((cast) => cast.fullName).join(', ')}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}
