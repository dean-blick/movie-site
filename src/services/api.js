const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${baseUrl}/movie/popular?api_key=${apiKey}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${baseUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
            query
        )}`
    )
    const data = await response.json()
    return data.results
}
