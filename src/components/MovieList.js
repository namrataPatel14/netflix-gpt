import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    console.log(movies, "movies")
    return (
        <div>
            <h1>{title}</h1>
            <div className='w-screen flex overflow-x-auto'>
                
                <div className='flex'>
                    {
                        movies?.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
                    }

                </div>
            </div>
        </div>
    )
}

export default MovieList