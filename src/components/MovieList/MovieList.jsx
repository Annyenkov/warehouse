import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import { Link, List, MovieCard, Poster } from "./MovieList.styled"

const MovieList = ({ movies }) => {
  const location = useLocation()
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => {
        return (
          <MovieCard key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <Poster src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt=''/>
              <span>{ title }</span>
            </Link>
          </MovieCard>
        )
      })}
    </List>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default MovieList