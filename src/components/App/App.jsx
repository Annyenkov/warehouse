import MovieDetails from "Pages/MovieDetails/MovieDetails";
import { Home } from "Pages/Home";
import Movies from "Pages/Movies";
import { Route, Routes } from "react-router-dom";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import SharedLayout from "components/SharedLayout/SharedLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <SharedLayout/> }>
        <Route index element={ <Home /> } />
        <Route path="/movies" element={ <Movies /> } />
        <Route path="/movies/:movieId" element={ <MovieDetails /> }>
          <Route path="/movies/:movieId/cast" element={<Cast />} /> 
          <Route path="/movies/:movieId/reviews" element={ <Reviews/> } /> 
        </Route>
      </Route>
    </Routes>
  );
};

export default App