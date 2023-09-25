import React from 'react';

import { IMG_CDN_URL } from '../utils/Constant';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
      <div className='h-64 mr-2 xs:h-48'>
        <img alt="movie-card" src={IMG_CDN_URL+ posterPath} className='h-full w-full rounded object-cover'/> 
      </div>
  )
}

export default MovieCard