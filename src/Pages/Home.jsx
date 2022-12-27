import MovieList from "components/MovieList"
import { useEffect } from "react"
import { useState } from "react"
import { fetchMoviesTrend } from "services/movies-api"

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null)

  useEffect(() => {
    try {
      const response = fetchMoviesTrend();
      response.then(({ results }) => setTrendMovies(results))
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <main>
      <h1>Today trending movies</h1>
      {trendMovies && <MovieList movies={ trendMovies } />}
    </main>
  )
}
export default Home;