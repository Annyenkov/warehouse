import MovieList from "components/MovieList"
import SearchBox from "components/SearchBox"
import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { searchMovieByName } from "services/movies-api"
import { Suspense } from "react"
import { PacmanLoader } from "react-spinners"

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleFormSubmit = e => {
    const querySearch = e.movie;

    if (querySearch.trim() === '') {
      alert('Enter your request!');
      return;
    }
    setSearchParams({ query: querySearch });
    setMovies([])
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovieByName(query).then(results  => setMovies(results));
  }, [query]);

  return (
    <>
      <SearchBox onSubmit={handleFormSubmit} />
      <Suspense fallback={ <PacmanLoader
        color="blue"
        size={25}
      />}>
        { movies && <MovieList movies={ movies } />}
     </Suspense>
    </>
  )
}
export default Movies