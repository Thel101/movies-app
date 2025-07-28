// API configuration
export const API_CONFIG = {
    RAPIDAPI_KEY: import.meta.env.VITE_RAPIDAPI_KEY,
    RAPIDAPI_HOST: 'imdb236.p.rapidapi.com',
    BASE_URL: 'https://imdb236.p.rapidapi.com/api/imdb'
}

// Common headers for API requests
export const getAPIHeaders = () => ({
    'x-rapidapi-host': API_CONFIG.RAPIDAPI_HOST,
    'x-rapidapi-key': API_CONFIG.RAPIDAPI_KEY
})

// API endpoints
export const API_ENDPOINTS = {
    TOP_MOVIES: `${API_CONFIG.BASE_URL}/top250-movies`,
    TOP_TV_SHOWS: `${API_CONFIG.BASE_URL}/top250-tv`,
    DETAILS: (id) => `${API_CONFIG.BASE_URL}/${id}`
}
