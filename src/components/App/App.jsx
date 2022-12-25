import { Home } from "Pages/Home";
import { Movies } from "Pages/Movies";
import { Link, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/movies'>Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movies" element={ <Movies/> } />
      </Routes>
    </>
  );
};
