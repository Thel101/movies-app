
export default function MovieCard({ movie }) {
    return (

        <div className="movie-card">
            <img className="movieImg" src={movie.image}></img>
            <h3>{movie.title}</h3>
            <span>{movie.description}</span>
        </div>
    )
}