
export default function MovieCard({ movie }) {
    return (

        <div className="movie-card">
            <img className="movieImg" src={movie.primaryImage}></img>
            <h3>{movie.primaryTitle}</h3>
            <span>{movie.description}</span>
        </div>
    )
}