
import MovieCard from './MovieCard'
interface iMovieList {
  moviesListItem: any
}

const MovieList: React.FC<iMovieList> = ({ moviesListItem }) => {

  return (
    <div className='pl-3 py-2 flex gap-3 mx-auto justify-start mt-5 flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400'>
      {moviesListItem?.map((popularMovie: any) => <MovieCard key={popularMovie.id} movie={popularMovie} />)}
    </div>
  )
}

export default MovieList