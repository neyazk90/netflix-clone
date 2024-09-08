import Banner from "./components/Banner"
import MovieList from "../components/shared/MovieList";
import usePopularMovies from "../hooks/useGetPopularMovies";
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { lang } from "../locale/language";


const Home = () => {
  usePopularMovies();
  useNowPlayingMovies();
  const langKey = useSelector(store => store?.app.lang);
  const popularMovie = useSelector(store => store?.movieList.popularMovies);
  const nowPlayingMovie = useSelector(store => store?.movieList.nowPlayingMovies);
  return (
    <div>
      <Banner />
      {popularMovie && <> <h1 className="text-2xl pl-4 pt-16">{lang[langKey].popularMovieLabel}</h1> <MovieList moviesListItem={popularMovie} /></>}
      {nowPlayingMovie && <> <h1 className="text-2xl pl-4 pt-16">{lang[langKey].nowPlayingMovieLabel}</h1> <MovieList moviesListItem={nowPlayingMovie} /></>}
    </div>
  )
}

export default Home