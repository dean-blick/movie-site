import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api"

function Home() {
    const [searchQuery, setSearchquery] = useState("")
    const [movies, setMovies] = useState([])
    const [err, setErr] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                setErr("Failed to load movies")
                console.log(err)
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    async function handleSearch(e) {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return
        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setErr(null)
        } catch (err) {
            console.log(err)
            setErr("Failed to fetch movies")
        } finally {
            setLoading(false)
        }

        setSearchquery("")
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchquery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map(
                        (movie) =>
                            movie.title.toLowerCase().startsWith(searchQuery) && (
                                <MovieCard movie={movie} />
                            )
                    )}
                </div>
            )}
        </div>
    )
}

export default Home
