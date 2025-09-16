import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {
  const [searchQuery, setSearchquery] = useState("")

  const movies = [
    { id: 1, title: "movie1", release_date: "2020" },
    { id: 2, title: "movie2", release_date: "2023" },
    { id: 3, title: "movie3", release_date: "2026" },
    { id: 4, title: "movie4", release_date: "2021" },
  ]
  function handleSearch(e) {
    e.preventDefault()
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
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} />
            )
        )}
      </div>
    </div>
  )
}

export default Home
