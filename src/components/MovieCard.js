import React from 'react'
import { IMG_CDN_URL } from '../utils/Constant'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img alt="movie-card" src={IMG_CDN_URL+ posterPath}/> 
    </div>
  )
}

export default MovieCard