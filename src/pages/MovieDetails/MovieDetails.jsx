import { BackLink } from "components/BackLink/BackLink"
import { useState } from "react"
import { useEffect } from "react"
import { Outlet, useLocation, useParams } from "react-router-dom"
import { movieDetailsById } from "services/movies-api"
import { Poster, MovieCard, MoreInfo, Link } from "./MovieDetails.styled"

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null)
  const { movieId } = useParams()
  const location = useLocation()
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    try {
      const response = movieDetailsById(movieId)
      response.then(data => setMovieDetails(data))
    } catch (error) {
      console.log(error)
    }
  }, [movieId])

  if (!movieDetails) {
    return null;
  }

  const {poster_path, title, vote_average, overview, genres} = movieDetails
  return (
    <div>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieCard>
        <Poster src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} />
        <div>
          <h2>{title}</h2>
          <span>User score: {Math.round(vote_average * 10)}%</span>
          <h3>Overview</h3>
          <span>{overview}</span>
          <h3>Genres</h3>
          <ul>
            {genres.map(({id, name}) => {
            return <li key={id}>{ name }</li>
            })}
          </ul>
        </div>
      </MovieCard>
      <MoreInfo>
        <h2>Additional information</h2>
        <Link to={`/movies/${movieId}/cast`} state={{from: backLinkHref}}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`} state={{from: backLinkHref}}>Reviews</Link>
        <Outlet/>
      </MoreInfo>
    </div>
  )
}

export default MovieDetails