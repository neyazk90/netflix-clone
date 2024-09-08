import React from 'react'
import { TMDB_IMAGE_CDN_URL } from '../../utils/constants';
import { iMovieCard } from '../../interfaces/app';


const MovieCard: React.FC<iMovieCard> = ({ movie }) => {

  const { poster_path, title, overview, original_language, rating, releaseDate } = movie;

  return (
    <div className="min-w-[20%] bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-60 object-cover"
        src={TMDB_IMAGE_CDN_URL + poster_path}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-1">
          {overview.length > 50
            ? `${overview.substring(0, 50)}...`
            : overview}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-yellow-500 font-semibold">
            ⭐ {rating}
          </span>
          <span className='text-muted'>{original_language.toUpperCase()}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard