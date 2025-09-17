import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites() {
    const { favorites } = useMovieContext()
    if (favorites && favorites.length > 0) {
        return (
            <div className="movies-grid">
                {favorites.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
            </div>
        )
    } else {
        return (
            <div className="favorites-empty">
                <h2>No Favorites Yet</h2>
                <p>Start adding favorites to your list!</p>
            </div>
        )
    }
}

export default Favorites
